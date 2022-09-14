import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Routes 가 하는 일은 Router를 찾는 것 */}
				<Route
					path={`${process.env.PUBLIC_URL}/movie/:id`}
					element={<Detail />}
				/>
				<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
