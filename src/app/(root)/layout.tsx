import Footer from "../../components/Footer"
import ScrollArrow from "../../components/ScrollToTop"
import Tsparticles from "../../components/Tsparticles"
import { ReactNode } from "react"
import CheckAuth from "@/components/CheckAuth"
import Navbar from "@/components/Navbar"

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative">
			<Tsparticles />

			<Navbar />

			{children}
			<Footer />
			<ScrollArrow />

			<CheckAuth />
		</div>
	)
}

export default RootLayout
