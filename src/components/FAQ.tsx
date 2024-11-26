import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/helpers"

export function FAQ() {

	return (
		<section className="py-10 px-6 sm:px-14 mt-20 bg-[#F7F9FF]/[0.02] max-w-6xl rounded-2xl mx-auto" id="faqs">
			<div className="container px-4">
				<h2 className="text-3xl font-bold mb-6 text-center font-fira">
					<span className="text-secondary">FAQs</span>
				</h2>
				<div className="max-w-6xl mx-auto">
					{faqs.map((faq) => (
						<div
							key={faq.id}
							className="border-b border-t border-[#1E2D3D]"
						>
							<Accordion type="single" collapsible>
								<AccordionItem key={faq.id} className="border-none" value={`item-${faq.id}`}>
									<AccordionTrigger className="py-6 px-7 md:px-16 hover:no-underline flex items-center justify-between transition-colors font-medium text-lg">
										<div className="flex items-center text-left text-lg justify-between w-full text-foreground/90">
											{faq.question}
										</div>
									</AccordionTrigger>
									<AccordionContent className="text-base px-7 md:px-16 pb-6 text-foreground/60">{faq.answer}</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
