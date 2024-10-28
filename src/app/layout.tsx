import type { Metadata } from "next"
import { Asap } from "next/font/google"

import "./globals.css"
import Footer from "./components/sections/Footer"
import Tsparticles from "./components/Tsparticles"
import ScrollToTop from "react-scroll-to-top"
import ScrollArrow from "./components/ScrollToTop"

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
			</body>
		</html>
	)
}
