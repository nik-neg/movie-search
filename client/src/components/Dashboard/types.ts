import { IMovie } from './MovieList/Movie';

export interface IDashboardProps {
    movies: IMovie[];
    content: string;
    page: number;
    onFetchMovies?: (movies: IMovie[]) => void;
    onHandleSearch: (value: string) => void;

    onHandlePagination: (value: number) => void;
}
