import './App.css'
import DogImageGrid from './components/DogImageGrid'
import DogSelector from './components/DogSelector'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'

function App() {
  const modal = document.getElementById('modal')
  if (modal) {
    modal.addEventListener('keydown', (e) => console.log(e))
  }
  return (
    <div className='flex flex-col justify-between w-full h-min-vh bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'>
      <Header />

      <main className='flex-1'>
        <DogSelector />
        <DogImageGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
