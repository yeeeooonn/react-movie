import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//url에 있는 값을 반환해주는 함수 Route에써둔 변수명을 사용
function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);

	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<div>
					<img src={movie.medium_cover_image}></img>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.year}</h3>
						<p>{movie.summary}</p>
						<ul>
							{movie.genres.map((g) => (
								<li key={g}>{g}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
