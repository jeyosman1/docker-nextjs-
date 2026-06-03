"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      await authClient.signIn.email({
        email,
        password,
      });

      setMsg("Login success ✅");
      router.push("/");
    } catch (err) {
      setMsg(`Login failed ❌  ${err}`);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 text-black">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <img src="/user01.png" alt="Logo" className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2"
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Login
          </button>
          <p>{msg}</p>
        </form>
      </div>
    </div>
  );
}