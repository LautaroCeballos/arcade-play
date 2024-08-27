// "use server"
// "use client"

import { User } from '@/types'
import { supabase } from '../../lib/supabaseClient'
import { redirect } from 'next/dist/server/api-utils'
// import { redirect } from 'next/navigation'

export async function signInWithAzure() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
            scopes: 'offline_access openid profile email User.Read',
            redirectTo: 'http://localhost:3000/users/new',
        },
    })

    if (error) {
        console.error('Error signing in with Azure:', error.message)
        return error
    }


    // if (data && data.url) {
    //     console.log('Redirecting to:', data.url)
    // redirect(data.url) // use the redirect API for your server framework
    // window.location.href = data.url;
    // } else {
    //     console.error('No URL returned from Azure')
    // }
}

export async function signOutAzure() {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Error signing out:', error?.message)
}


export async function getUserData() {
    // export async function loginRegisterUser() {
    const { data: authData, error: authError } = await supabase.auth.getUser();

    if (authError) {
        console.error('Error getting user data:', authError.message);
        return null;
    }

    let { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id)
        .single();

    if (userData) {
        // redirect(res, 300, `/user/${userData.nickname}`)
    }

    if (userError && userError.message !== 'No results found') {

        userData = await createUserProfile(authData.user);

        // console.error('Error getting user data:', userError.message);
        // return { ...authData.user, userData };
    }

    return userData;
}


async function createUserProfile(authUserData: any) {

    const { id, email, created_at, user_metadata } = authUserData;

    const userData: User = {
        id: id,
        email: email,
        created_at: created_at,
        name: user_metadata.full_name,
        nickname: "",
        img: 'https://placehold.co/100x100',
        role: 'user',
    }

    const { data, error } = await supabase
        .from('users')
        .insert([
            userData
        ]);

    if (error) {
        console.error('Error creating user profile:', error.message);
        return error;
    }

    return data;
}