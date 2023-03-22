import { IMovieListProps } from './types';
import { SMovieImageWrapper, SMovieListWrapper } from './MovieList.styles';
import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }: IMovieListProps): JSX.Element => {
    return (
        <SMovieListWrapper>
            {movies?.map((movie) => {
                return (
                    <Link
                        key={movie?.imdbID}
                        to="movie"
                        state={{ movie: movie }}
                    >
                        <SMovieImageWrapper>
                            <img
                                src={movie?.Poster}
                                alt={movie?.Title}
                                style={{ height: '200px' }}
                            />
                        </SMovieImageWrapper>
                    </Link>
                );
            })}
        </SMovieListWrapper>
    );
};
