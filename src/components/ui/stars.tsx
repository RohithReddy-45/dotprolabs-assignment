import { motion } from "motion/react"

function Stars() {
	return (
		<>
			<motion.div
				className="absolute bottom-[45%] -right-[20%] xs:-right-[5%] lg:top-[30%] lg:right-[8%] -z-10 w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full"
				style={{
					background: `radial-gradient(circle at 25% 25%, #FFF9C4, #FFE68F 20%, #E4B40D 70%, #D99B0B 90%)`,
					boxShadow: "0 15px 40px rgba(217, 155, 11, 0.5)",
				}}
				animate={{
					y: [0, -20, 0],
					rotate: [0, 5, 0]
				}}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut"
				}}
			/>
			<motion.img
				src="/star-img.svg"
				alt="star"
				className="absolute top-[15%] right-[20%] size-8"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.5, 1, 0.5]
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.img
				src="/star-img.svg"
				alt="star"
				className="absolute right-[35%] bottom-[25%] size-6 lg:size-12"
				animate={{
					rotate: [0, 10, 0],
					opacity: [0.5, 1, 0.5]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.img
				src="/star-img.svg"
				alt="star"
				className="absolute top-[25%] left-[10%] size-6 lg-size-10"
				animate={{
					scale: [1, 0.8, 1],
					rotate: [0, -15, 0]
				}}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
		</>
	)
}

export default Stars
