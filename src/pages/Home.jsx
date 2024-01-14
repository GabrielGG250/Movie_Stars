import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        console.log(topRatedUrl)

        getTopRatedMovies(topRatedUrl)

    }, [])

    return (
        <div>
            <h2>Melhores filmes:</h2>
            <div>
                {topMovies.length === 0 && <p className="spinner-border"></p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home