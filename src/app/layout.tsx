import type { Metadata } from "next"
import { Asap } from "next/font/google"

import "./globals.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import CookieConsent from "../components/CookieConsent"

const asap = Asap({ subsets: ["latin"], weight: ["400", "700", "900"] })

export const metadata: Metadata = {
	title: "Url Shortener"
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={asap.className}>
				{children}

				<CookieConsent />

				<ToastContainer
					position="top-right"
					limit={3}
					autoClose={1500}
					newestOnTop
				/>
			</body>
		</html>
	)
}
