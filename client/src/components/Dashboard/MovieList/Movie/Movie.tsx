import { IMovieProps } from './types';
import { SMovieWrapper } from './Movie.styles';
import React from 'react';

export const Movie = ({ movie }: IMovieProps): JSX.Element => {
    return (
        <SMovieWrapper>
            <img
                src={movie?.Poster}
                alt={movie?.Title}
                style={{ height: '200px' }}
            />
        </SMovieWrapper>
    );
};
