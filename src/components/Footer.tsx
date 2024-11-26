import { footerNav } from "@/lib/helpers"
import { Twitter, MessageCircle } from "lucide-react"

export function Footer() {

	return (
		<footer className="bg-[#051422] mt-40 py-20 px-12 border-t border-foreground/10" id="contact">
			<div className="flex flex-col lg:flex-row items-center justify-around gap-y-8 lg:gap-x-4">
				<div className="flex flex-col items-center gap-1">
					<img src="/logo.png" alt="Moonex" className="h-12 w-auto" />
					<img src="/logoname.png" alt="Moonex" className="h-6 w-auto" />
				</div>

				<nav className="flex items-center flex-wrap justify-center gap-6 md:gap-8">
					{footerNav.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-lg font-bold transition-[colors,transform] hover:text-primary hover:scale-[1.02] duration-300 hover:-translate-y-1 inline-block"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex flex-col items-center gap-4">
					<h3 className="text-3xl font-extrabold">Contact <span className="text-secondary">Us</span></h3>
					<div className="flex items-center gap-7">
						<a
							href="https://t.me/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground/80 hover:text-foreground transition-colors"
						>
							<MessageCircle className="size-8" />
						</a>
						<a
							href="https://reddit.com/moonex"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground/80 hover:text-foreground transition-colors"
						>
							<svg
								viewBox="0 0 24 24"
								className="size-8 fill-current"
							>
								<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
							</svg>
						</a>
						<a
							href="https://twitter.com/moonex"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground/80 hover:text-foreground transition-colors"
						>
							<Twitter className="size-8" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
