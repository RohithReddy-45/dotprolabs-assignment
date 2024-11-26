import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { CustomButton } from "./ui/custom-button";
import { navItems } from "@/lib/helpers";

export function Navbar() {

	return (
		<>
			<nav className="container flex items-center font-semibold justify-between lg:justify-around py-4">
				<a href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
					<img src="/logo.png" alt="MoonEX" className="h-10 w-auto" />
					<img src="/logoname.png" alt="MoonEX" className="h-6 w-auto" />
				</a>

				<div className="hidden lg:flex flex-1 items-center justify-center gap-6">
					{navItems.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className="hover:text-primary hover:scale-[1.02] duration-300 hover:-translate-y-1 transition-[colors,transform] inline-block"
						>
							{item.title}
						</a>
					))}
				</div>

				<div className="hidden lg:flex justify-end">
					<CustomButton variant="gradient">
						Connect Wallet
					</CustomButton>
				</div>

				{/* Mobile navigation */}
				<Sheet>
					<SheetTrigger asChild className="lg:hidden font-raleway" title="Menu">
						<button type="button">
							<Menu size={20} />
						</button>
					</SheetTrigger>
					<SheetContent side="right" className="bg-background text-foreground font-semibold border-none">
						<h2 className="sr-only">Navigation Menu</h2>
						<div className="flex flex-col gap-6 mt-8 items-start">
							{navItems.map((item) => (
								<a
									key={item.id}
									href={item.href}
									className="hover:text-primary hover:scale-[1.02] duration-300 hover:-translate-y-1 transition-[colors,transform] inline-block"
								>
									{item.title}
								</a>
							))}
							<CustomButton variant="gradient" className="font-raleway">
								Connect Wallet
							</CustomButton>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</>
	);
}
