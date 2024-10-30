import type { Metadata } from "next"
import { Asap } from "next/font/google"

import "./globals.css"
import Footer from "./components/Footer"
import Tsparticles from "./components/Tsparticles"
import ScrollArrow from "./components/ScrollToTop"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

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
				<Tsparticles />
				{children}
				<Footer />
				<ScrollArrow />

				<ToastContainer position="top-right" limit={3} newestOnTop />
			</body>
		</html>
	)
}
