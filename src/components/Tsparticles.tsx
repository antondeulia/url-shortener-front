"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim" // Загружаем slim версию

const Tsparticles = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine: Engine) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = (container: Container) => {}

	return (
		<>
			{init && (
				<Particles
					id="tsparticles"
					options={{
						fpsLimit: 120,
						interactivity: {
							events: {
								onHover: {
									enable: true,
									mode: "repulse"
								}
							},
							modes: {
								push: {
									quantity: 4
								},
								repulse: {
									distance: 200,
									duration: 0.4
								}
							}
						},
						particles: {
							color: {
								value: "#5088ff"
							},
							links: {
								color: "#FF7A00",
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce"
								},
								random: false,
								speed: 4,
								straight: false
							},
							number: {
								density: {
									enable: true
								},
								value: 120
							},
							opacity: {
								value: 0.5
							},
							shape: {
								type: "circle"
							},
							size: {
								value: { min: 1, max: 5 }
							}
						},
						detectRetina: true
					}}
				/>
			)}
		</>
	)
}

export default Tsparticles
