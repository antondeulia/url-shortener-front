import { ToastContainer } from "react-toastify"
import Footer from "../../components/Footer"
import ScrollArrow from "../../components/ScrollToTop"
import Tsparticles from "../../components/Tsparticles"
import { ReactNode } from "react"
import CheckAuth from "@/components/CheckAuth"

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Tsparticles />
			{children}
			<Footer />
			<ScrollArrow />

			<CheckAuth />
		</div>
	)
}

export default RootLayout
