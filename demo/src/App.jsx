import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='container content'></main>
			<Footer />
		</>
	);
}

export default App;
