import { SAppWrapper } from './App.styles';
import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { IMovie, Movie } from './components/Dashboard/MovieList/Movie';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [content, setContent] = useState<string>('');

    const [page, setPage] = useState(1);

    const handleSearch = (value: string) => {
        setContent(value);
    };

    const handleFetchMovies = (movies: IMovie[]) => {
        setMovies(movies);
    };

    const handlePagination = (page: number) => {
        setPage(page);
    };

    return (
        <SAppWrapper>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Dashboard
                            movies={movies}
                            content={content}
                            page={page}
                            onFetchMovies={handleFetchMovies}
                            onHandleSearch={handleSearch}
                            onHandlePagination={handlePagination}
                        />
                    }
                />
                <Route path="/movie" element={<Movie />} />
            </Routes>
        </SAppWrapper>
    );
}

export default App;
