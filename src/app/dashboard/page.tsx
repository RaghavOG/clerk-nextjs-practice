"use client";  // Ensures this component runs on the client side
import React from 'react'
import { useAuth, useUser } from '@clerk/nextjs'

const Dashboard = () => {
    const { isLoaded, userId, sessionId } = useAuth();
    const { isLoaded: isUserLoaded, user } = useUser();

    if (!isLoaded || !isUserLoaded || !userId) {
        return <div>Loading...</div>;  // Show a loading state while the user data is loading
    }

    return (
        <div className='flex items-center justify-center text-3xl flex-col border border-x-white w-full mt-7 rounded'>
            <p>Hello, {user?.firstName}! </p>
            Your current active session is {sessionId}.
        </div>
    );
};

export default Dashboard;
