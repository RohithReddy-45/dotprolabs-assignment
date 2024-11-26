import { comparisonPoints } from "@/lib/helpers"
import { Check, X } from "lucide-react"
import { motion } from "motion/react"

export function Comparison() {

	return (
		<section className="py-20 px-6 sm:px-14" id="about">
			<div className="container px-4">
				<h2 className="text-3xl md:text-5xl font-extrabold mb-12 font-fira">
					Why <span className="text-secondary">MoonEX</span> ?
				</h2>

				<div className="p-4 lg:p-11 bg-foreground/[0.02] w-full rounded-2xl overflow-y-hidden overflow-x-auto">
					<div className="min-w-[600px]">
						<div className="grid grid-cols-3 gap-4 mb-6 px-4">
							<div className="text-secondary font-semibold text-xl lg:text-3xl">Comparison</div>
							<div className="flex items-center justify-center gap-2">
								<img src="/logo.png" alt="MoonEX" className="size-8 lg:size-12" />
								<img src="/logoname.png" alt="MoonEX" className="h-6 lg:h-10 w-auto" />
							</div>
							<div className="flex items-center justify-center">
								<img src="/uniswap.png" alt="Uniswap" className="h-6 lg:h-10 w-auto" />
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-y-0 left-[33%] w-[1px] bg-foreground/10" />
							<div className="absolute inset-y-0 left-[66%] w-[1px] bg-foreground/10" />

							{comparisonPoints.map((feature, index) => (
								<motion.div
									key={feature}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="grid grid-cols-3 gap-4 py-6 border-b border-foreground/10 hover:bg-foreground/5"
								>
									<div className="text-foreground/60 text-base lg:text-xl">{feature}</div>
									<div className="flex justify-center">
										<Check className="text-green-500 size-4 lg:size-6" strokeWidth={5} color="#B2FFAC" />
									</div>
									<div className="flex justify-center">
										<X className="text-red-500 size-4 lg:size-6" strokeWidth={5} />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
