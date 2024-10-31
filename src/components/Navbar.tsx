"use client"

import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const router = useRouter()

	const handleClose = () => {
		setIsOpen(false)
	}

	const modalRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			handleClose()
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	const onSignOut = async () => {
		localStorage.removeItem("accessToken")
		toast.success("Signed out")
		router.push("/sign-in")
	}

	return (
		<div className="absolute top-0 right-[30px]">
			<div className="relative">
				<div
					className="flex flex-col gap-[6px] cursor-pointer"
					onClick={() => setIsOpen(prev => !prev)}
				>
					<div className="bg-blue-default w-[35px] h-[4px]"></div>
					<div className="bg-blue-default w-[35px] h-[4px]"></div>
					<div className="bg-blue-default w-[35px] h-[4px]"></div>
				</div>

				<AnimatePresence>
					{isOpen && (
						<div
							ref={modalRef}
							className="flex flex-col gap-6 bg-white p-8 min-w-[400px] absolute top-[40px] right-[45px] shadow-lg z-30 rounded-xl"
						>
							<div className="flex gap-4 items-center">
								<Image
									src="/Designer.jpeg"
									alt="avatar"
									width={40}
									height={40}
									className="rounded-full"
								/>

								<div className="flex flex-col">
									<span className="text-[20px]">Anton Deulia</span>
									<span className="text-gray-400">
										anton.deulia06@gmail.com
									</span>
								</div>
							</div>

							<div className="flex flex-col items-start">
								<div className="flex gap-6 items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 p-4 w-full">
									<Image
										src="/settings.svg"
										alt="settings"
										width={20}
										height={20}
									/>
									<span className="text-[18px]">Manage account</span>
								</div>
								<div
									className="flex gap-6 items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 p-4 w-full"
									onClick={onSignOut}
								>
									<Image
										src="/leave.svg"
										alt="settings"
										width={20}
										height={20}
									/>
									<span className="text-[18px]">Sign out</span>
								</div>
							</div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Navbar
