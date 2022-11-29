import {useEffect , useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

//ccce28fd

const API_URL = 'http://www.omdbapi.com?apikey=ccce28fd';

// const movie1 = {
//     Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
//     Title: "Iron Man",
//     Type:"movie",
//     'Year': "2008",
//     'imdbID' : "tt0371746"
// }

const App = () => {
    const [movies,setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
            
        
    }


    useEffect(()=>{
        searchMovies("Iron Man");
        
    },[])

    return (
        <div className='app'>
            <h1>BlockBuster</h1>

            <div className='search'>
                <input 
                    placeholder='search for movies'
                    value = {searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt= "Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
            movies.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
            
        </div>
    )
}

export default App