import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const App = () => {
	const [loading, setLoading] = useState(true);
	const splitRef = useRef(null);
	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	}, []);

	useGSAP(() => {
		if (!loading && splitRef.current) {
			const textSplit = new SplitText(splitRef.current, { type: "chars" });

			gsap.from(textSplit.chars, {
				yPercent: 100,
				duration: 1.8,
				ease: "expo.out",
				stagger: 0.05,
			});
		}
	}, [loading]);

	if (loading) {
		return <Loader />;
	}

	return (
		<main className="flex-center h-dvh w-full">
			<p className="text-9xl md:text-[300px] will-change-transform" ref={splitRef}>
				CONTENT
			</p>
		</main>
	);
};

export default App;
