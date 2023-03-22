import { IMovieProps } from './types';
import { SMovieWrapper } from './Movie.styles';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Movie = ({ movie }: IMovieProps): JSX.Element => {
    let { state } = useLocation();

    console.log({ state });
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
