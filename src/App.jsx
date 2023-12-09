import './App.css'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='bg-gray-950 relative h-screen w-full overflow-hidden'>
      <Navbar />
      <Dashboard />
    </main>
  )
}

export default App
