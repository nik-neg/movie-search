import { IMovie } from './MovieList/Movie';

export interface IDashboardProps {
    movies: IMovie[];
    content: string;
    onFetchMovies?: (movies: IMovie[]) => void;

    onHandleSearch: (value: string) => void;
}
