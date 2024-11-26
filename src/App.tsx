import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { Footer } from "./components/Footer";

function App() {
	return (
		<BackgroundGradient>
			<main className="relative z-10 text-foreground font-raleway">
				<Hero />
				<Comparison />
				<Features />
				<FAQ />
				<Footer />
			</main>
		</BackgroundGradient >
	);
}

export default App;
