import { IMovieProps } from './types';
import { SMovieWrapper } from './Movie.styles';

export const Movie = ({ movie }: IMovieProps): JSX.Element => {
    return <SMovieWrapper>{movie?.Title}</SMovieWrapper>;
};
