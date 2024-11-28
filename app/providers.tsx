'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ProvidersProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            {children}
        </NextThemesProvider>
    )
}