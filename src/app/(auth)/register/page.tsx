import React from 'react'
import { authStyles } from '@/lib/styles'
import Link from 'next/link'

function RegisterPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full p-8 space-y-6 rounded-2xl shadow-2xl bg-zinc-800">
                <img src="/globe.svg" alt="Threads Clone Logo" className="mx-auto h-12 w-auto invert" />
                <h1 className='text-2xl font-semibold text-white text-center'>Register</h1>
                <form className="space-y-6">

                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input type="email" id="email" className={authStyles.inputs} placeholder="Enter your email" />

                    <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                    <input type="password" id="password" className={authStyles.inputs} placeholder="Enter your password" />

                    <label htmlFor="confirm-password" className="block text-sm font-medium text-white">Confirm Password</label>
                    <input type="password" id="confirm-password" className={authStyles.inputs} placeholder="Confirm your password" />

                    <div className="flex justify-center">
                        <button type="submit" className={authStyles.button}>
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-text-muted text-center mt-4">
                    Already have an account? {" "}
                    <Link href="/login" className="text-text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    )
}

export default RegisterPage