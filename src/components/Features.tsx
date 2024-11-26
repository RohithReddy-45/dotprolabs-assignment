import { features } from "@/lib/helpers"
import { motion } from "motion/react"

export function Features() {

	return (
		<section className="py-12 sm:py-16 md:py-20" id="features">
			<div className="container">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 font-fira">
					Our <span className="text-secondary">Features</span>
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							className="p-5 sm:p-7 rounded-lg bg-foreground/[0.05] backdrop-blur-sm
                border border-foreground/10 hover:ring-1 hover:ring-secondary/40
                transition-all duration-300"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: index * 0.1,
								duration: 0.3,
								ease: "easeOut"
							}}
						>
							<div className="flex flex-col h-full">
								<div className="bg-foreground/5 rounded-full p-3 mb-4 w-fit">
									<feature.icon className="size-8 sm:size-10 text-foreground" />
								</div>
								<h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
									{feature.title}
								</h3>
								<p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
