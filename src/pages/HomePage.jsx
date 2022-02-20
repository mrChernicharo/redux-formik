import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className="AppPage">
			<h3>Redux App</h3>
			<p>Gordinha é linda 💚</p>

			<Link to="/patients">Pacientes</Link>
			<Link to="/professionals">Profissionais</Link>
		</div>
	);
};

export default HomePage;
