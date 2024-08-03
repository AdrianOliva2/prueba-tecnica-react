import './App.css'
import DogImageGrid from './components/DogImageGrid/DogImageGrid'
import DogSelector from './components/DogSelector/DogSelector'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'

function App() {
  const modal = document.getElementById('modal')
  if (modal) {
    modal.addEventListener('keydown', (e) => console.log(e))
  }
  return (
    <div className='flex flex-col justify-between w-full h-min-vh bg-gradient-to-b from-cyan-100 to-pink-50'>
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
