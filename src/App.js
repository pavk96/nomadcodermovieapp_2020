import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async() => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await
        axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({movies, isLoading: false});
    }
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state;
        return <section className="container">{isLoading
                ? <div className="loader"> <span className="loader__text">Loading...</span> </div>
                : <div className="movies">    {movies.map(movie => {
                    return (<Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        />
                        )
                    })}</div>}</section>
    }
}

// class App extends React.Component {     state = {         isLoading: true,
//      movies: []     };     getMovies = async() => {         const {
//   data: {                 boxOfficeResult: {
// dailyBoxOfficeList                 }             }         } = await
// axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searc
// hDailyBoxOffi" +
// "ceList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101");
//  this.setState({movies: dailyBoxOfficeList, isLoading: false});     }
// componentDidMount() {         this.getMovies();     }     render() {
// const {isLoading, movies} = this.state;         return <div>{isLoading
//          ? "Loading..."                 // :console.log(movies)
//   : movies.map(movie => {                     return <Movie
//       key={movie.rnum}                         id={movie.rnum}
//          year={movie.movieCd}                         title={movie.movieNm}
//                       summary={movie.openDt}
// poster={movie.movieNm}/>                 })}</div>     } }
export default App;

/*const food = [
    {
        id: 1,
        name: "kimchi"
    }, {
        id: 2,
        name: "haba"
    }, {
        id: 3,
        name: "shocs"
    }, {
        id: 4,
        name: "qwewqsd"
    }
]
function Potato(a) {
    return <h1>I like {a.fav}</h1>;
}
Potato.propTypes={
  fav: PropTypes.string
}
function App() {
    return <div >
        HELlo!!
        {food.map(dish => (<Potato fav={dish.name} key={dish.id}/>))}
{food.map(function(dish){return <Potato fav={dish.name} key={dish.id}/>})}
    </div>;
}*/