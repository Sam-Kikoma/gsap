import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
	useGSAP(() => {
		const infiniteMarquee = () => {
			gsap.set(".marquee", {
				xPercent: 0,
			});
			gsap.timeline({ defaults: { ease: "none", repeat: -1 } }).to(".marquee", {
				xPercent: -50,
				duration: 10,
			});
		};
		infiniteMarquee();
	});
	return (
		<>
			<section className="intro">
				<h1>This is the intro</h1>
			</section>
			<section className="cards w-full">
				<div className="card">
					<div className="card-marquee">
						<div className="marquee">
							<h1>Fancy text</h1>
							<h1>More fancy text</h1>
							<h1>Even more fancy text</h1>
							<h1>Last fancy text</h1>
						</div>
					</div>
					<div className="card-wrapper">
						<div className="card-content">
							<div className="card-title">
								<h1>Title goes here</h1>
							</div>
							<div className="card-description">Super descriptive text</div>
						</div>
						<div className="card-image">
							<img src="/img-1.jpg" alt="" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-wrapper">
						<div className="card-content">
							<div className="card-title">
								<h1>Title goes here</h1>
							</div>
							<div className="card-description">Super descriptive text</div>
						</div>
						<div className="card-image">
							<img src="/img-2.jpg" alt="" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-wrapper">
						<div className="card-content">
							<div className="card-title">
								<h1>Title goes here</h1>
							</div>
							<div className="card-description">Super descriptive text</div>
						</div>
						<div className="card-image">
							<img src="/img-3.jpg" alt="" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="card-wrapper">
						<div className="card-content">
							<div className="card-title">
								<h1>Title goes here</h1>
							</div>
							<div className="card-description">Super descriptive text</div>
						</div>
						<div className="card-image">
							<img src="/img-4.jpg" alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="outro">Outro text goes here</section>
		</>
	);
};

export default App;
