import { motion } from "motion/react"
import { Navbar } from "./Navbar"
import { CustomButton } from "./ui/custom-button"
import OrbitalLines from "./ui/orbital-lines"
import Stars from "./ui/stars"

export function Hero() {
	return (
		<section className="min-h-screen relative overflow-hidden py-3 px-6 sm:px-14" id="home" >
			<Navbar />
			<OrbitalLines />
			<div className="flex flex-col items-center justify-center h-dvh">
				<Stars />
				<div className="container px-4 py-0 text-center md:text-left h-1/2">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="max-w-3xl"
					>
						<h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-fira">
							Trusted Multi-Chain{" "}
							<span className="text-secondary inline-block">DEX</span>{" "}Platform
						</h1>
						<p className="text-muted-foreground text-2xl mb-8">
							Trade, earn, and own crypto on the all-in-one multi-chain DEX
						</p>
						<div className="flex gap-4 flex-wrap justify-center md:justify-start">
							<CustomButton variant="gradient">
								Connect Wallet
							</CustomButton>
							<CustomButton variant="outline">
								Trade Crypto
							</CustomButton>
						</div>
					</motion.div>
				</div>
			</div>
		</section >
	)
}
