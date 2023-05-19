import { DEFAULT_MOVIES_LIST } from 'src/data/movies-list';
import {
    SELECT_DEFAULT_OPTION,
    SELECT_DETAILS,
    SELECT_POPULAR,
    SELECT_RATING,
} from 'src/shared/const';
import { MovieItemType } from 'src/shared/types';

export const sortByDetails = (
    movies: MovieItemType[],
    selectDetails: string
) => {
    return [...movies].sort((a, b) => {
        switch (selectDetails) {
            case SELECT_DETAILS.POPULARITY_DESCENDING:
                return b.popularity - a.popularity;

            case SELECT_DETAILS.POPULARITY_ASCENDING:
                return a.popularity - b.popularity;

            case SELECT_DETAILS.RATING_DESCENDING:
                return b.vote_average - a.vote_average;

            case SELECT_DETAILS.RATING_ASCENDING:
                return a.vote_average - b.vote_average;

            default:
                return b.popularity - a.popularity;
        }
    });
};

export const sortByYear = (movies: MovieItemType[], selectYear: string) => {
    return movies.filter((movie) => movie.release_date.includes(selectYear));
};

export const sortByGenres = (movies: MovieItemType[], genres: number[]) => {
    if (genres.length) {
        return movies.filter((item) =>
            genres.some((movie) => item.genre_ids.includes(movie))
        );
    }
    return movies;
};

export const sortByRating = (movies: MovieItemType[], selectRating: string) => {
    return [...movies].filter((item) =>
        selectRating === SELECT_RATING.HIGH
            ? item.vote_average > 5
            : item.vote_average < 5
    );
};

export const sortByPopularity = (
    movies: MovieItemType[],
    selectPopular: string
) => {
    return [...movies].filter((item) =>
        selectPopular === SELECT_POPULAR.POPULAR
            ? item.popularity > 100 && item.vote_count > 200
            : item.popularity < 100 && item.vote_count < 200
    );
};

export const defaultFilter = () => {
    const sortedByDetails = sortByDetails(
        DEFAULT_MOVIES_LIST,
        SELECT_DEFAULT_OPTION.DETAILS
    );

    return sortByYear(sortedByDetails, SELECT_DEFAULT_OPTION.YEAR);
};

export const filterMovies = (
    movies: MovieItemType[],
    selectDetails: string,
    selectYear: string,
    genres: number[]
) => {
    const sortedByDetails = sortByDetails(movies, selectDetails);
    const sortedByYears = sortByYear(sortedByDetails, selectYear);
    return sortByGenres(sortedByYears, genres);
};

export const filterSearchMovies = (
    movies: MovieItemType[],
    genres: number[],
    selectRating: string,
    selectPopular: string
) => {
    const sortedByGenres = sortByGenres(movies, genres);
    const sortedByRating = sortByRating(sortedByGenres, selectRating);
    const sortedByPopularity = sortByPopularity(sortedByRating, selectPopular);
    return sortedByPopularity;
};
