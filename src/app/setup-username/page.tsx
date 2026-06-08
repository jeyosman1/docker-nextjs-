import { authStyles } from '@/lib/styles'
import Link from 'next/link'

function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full p-8 space-y-6 rounded-2xl shadow-2xl bg-zinc-800">
                <img src="/globe.svg" alt="Threads Clone Logo" className="mx-auto h-12 w-auto invert" />
                <h1 className='text-2xl font-semibold text-text-primary text-center'>Setup Username</h1>
                <form className="space-y-4">

                    <label htmlFor="email" className="block text-sm font-medium text-white">Username</label>
                    <input type="text" id="username" className={authStyles.inputs} placeholder="Choose a username" />


                    <button type="submit" className={authStyles.button}>
                        Login
                    </button>
                    
                </form>
            </div>
        </main>
    )
}

export default LoginPage