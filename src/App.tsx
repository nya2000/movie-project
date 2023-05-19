import { Route, Routes } from 'react-router-dom';
import Header from 'src/components/header/header';
import MainComponent from 'src/components/main-component';
import MovieDetails from 'src/pages/movie-details/movie-details';
import SearchMovie from 'src/pages/search-movie/search-movie';
import { ROUTER_PATH } from './shared/const';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={ROUTER_PATH.HOME} element={<MainComponent />} />
                <Route
                    path={ROUTER_PATH.MOVIE_DETAILS}
                    element={<MovieDetails />}
                />
                <Route path={ROUTER_PATH.SEARCH} element={<SearchMovie />} />
            </Routes>
        </>
    );
}
export default App;
