"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    // FRONTEND VALIDATION (IMPORTANT)
    if (password !== confirmPassword) {
      setMsg("Passwords do not match ❌");
      return;
    }

    try {
      await authClient.signUp.email({
        email,
        password,
        name,
      });

      setMsg("Signup success ✅");
    } catch (err) {
      setMsg(`Signup failed ❌  ${err}`);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <img src="/user01.png" alt="Logo" className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="John Doe" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="m@example.com" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" className="border rounded px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Create Account
          </button>
          <p>{msg}</p>
        </form>
      </div>
    </div>
  )
}