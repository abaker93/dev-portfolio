const Header = (...params) => {
	return (
		<header id="Header">
			<div className="container-fluid">
				<div className="row justify-content-center align-items-center p-5 mb-4">
					<div className="col-auto mb-3 mb-md-0 me-md-auto">
						<a href="/" className="text-body text-decoration-none fs-3 accent">anna baker</a>
					</div>
					<div className="col-auto d-flex flex-row align-items-center">
						<nav className="mx-4">
							<ul className="nav align-items-center">
								<li className="nav-item">
									<a href="/" className="nav-link d-flex flex-column px-5 fs-4 text-uppercase lh-1">
										info
										<span className="accent large lh-1 text-lowercase">about me</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="/" className="nav-link d-flex flex-column px-5 fs-4 text-uppercase lh-1">
										about
										<span className="accent large lh-1 text-lowercase">some cases</span>
									</a>
								</li>
							</ul>
						</nav>

						<a className="btn btn-outline-dark mx-4 accent" href="/">contact</a>

						<i className="fa-regular fa-sun fs-2 px-5"></i>
					</div>

					{/* <a href="/" className="mb-3 mb-md-0 me-md-auto text-body text-decoration-none">
						<span className="fs-3 accent">anna baker</span>
					</a>

					<ul className="nav mx-4 align-items-center">
						<li className="nav-item">
							<a href="#info" className="nav-link d-flex flex-column px-5">
								<span className="fs-4 text-uppercase lh-1">info</span>
								<span className="accent large lh-1">about me</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="#portfolio" className="nav-link d-flex flex-column px-5">
								<span className="fs-4 text-uppercase lh-1">portfolio</span>
								<span className="accent large lh-1">some cases</span>
							</a>
						</li>
					</ul>

					<a className="btn btn-outline-dark mx-4 accent" href="/">contact</a>

					<i className="fa-regular fa-sun fs-2 px-5"></i> */}
				</div>
			</div>
		</header>
	)
}

export default Header