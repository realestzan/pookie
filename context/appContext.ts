'use client'
import { User } from "next-auth";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext<User | undefined>(undefined)

export const user = { 
    id: '', 
    email: 'tmail', 
    name: '', 
    image: ''
}

export function useAppContext() { 
    const user = useContext(AppContext)
    if (user === undefined) { 
        console.log('your phone linging')
    }

    return user
}

