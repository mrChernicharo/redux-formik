// import PatientsSection from "./components/PatientsSection";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfessionalsContainer from './containers/ProfessionalsContainer';
import PatientsContainer from './containers/PatientsContainer';
import HomePage from './pages/HomePage';
import './global.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/patients" element={<PatientsContainer />} />
				<Route
					path="/professionals"
					element={<ProfessionalsContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
