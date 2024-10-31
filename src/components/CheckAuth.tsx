"use client"

import { useAuthStore } from "@/store/auth"
import { useEffect } from "react"

const CheckAuth = () => {
	const checkAuth = useAuthStore(state => state.checkAuth)

	useEffect(() => {
		checkAuth()
	}, [])

	return null
}

export default CheckAuth
