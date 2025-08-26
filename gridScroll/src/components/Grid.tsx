import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Grid = () => {
	const [columns, setColumns] = useState(3);
	const imgNum = 76;

	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const updateCols = () => {
			setColumns(window.innerWidth >= 768 ? 7 : 3);
		};
		updateCols();
		window.addEventListener("resize", updateCols);
		return () => window.removeEventListener("resize", updateCols);
	}, []);

	useGSAP(
		() => {
			if (wrapperRef.current && contentRef.current) {
				ScrollSmoother.create({
					wrapper: wrapperRef.current,
					content: contentRef.current,
					smooth: 1,
					effects: true,
					normalizeScroll: true,
				});
			}
		},
		{ scope: wrapperRef }
	);

	return (
		<div id="wrapper" className="h-screen overflow-hidden" ref={wrapperRef}>
			<div id="content" className="grid grid-cols-3 md:grid-cols-7 p-4 gap-4" ref={contentRef}>
				{[...Array(imgNum)].map((_, i) => {
					const col = i % columns;
					const lag = 0.1 + col * 0.2;
					return (
						<figure className="aspect-2/3" data-speed={lag} key={`img-${i}`}>
							<div
								style={{
									backgroundImage: `url(https://yavuzceliker.github.io/sample-images/image-${i + 1}.jpg)`,
								}}
								className="w-full h-full object-cover aspect-2/3"
							></div>
						</figure>
					);
				})}
			</div>
		</div>
	);
};

export default Grid;
