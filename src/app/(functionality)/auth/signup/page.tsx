"use client";
import EnterEmail from "./EnterEmail";
import VerifyOtp from "./VerifyOtp";
import SignupForm from "./SignupForm";
import { useState } from "react";

export default function SignupPage() {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="container mx-auto p-4">
            {step === 1 && <EnterEmail onNext={handleNextStep} />}
            {step === 2 && <VerifyOtp onNext={handleNextStep} />}
            {step === 3 && <SignupForm />}
        </div>
    );
}