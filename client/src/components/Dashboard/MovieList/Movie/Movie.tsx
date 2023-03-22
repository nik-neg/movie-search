import { IMovie, IMovieProps } from './types';
import { SMovieWrapper } from './Movie.styles';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { IoArrowBackOutline } from 'react-icons/all';

export const Movie = ({ movie }: IMovieProps): JSX.Element => {
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

        fetchMovie();
    }, []);

    const handleClick = () => {
        navigate(-1);
    };
    return (
        <SMovieWrapper>
            <img
                src={state.movie?.Poster}
                alt={state.movie?.Title}
                style={{ height: '200px' }}
            />
            <div>{movieDetails?.Title}</div>
            <div>{movieDetails?.Genre}</div>

            <div>{movieDetails?.Director}</div>

            <div>{movieDetails?.Plot}</div>

            {movieDetails?.Ratings?.map((rating) => {
                return (
                    <>
                        <div>{rating.Source}</div>
                        <div>{rating.Value}</div>
                    </>
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
        </SMovieWrapper>
    );
};
