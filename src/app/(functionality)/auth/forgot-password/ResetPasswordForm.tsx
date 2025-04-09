"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import useFetch from "@/hooks/use-fetch";
import { resetPassword } from "@/actions/user-actions";

// 1. Zod schema for password validation
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPasswordForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 2. Store the user’s email locally to display in a disabled field
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Grab the email from sessionStorage
    const storedEmail = sessionStorage.getItem("resetPasswordEmail") || "";
    setUserEmail(storedEmail);
  }, []);

  // 3. Initialize react-hook-form with the Zod schema
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  // 4. useFetch hook to call resetPassword server action
  const { data, loading, error, fn } = useFetch(resetPassword);

  // 5. Handle form submission
  const onSubmit = async (values: z.infer<typeof passwordSchema>) => {
    // Call fn with two arguments, matching resetPassword(email, newPassword)
    await fn(userEmail, values.password);
  };

  // 6. Show error or success messages
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
    if (data) {
      toast({
        title: "Success",
        description: "Your password has been reset successfully!",
      });
      router.push("/auth/login");
    }
  }, [error, data, router]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* 7. Disabled Email Field */}
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                value={userEmail}
                className="font-semibold disabled:opacity-70"
                disabled
              />
            </FormControl>
          </FormItem>

          {/* 8. New Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 9. Confirm New Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 10. Submit Button */}
          {/* Boolean(...) ensures 'disabled' is always a boolean, fixing the type error. */}
          <Button type="submit" className="w-full" disabled={Boolean(loading)}>
            {loading ? "Submitting" : "Reset Password"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
