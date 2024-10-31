const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
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

export default fetchWithAuth
