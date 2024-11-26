import type { ReactNode } from "react"

interface BackgroundGradientProps {
	children: ReactNode
}

export function BackgroundGradient({ children }: BackgroundGradientProps) {
	return (
		<div className="relative min-h-screen overflow-hidden bg-background">
			<div
				className="absolute -top-20 left-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full
          bg-gradient-to-r from-primary/20 to-primary
          opacity-30 blur-[120px]"
			/>
			<div
				className="absolute top-72 right-4 w-[350px] h-[500px] rounded-full
          bg-gradient-to-r from-primary/20 to-primary
          opacity-30 blur-[120px]"
			/>
			<div
				className="absolute bottom-[1050px] left-4 w-[800px] h-[700px] rounded-full
          bg-gradient-to-r from-primary/20 to-primary
          opacity-20 blur-[150px]"
			/>
			<div
				className="absolute bottom-[300px] right-2 w-[300px] h-[300px] rounded-full
          bg-gradient-to-r from-primary/20 to-primary
          opacity-30 blur-[120px]"
			/>
			<div
				className="absolute bottom-[200px] w-[300px] h-[300px] rounded-full
          bg-gradient-to-r from-primary/20 to-primary
          opacity-30 blur-[120px]"
			/>
			<div className="relative z-10">
				{children}
			</div>
		</div>
	)
}
