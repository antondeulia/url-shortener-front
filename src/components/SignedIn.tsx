"use client"

import { useAuthStore } from "@/store/auth"
import { ReactNode } from "react"

const SignedIn = ({ children }: { children: ReactNode }) => {
	const isAuthenticated = useAuthStore(state => state.isAuthenticated)

	if (isAuthenticated) {
		return <>{children}</>
	} else {
		return null
	}
}

export default SignedIn
