"use client"

import { useAuthStore } from "@/store/auth"
import { ReactNode } from "react"

const SignedIn = ({ children }: { children: ReactNode }) => {
	const isAuthenticated = useAuthStore(state => state.isAuthenticated)

	console.log(isAuthenticated)

	if (isAuthenticated) {
		return null
	} else {
		return <>{children}</>
	}
}

export default SignedIn
