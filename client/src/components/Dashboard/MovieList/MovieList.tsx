import { IMovieListProps } from './types';
import { SMovieListWrapper } from './MovieList.styles';
import { Movie } from './Movie';

export const MovieList = ({ movies }: IMovieListProps): JSX.Element => {
    return (
        <SMovieListWrapper>
            {movies?.map((movie) => (
                <Movie key={movie?.imdbID} movie={movie} />
            ))}
        </SMovieListWrapper>
    );
};
