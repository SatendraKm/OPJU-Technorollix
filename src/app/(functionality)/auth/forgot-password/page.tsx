"use client";
import { useState } from "react";
import EnterResetEmail from "./EnterResetEmail";
import VerifyOtpReset from "./VerifyOtpReset";
import ResetPasswordForm from "./ResetPasswordForm";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && <EnterResetEmail onNext={handleNextStep} />}
      {step === 2 && <VerifyOtpReset onNext={handleNextStep} />}
      {step === 3 && <ResetPasswordForm />}
    </div>
  );
}
