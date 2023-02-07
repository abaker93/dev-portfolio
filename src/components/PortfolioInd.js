const PortfolioInd = (...params) => {
	const layout = params[0].layout;
	const title = params[0].title;
	const image = params[0].image;
	const tags = params[0].tags;

	return (
		<div className={"row"}>
			{layout === 1 ? (
				<div className="col-md-5 content">
					<h2>{title}</h2>
					<hr />
					{tags.map((tag, index) => {
						return <span key={index} className="tag tag-sm tag-outline-dark">{tag}</span>
					})}
				</div>
			) : (
				<div className="col-md-5">
					<img src={image} alt="" />
				</div>
			)}
			{layout === 1 ? (
				<div className="offset-2 col-md-5">
					<img src={image} alt="" />
				</div>
			) : (
				<div className="offset-2 col-md-5 content">
					<h2>{title}</h2>
					<hr />
					{tags.map((tag, index) => {
						return <span key={index} className="tag tag-sm tag-outline-dark">{tag}</span>
					})}
				</div>
			)}
		</div>
	)
}

export default PortfolioInd