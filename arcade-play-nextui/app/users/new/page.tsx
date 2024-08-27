"use client"
import { signOutAzure } from '@/app/api/auth';
import { useGetUserData } from '@/hooks';



export default function Login() {
    const { user, error } = useGetUserData()

    return (
        <div>
            {user ? <h1>Welcome, {user.email}</h1> : null}
            {error ? <h1>Error: {error.message}</h1> : null}

            <button onClick={signOutAzure}>Sign Out</button>
        </div>
    )
}