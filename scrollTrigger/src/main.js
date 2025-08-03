import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".square",
		markers: true,
		start: "top 80%",
		stop: "top 30%",
	},
});

tl.to(".square", {
	x: 500,
	duration: 2,
})
	.to(".square", {
		y: 120,
		duration: 5,
		rotate: 180,
	})
	.to(".square", {
		x: 0,
		duration: 2,
	});
