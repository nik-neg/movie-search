import styled from 'styled-components';
import { IImageProps } from './types';

export const SMovieWrapper = styled.div`
    display: flex;
    font-size: 1.5rem;
    width: 60%;
    padding: 0 20%;
    color: #fff;
`;
export const SImageWrapper = styled.img<IImageProps>`
    src: ${(props) => props.src};
`;

export const SDetailsColumn = styled.div`
    padding: 1rem;
`;

export const SMovieTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

export const SMovieGenre = styled.div`
    padding: 1rem;
`;

export const SMovieDirector = styled.div`
    padding: 1rem;
`;
export const SMoviePlot = styled.div`
    padding: 1rem;
`;

export const SMovieRatingRow = styled.div`
    display: flex;
`;

export const SMovieRatingSource = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 1rem;
`;

export const SMovieRatingValue = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 1rem;
`;
