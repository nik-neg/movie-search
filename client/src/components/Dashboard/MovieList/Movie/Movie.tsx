import { IMovie } from './types';
import {
    SDetailsColumn,
    SImageWrapper,
    SMovieDirector,
    SMovieGenre,
    SMoviePlot,
    SMovieRatingRow,
    SMovieRatingSource,
    SMovieRatingValue,
    SMovieTitle,
    SMovieWrapper,
} from './Movie.styles';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { IoArrowBackOutline } from 'react-icons/all';
import { isEmpty } from 'lodash';

export const Movie = (): JSX.Element => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    let { state } = useLocation();
    const navigate = useNavigate();

    const title = state.movie?.Title;

    const [movieDetails, setMovieDetails] = useState<IMovie>({});

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(
                `https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}&plot=full&page=1&type=movie&r=json`
            );
            const data = await response.json();
            setMovieDetails(data);
        };
        setMovieDetails({});
        fetchMovie();
    }, []);

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <SMovieWrapper>
            <SDetailsColumn>
                <SImageWrapper
                    src={state.movie?.Poster}
                    alt={state.movie?.Title}
                />
            </SDetailsColumn>
            {isEmpty(movieDetails) && <div>Loading...</div>}
            <SDetailsColumn>
                <SMovieTitle>{movieDetails?.Title}</SMovieTitle>

                <SMovieGenre>{movieDetails?.Genre}</SMovieGenre>

                <SMovieDirector>{movieDetails?.Director}</SMovieDirector>

                <SMoviePlot>{movieDetails?.Plot}</SMoviePlot>

                {movieDetails?.Ratings?.map((rating, index) => {
                    return (
                        <SMovieRatingRow key={index.toString()}>
                            <SMovieRatingSource>
                                {rating.Source}
                            </SMovieRatingSource>
                            <SMovieRatingValue>
                                {rating.Value}
                            </SMovieRatingValue>
                        </SMovieRatingRow>
                    );
                })}
                <Button
                    variant="contained"
                    endIcon={<IoArrowBackOutline />}
                    style={{ backgroundColor: '#6B728E', width: '10rem' }}
                    onClick={handleClick}
                >
                    Back
                </Button>
            </SDetailsColumn>
        </SMovieWrapper>
    );
};
