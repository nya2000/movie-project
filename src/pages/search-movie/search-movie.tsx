import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Selector from 'src/components/filter/selector/selector';
import MovieItem from 'src/components/movies/movie-item/movie-item';
import { GENRES_LIST } from 'src/data/genres-list';
import { DEFAULT_MOVIES_LIST } from 'src/data/movies-list';
import {
    SELECT_DEFAULT_OPTION,
    SearchStyle,
    selectPopularityOptions,
    selectRatingOptions,
} from 'src/shared/const';
import { filterSearchMovies } from 'src/shared/filters';
import { MovieItemType } from 'src/shared/types';

const SearchMovie = () => {
    const [movies, setMovies] = useState<MovieItemType[]>([]);
    const [selectGenre, setSelectGenre] = useState(SELECT_DEFAULT_OPTION.GENRE);
    const [selectRating, setSelectRating] = useState(
        SELECT_DEFAULT_OPTION.RATING
    );
    const [selectPopular, setSelectPopular] = useState(
        SELECT_DEFAULT_OPTION.POPULARITY
    );

    const filterMovies = (e: React.FormEvent) => {
        e.preventDefault();
        const genres = [Number(selectGenre)];
        const sortedMovies = filterSearchMovies(
            DEFAULT_MOVIES_LIST,
            genres,
            selectRating,
            selectPopular
        );
        setMovies(sortedMovies);
    };

    const removeCurrentMovie = () => {
        const updatedMoviesList = movies.filter((movie, index) => index !== 0);
        setMovies(updatedMoviesList);
    };

    return (
        <div className='container'>
            <div className='content_wrapper'>
                <Box
                    onSubmit={filterMovies}
                    component={'form'}
                    sx={SearchStyle}
                >
                    <Box display={'flex'} flexDirection={'column'}>
                        <Selector
                            options={GENRES_LIST}
                            defaultValue={String(selectGenre)}
                            onChange={(value) => setSelectGenre(value)}
                        />
                        <Selector
                            options={selectRatingOptions}
                            defaultValue={selectRating}
                            onChange={(value) => setSelectRating(value)}
                        />
                        <Selector
                            options={selectPopularityOptions}
                            defaultValue={selectPopular}
                            onChange={(value) => setSelectPopular(value)}
                        />
                        <Button variant='outlined' type='submit'>
                            Search
                        </Button>
                    </Box>

                    <Box width={'375px'}>
                        {movies.slice(0, 1).map((movie) => (
                            <MovieItem movie={movie} key={movie.id} />
                        ))}
                        {movies.length ? (
                            <Button
                                variant='outlined'
                                type='button'
                                onClick={removeCurrentMovie}
                            >
                                Не подходит
                            </Button>
                        ) : (
                            <p>Фильмы закончились</p>
                        )}
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default SearchMovie;
