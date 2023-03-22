import { IMovieListProps } from './types';
import { SMovieListWrapper } from './MovieList.styles';
import { Movie } from './Movie';
import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }: IMovieListProps): JSX.Element => {
    return (
        <SMovieListWrapper>
            {movies?.map((movie) => {
                return (
                    <Link to="movie" state={{ movie: movie }}>
                        <Movie key={movie?.imdbID} movie={movie} />
                    </Link>
                );
            })}
        </SMovieListWrapper>
    );
};
