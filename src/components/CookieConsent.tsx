"use client"

import { useState, useEffect } from "react"

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Check if the user has already given consent
		const consent = localStorage.getItem("cookieConsent")
		if (!consent) {
			setIsVisible(true)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "accepted")
		setIsVisible(false)
	}

	const handleReject = () => {
		localStorage.setItem("cookieConsent", "rejected")
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div className="z-50 fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
			<p className="text-md">
				We use cookies to improve your experience on our site. Do you accept
				cookies?
			</p>
			<div>
				<button
					onClick={handleAccept}
					className="bg-green-500 px-4 py-1 rounded mr-2"
				>
					Accept
				</button>
				<button onClick={handleReject} className="bg-red-500 px-4 py-1 rounded">
					Reject
				</button>
			</div>
		</div>
	)
}
