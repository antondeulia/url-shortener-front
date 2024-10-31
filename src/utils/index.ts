const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
	const accessToken = localStorage.getItem("accessToken")

	console.log(accessToken)

	const headers = {
		"Content-Type": "application/json",
		...options.headers
	}

	if (accessToken) {
		// @ts-ignore
		headers["Authorization"] = `Bearer ${accessToken}`
	}

	const res = await fetch(url, {
		...options,
		headers
	})

	return res
}

export default fetchWithAuth
