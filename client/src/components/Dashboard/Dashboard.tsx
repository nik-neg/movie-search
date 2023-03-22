import React, { useEffect, useState } from 'react';
import { IMovie } from './MovieList/Movie';
import {
    SButtonPanel,
    SButtonWrapper,
    SDashboardWrapper,
    SSearchBarWrapper,
} from './Dashboard.styles';
import { MovieList } from './MovieList';
import { Button } from '@mui/material';
import { AiFillBackward, AiFillForward } from 'react-icons/all';
import { SearchBar } from '../SearchBar/SearchBar';

export const Dashboard = (): JSX.Element => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [content, setContent] = React.useState<string>('');

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                'http://www.omdbapi.com/?s=matrix&apikey=3e6650a7'
            );
            const data = await response.json();
            setMovies(data.Search);
        };
        fetchMovies();
    }, []);
    return (
        <SDashboardWrapper>
            <MovieList movies={movies} />
            <SSearchBarWrapper>
                <SearchBar
                    onSearch={(value) => console.log(value)}
                    content={content}
                />
            </SSearchBarWrapper>
            <SButtonPanel>
                <SButtonWrapper>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                        startIcon={<AiFillBackward />}
                    >
                        Previous
                    </Button>
                </SButtonWrapper>

                <SButtonWrapper>
                    <Button
                        variant="contained"
                        endIcon={<AiFillForward />}
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                    >
                        Next
                    </Button>
                </SButtonWrapper>
            </SButtonPanel>
        </SDashboardWrapper>
    );
};
