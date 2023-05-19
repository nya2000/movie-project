import { nanoid } from 'nanoid';

export const selectDetailsOptions = [
    {
        label: 'Популярные по убыванию',
        value: 'popularity-desc',
        id: nanoid(),
    },
    {
        label: 'Популярные по возрастанию',
        value: 'popularity-asc',
        id: nanoid(),
    },
    { label: 'Рейтинг по убыванию', value: 'rating-desc', id: nanoid() },
    {
        label: 'Рейтинг по возрастанию',
        value: 'rating-asc',
        id: nanoid(),
    },
];

export const selectYearOptions = [
    {
        label: '2017',
        value: '2017',
        id: nanoid(),
    },
    {
        label: '2018',
        value: '2018',
        id: nanoid(),
    },
    {
        label: '2019',
        value: '2019',
        id: nanoid(),
    },
    {
        label: '2020',
        value: '2020',
        id: nanoid(),
    },
];

export const selectMoviesListOptions = [
    { label: 'Все фильмы', value: 'allMovies', id: nanoid() },
    { label: 'Избранные', value: 'favoriteMovies', id: nanoid() },
    { label: 'Смотреть позже', value: 'savedMovies', id: nanoid() },
];

export const selectRatingOptions = [
    { label: 'Высокая', value: 'rating-high', id: nanoid() },
    { label: 'Низкая', value: 'rating-low', id: nanoid() },
];
export const selectPopularityOptions = [
    { label: 'Популярный', value: 'popular', id: nanoid() },
    { label: 'Неизвестный', value: 'unknown', id: nanoid() },
];

export const SELECT_MOVIES_LIST = {
    ALL_MOVIES: 'allMovies',
    FAVORITE_MOVIES: 'favoriteMovies',
    SAVED_MOVIES: 'savedMovies',
};

export const SELECT_DETAILS = {
    POPULARITY_DESCENDING: 'popularity-desc',
    POPULARITY_ASCENDING: 'popularity-asc',
    RATING_DESCENDING: 'rating-desc',
    RATING_ASCENDING: 'rating-asc',
};
export const SELECT_RATING = {
    HIGH: 'rating-high',
    LOW: 'rating-low',
};
export const SELECT_POPULAR = {
    POPULAR: 'popular',
    UNKNOWN: 'unknown',
};
export const AUTH_DATA = {
    login: 'user',
    password: 'user',
};

export const SELECT_YEAR = {
    2017: '2017',
    2018: '2018',
    2019: '2019',
    2020: '2020',
};

export const SELECT_DEFAULT_OPTION = {
    YEAR: SELECT_YEAR[2020],
    DETAILS: SELECT_DETAILS.POPULARITY_DESCENDING,
    MOVIES_LIST: SELECT_MOVIES_LIST.ALL_MOVIES,
    GENRE: '80',
    RATING: 'rating-high',
    POPULARITY: 'popular',
};

export const ROUTER_PATH = {
    HOME: '/',
    MOVIE_DETAILS: '/movie-details/:movieId',
    SEARCH: '/search',
};

export const LOG_OUT = 'logout';
export const LOG_IN = 'login';
export const PASSWORD = 'password';
export const EMPTY_STRING = '';
export const ITEMS_PER_PAGE = 9;

export const movieDetails = {
    width: 'inherit',
    height: 'inherit',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
};
export const authorizationModalStyle = {
    position: 'absolute' as 'absolute',
    borderRadius: '15px',
    color: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#28282e',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
};
export const SelectStyle = {
    m: '10px 0',
    color: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
    },
    '& .MuiSvgIcon-root': {
        color: 'white',
    },
    width: '220px',
};

export const SearchStyle = {
    display: 'flex',
    width: '1132px',
    flexDirection: 'row',
    justifyContent: 'space-around',
};
