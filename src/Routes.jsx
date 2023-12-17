import { Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}

export default AppRoutes