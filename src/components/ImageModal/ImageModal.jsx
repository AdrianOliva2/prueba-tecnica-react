import './ImageModal.css'
import PropTypes from 'prop-types'

ImageModal.propTypes = {
  dogImage: PropTypes.string,
  onClose: PropTypes.func
}

export default function ImageModal({ dogImage, onClose }) {
  const handleClick = (e) => {
    if (e.target.id !== 'img-modal') {
      onClose()
    }
  }

  return (
    <div
      onClick={handleClick}
      id='modal'
      className='fixed top-0 left-0 w-screen h-screen bg-black/70 flex justify-center items-center'
    >
      <span
        className='fixed z-90 top-6 right-8 text-white text-5xl font-bold cursor-pointer'
        onClick={onClose}
      >
        &times;
      </span>
      <div className='m-6'>
        <img
          id='img-modal'
          src={dogImage}
          alt='Perro'
          className='max-w-[800px] max-h-[600px]'
        />
      </div>
    </div>
  )
}
