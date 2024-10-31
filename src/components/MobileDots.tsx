"useClient"

import Image from "next/image"
import Delete from "./Delete"
import { useEffect, useRef, useState } from "react"
import { MotionDiv } from "./MotionDiv"
import { AnimatePresence } from "framer-motion"
import Copy from "./Copy"

const variants = {
	show: { opacity: 1 },
	hidden: { opacity: 0 }
}

const MobileDots = ({ id, url }: { id: number; url: string }) => {
	const [isOpen, setIsOpen] = useState(false)
	const modalRef = useRef(null)

	const handleToggle = () => {
		setIsOpen(prev => !prev)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			modalRef.current &&
			!(modalRef.current as HTMLElement).contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<div className="md:hidden" ref={modalRef}>
			<Image
				src="/dots.svg"
				alt="dots"
				width={25}
				height={25}
				className="cursor-pointer"
				onClick={handleToggle}
			/>

			<AnimatePresence>
				{isOpen && (
					<MotionDiv
						variants={variants}
						animate="show"
						initial="hidden"
						exit="hidden"
						className="absolute top-0 right-0 z-10 w-max p-3 px-4 flex flex-col bg-white shadow-lg items-center gap-3"
					>
						<Copy url={url} />
						<Image
							className="cursor-pointer"
							src="/edit.svg"
							alt="edit"
							width={25}
							height={25}
						/>
						<Delete id={id} />
					</MotionDiv>
				)}
			</AnimatePresence>
		</div>
	)
}

export default MobileDots
