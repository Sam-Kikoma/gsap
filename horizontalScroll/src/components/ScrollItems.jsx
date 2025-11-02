import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollItems = () => {
	const slider = useRef();
	const container = useRef();
	useGSAP(
		() => {
			const sliderEl = slider.current;
			const containerEl = container.current;

			const totalScroll = sliderEl.scrollWidth - window.innerWidth;

			gsap.to(sliderEl, {
				x: -totalScroll,
				ease: "none",
				scrollTrigger: {
					trigger: containerEl,
					pin: true,
					scrub: 1,
					end: () => "+=" + totalScroll,
				},
			});
		},
		{ scope: container }
	);
	return (
		<div className="scroll-container" ref={container}>
			<div ref={slider} className="slider">
				<div className="item">
					<img src="./src/assets/hungary.jpg" alt="" />
					<p>Hungary</p>
				</div>
				<div className="item">
					<img src="./src/assets/austria.jpg" alt="" />
					<p>Austria</p>
				</div>
				<div className="item">
					<img src="./src/assets/Netherlands.jpg" alt="" />
					<p>Netherlands</p>
				</div>
				<div className="item">
					<img src="./src/assets/germany.jpg" alt="" />
					<p>Germany</p>
				</div>
			</div>
		</div>
	);
};

export default ScrollItems;
