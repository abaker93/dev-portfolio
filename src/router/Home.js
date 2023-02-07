import Hero from '../components/Hero';
import Info from '../components/Info';
import Portfolio from '../components/Portfolio';

const Home = (...params) => {

	return (
		<div id="Home">
			<Hero />
			<Info />
			<Portfolio />
		</div>
	)
}

export default Home