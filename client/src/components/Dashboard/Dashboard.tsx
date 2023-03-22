import { useState } from 'react';
import { IMovie } from './MovieList/Movie';
import { SDashboardWrapper } from './Dashboard.styles';
import { MovieList } from './MovieList';

export const Dashboard = (): JSX.Element => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    return (
        <SDashboardWrapper>
            <MovieList movies={movies} />
        </SDashboardWrapper>
    );
};
