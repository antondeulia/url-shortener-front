"use client"

import ScrollToTop from "react-scroll-to-top"

const ScrollArrow = () => {
	return (
		<ScrollToTop
			smooth={true}
			component={<button>↑</button>}
			style={{
				backgroundColor: "rgb(44, 135, 197)",
				color: "white",
				borderRadius: "50%",
				width: "60px",
				fontSize: "28px",
				height: "60px",
				border: "none",
				cursor: "pointer",
				position: "fixed",
				bottom: "40px",
				right: "40px",
				zIndex: 30
			}}
		/>
	)
}

export default ScrollArrow
