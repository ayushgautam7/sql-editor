import './App.css'
import AppRoutes from './Routes'
import NavBar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './hooks/useScrollToTop';

function App() {
  return (
    <main className='w-full lg:h-screen md:h-screen overflow-hidden relative'>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <ScrollToTop />
        <NavBar />
        <AppRoutes />
      </Router>
    </main>
  )
}

export default App
