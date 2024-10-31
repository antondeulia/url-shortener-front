"use client"

import { useAuthStore } from "@/store/auth"
import { ReactNode } from "react"

const SignedOut = ({ children }: { children: ReactNode }) => {
	const isAuthenticated = useAuthStore(state => state.isAuthenticated)

	if (isAuthenticated) {
		return null
	} else {
		return <>{children}</>
	}
}

export default SignedOut
