"use client"

import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import SignedIn from "./SignedIn"
import SignedOut from "./SignedOut"
import Link from "next/link"

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
			<SignedIn>
				<div className="relative">
					<div
						className="flex flex-col gap-[6px] cursor-pointer"
						onClick={() => setIsOpen(prev => !prev)}
					>
						<div className="bg-blue-default w-[25px] h-[3px]"></div>
						<div className="bg-blue-default w-[25px] h-[3px]"></div>
						<div className="bg-blue-default w-[25px] h-[3px]"></div>
					</div>

					<AnimatePresence>
						{isOpen && (
							<div
								ref={modalRef}
								className="flex flex-col gap-6 bg-white p-6 min-w-[300px] absolute top-[35px] right-[40px] shadow-lg z-30 rounded-xl"
							>
								<div className="flex gap-4 items-center">
									<Image
										src="/Designer.jpeg"
										alt="avatar"
										width={35}
										height={35}
										className="rounded-full"
									/>

									<div className="flex flex-col">
										<span className="text-md">Anton Deulia</span>
										<span className="text-sm text-gray-400">
											anton.deulia06@gmail.com
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-2 items-start">
									<div className="flex gap-6 items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 p-2 w-full">
										<Image
											src="/settings.svg"
											alt="settings"
											width={20}
											height={20}
										/>
										<span className="text-md">Manage account</span>
									</div>
									<div
										className="flex gap-6 items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 p-2 w-full"
										onClick={onSignOut}
									>
										<Image
											src="/leave.svg"
											alt="settings"
											width={20}
											height={20}
										/>
										<span className="text-md">Sign out</span>
									</div>
								</div>
							</div>
						)}
					</AnimatePresence>
				</div>
			</SignedIn>

			<SignedOut>
				<div className="flex gap-4 text-lg">
					<Link
						href="/sign-in"
						className="border bg-blue-dark text-white rounded-sm py-2 px-6"
					>
						Log in
					</Link>
					<Link
						href="/sign-up"
						className="border rounded-sm border-blue-dark py-2 px-6"
					>
						Sign up
					</Link>
				</div>
			</SignedOut>
		</div>
	)
}

export default Navbar
