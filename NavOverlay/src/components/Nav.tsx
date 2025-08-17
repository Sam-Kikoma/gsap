const Nav = () => {
	return (
		<nav className="flex-space">
			<div>
				<p>Wasabi</p>
			</div>
			<div>
				<p className="text-3xl">
					<a href="#">Motion Case Study</a>
				</p>
			</div>
			<div>
				<button>Burger</button>
			</div>
			{/* Overlay*/}
			<div className="fixed top-0 left-0 w-[100vw] h-[100vh]">
				{/* Overlay menu */}
				<div>
					<div>
						<p id="active">
							<a href="#">Home</a>
						</p>
					</div>
					<div>
						<p>
							<a href="#">Work</a>
						</p>
					</div>
					<div>
						<p>
							<a href="#">About</a>
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
