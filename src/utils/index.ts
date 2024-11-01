"use client"

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
	const accessToken = localStorage.getItem("accessToken")

	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		...((options.headers as Record<string, string>) || {})
	}

	if (accessToken) {
		headers.Authorization = `Bearer ${accessToken}`
	}

	const res = await fetch(url, {
		...options,
		headers
	})

	return res
}

export const generateRandomString = (length = 6) => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	let result = ""

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		result += characters[randomIndex]
	}

	return result
}

export const generateRandomNumber = (length = 6) => {
	const min = Math.pow(10, length - 1)
	const max = Math.pow(10, length) - 1
	return Math.floor(Math.random() * (max - min + 1)) + min
}
