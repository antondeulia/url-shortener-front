import AuthSidebar from "@/components/AuthSidebar"
import Tsparticles from "@/components/Tsparticles"
import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex relative z-10">
			{children}
			<AuthSidebar />
			<Tsparticles />
		</div>
	)
}

export default AuthLayout
