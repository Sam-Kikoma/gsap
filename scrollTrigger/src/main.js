import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
	x: 700,
	duration: 5,
	scrollTrigger: {
		trigger: ".square",
		start: "top 60%",
		end: "top 40%",
		toggleActions: "play none none none",
		markers: {
			fontSize: "3rem",
		},
		toggleClass: "red",
	},
});
