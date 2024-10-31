"use client"

import { useAuthStore } from "@/store/auth"

const TermsCheckbox = () => {
	const isTermsAgree = useAuthStore(state => state.isTermsAgree)
	const toggleTermsAgree = useAuthStore(state => state.toggleIsTermsAgree)

	return (
		<div className="flex gap-4 mt-2">
			<input
				type="checkbox"
				className="w-6"
				checked={isTermsAgree}
				onChange={toggleTermsAgree}
			/>
			<p className="text-[1rem] md:text-[1.3rem]">
				I agree to the <b>Terms of Service</b> and <b>Privacy Policy.</b>
			</p>
		</div>
	)
}

export default TermsCheckbox
