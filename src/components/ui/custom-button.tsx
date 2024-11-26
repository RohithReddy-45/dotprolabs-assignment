import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	variant?: 'gradient' | 'outline'
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
	({ children, className, variant = 'gradient', ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					"rounded-full transition-colors duration-300 font-extrabold py-3 px-7 min-w-44",
					variant === 'gradient' && [
						"bg-gradient-to-l",
						"from-[#FFE68F]/80 to-[#E4B40D]",
						"hover:from-[#FFE68F]/90 hover:to-[#E4B40D]/80",
						"text-primary-foreground",
					],
					variant === 'outline' && [
						"bg-transparent",
						"ring-2 ring-[#E4B40D]",
						"text-foreground",
						"hover:bg-foreground/5",
						"text-[#E4B40D]",
					],
					className
				)}
				{...props}
			>
				{children}
			</button>
		)
	}
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
