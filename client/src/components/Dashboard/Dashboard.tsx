import { useEffect, useState } from 'react';
import { IMovie } from './MovieList/Movie';
import { SDashboardWrapper } from './Dashboard.styles';
import { MovieList } from './MovieList';

export const Dashboard = (): JSX.Element => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                'http://www.omdbapi.com/?s=matrix&apikey=3e6650a7'
            );
            const data = await response.json();
            setMovies(data.Search);
        };
        fetchMovies();
    }, []);
    return (
        <SDashboardWrapper>
            <MovieList movies={movies} />
        </SDashboardWrapper>
    );
};
