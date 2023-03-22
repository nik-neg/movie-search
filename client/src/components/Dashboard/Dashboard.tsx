import React, { useEffect } from 'react';
import {
    SButtonPanel,
    SButtonWrapper,
    SDashboardWrapper,
    SSearchBarWrapper,
} from './Dashboard.styles';
import { MovieList } from './MovieList';
import { SearchBar } from '../SearchBar/SearchBar';
import { IDashboardProps } from './types';
import { Button } from '@mui/material';
import { AiFillBackward, AiFillForward } from 'react-icons/all';

export const Dashboard = ({
    movies,
    content,
    page,
    onFetchMovies,
    onHandleSearch,
    onHandlePagination,
}: IDashboardProps): JSX.Element => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?s=${content}&apikey=${API_KEY}&page=${page}`
            );
            const data = await response.json();
            onFetchMovies?.(data.Search);
        };

        if (content.length >= 3) {
            fetchMovies();
        } else {
            onFetchMovies?.([]);
        }
    }, [content, page]);

    return (
        <SDashboardWrapper>
            <MovieList movies={movies} />
            <SSearchBarWrapper>
                <SearchBar onSearch={onHandleSearch} />
            </SSearchBarWrapper>
            <SButtonPanel>
                <SButtonWrapper>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                        startIcon={<AiFillBackward />}
                        onClick={() =>
                            onHandlePagination(page - 1 > 0 ? page - 1 : 1)
                        }
                    >
                        Previous
                    </Button>
                </SButtonWrapper>

                <SButtonWrapper>
                    <Button
                        variant="contained"
                        endIcon={<AiFillForward />}
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                        onClick={() => onHandlePagination(page + 1)}
                    >
                        Next
                    </Button>
                </SButtonWrapper>
            </SButtonPanel>
        </SDashboardWrapper>
    );
};
