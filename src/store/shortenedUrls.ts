import { IShortenedUrl } from "@/utils/interfaces/shortenedUrl"
import { create } from "zustand"

type ShortenedUrlsStore = {
	shortenedUrls: IShortenedUrl[]
	setShortenedUrls: (data: IShortenedUrl[]) => void
	addShortenedUrl: (data: IShortenedUrl) => void
	deleteShortenedUrl: (id: number) => void
	fetchShortenedUrls: () => Promise<void>
}

export const useShortenedUrlsStore = create<ShortenedUrlsStore>(set => ({
	shortenedUrls: [],

	setShortenedUrls: (data: IShortenedUrl[]) => set({ shortenedUrls: data }),
	addShortenedUrl: newUrl =>
		set(state => ({
			shortenedUrls: [...state.shortenedUrls, newUrl]
		})),
	deleteShortenedUrl: (id: number) =>
		set(state => ({
			shortenedUrls: [
				...state.shortenedUrls.filter(shortenedUrl => shortenedUrl.id !== id)
			]
		})),
	fetchShortenedUrls: async () => {
		const res = await fetch(`http://localhost:4200`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDI0MDA2OCwiZXhwIjoxNzMwMzI2NDY4fQ._cOe1SbJ6_9YlvJArTHF_VaYGS-jmQ4CDlKVYxsmIWk"
			}
		})
		if (res.status === 200) {
			const data: IShortenedUrl[] = await res.json()

			set(state => {
				if (JSON.stringify(state.shortenedUrls) !== JSON.stringify(data)) {
					return { shortenedUrls: data }
				}
				return state
			})
		} else {
			throw new Error("Unable to fetch your data")
		}
	}
}))
