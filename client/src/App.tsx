import { SAppWrapper } from './App.styles';
import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Movie } from './components/Dashboard/MovieList/Movie';

function App() {
    return (
        <SAppWrapper>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Movie" element={<Movie />} />
            </Routes>
        </SAppWrapper>
    );
}

export default App;
