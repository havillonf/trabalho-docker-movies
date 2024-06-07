import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { MovieData } from './interface/MovieData';
import { useMovieData } from './hooks/useMovieData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useMovieData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Films</h1>
      <div className="card-grid">
        {data?.map(movieData => 
          <Card
            id={movieData.id}
            title={movieData.title} 
            release_year={movieData.release_year} 
            description={movieData.description}
            image={movieData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button className='home-button' onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
