import { create } from "zustand"

type AuthStore = {
	isTermsAgree: boolean
	isAuthenticated: boolean

	toggleIsTermsAgree: () => void
	checkAuth: () => void
	setIsAuthenticated: (value: boolean) => void
}

export const useAuthStore = create<AuthStore>(set => ({
	isTermsAgree: false,
	isAuthenticated: false,

	setIsAuthenticated: value => set({ isAuthenticated: value }),
	checkAuth: () => {
		const token = localStorage.getItem("accessToken")
		if (token) {
			set({ isAuthenticated: true })
		} else {
			set({ isAuthenticated: false })
		}
	},
	toggleIsTermsAgree: () => {
		set(state => ({
			isTermsAgree: !state.isTermsAgree
		}))
	}
}))
