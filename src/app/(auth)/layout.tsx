import Tsparticles from "@/components/Tsparticles"
import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}
			<Tsparticles />
		</>
	)
}

export default AuthLayout
