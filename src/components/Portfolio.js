import PortfolioInd from './PortfolioInd';

import { PortfolioWorks } from '../utilities/Arrays';

const Portfolio = (...params) => {
	return (
		<div id="Portfolio">
			<div className="container">
				{PortfolioWorks.map((work, index) =>
					<PortfolioInd
						key={work.id}
						layout={index % 2 !== 0 ? 1 : 2}
						title={work.title}
						image={work.image}
						tags={work.tags}
					/>
				)}
				{/* <PortfolioPiece
					image=""
					title="Relocation Horizons"
					tags={["design", "development", ".NET", "Javascript", "HTML", "CSS"]}
				/>
				<PortfolioPiece
					key={1}
					image=""
					title="Relocation Horizons"
					tags={["design", "development", ".NET", "Javascript", "HTML", "CSS"]}
				/>
				<PortfolioPiece
					key={2}
					image=""
					title="Relocation Horizons"
					tags={["design", "development", ".NET", "Javascript", "HTML", "CSS"]}
				/>
				<PortfolioPiece
					key={3}
					image=""
					title="Relocation Horizons"
					tags={["design", "development", ".NET", "Javascript", "HTML", "CSS"]}
				/> */}
			</div>
			
		</div>
	)
}

export default Portfolio