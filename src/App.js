import { useEffect } from 'react';

import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './router/Home';

import { Accent } from './utilities/Accent';

function App() {
	useEffect(() => {
		Accent();
	});

	return (
		<div className="App">
			<Header />
			
			<main>
				<Home />
			</main>

			<Footer />
		</div>
	);
}

export default App;
