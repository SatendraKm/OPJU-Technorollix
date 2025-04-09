"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { sendWelcomeEmail } from "@/actions/mailer";
import Link from "next/link";

const emailSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function EnterEmail({ onNext }: { onNext: () => void }) {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof emailSchema>) => {
        setLoading(true);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await sendWelcomeEmail(values.email, otp);
        const isOutsider = !values.email.endsWith("@opju.ac.in");
        sessionStorage.setItem("signupEmail", values.email);
        sessionStorage.setItem("signupOtp", otp);
        sessionStorage.setItem("isOutsider", JSON.stringify(isOutsider));

        toast({
            title: "OTP Sent",
            description: `An OTP has been sent to ${values.email}. Please check your inbox.`,
        });

        setLoading(false);
        onNext();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign-up</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Enter your email" {...form.register("email")} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Sending" : "Send OTP"}
                    </Button>
                </form>
            </Form>
            <div className="mt-4 text-center">
                <p className="text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/login">
                        <span className="text-blue-500 hover:underline">Log in</span>
                    </Link>
                </p>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                <p>Note:</p>
                <ul className="list-disc list-inside">
                    <li>OPJU students must register using their college email.</li>
                    <li>Check your spam folder if you don&apos;t receive the OTP.</li>
                    <li>Contact support if you face any issues.</li>
                </ul>
            </div>
        </div>
    );
}