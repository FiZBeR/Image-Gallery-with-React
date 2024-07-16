import { useState } from 'react'
import photo_1 from './assets/photo-1.jpg'
import photo_2 from './assets/photo-2.jpg'
import photo_3 from './assets/photo-3.jpg'
import photo_4 from './assets/photo-4.jpg'
import photo_5 from './assets/photo-5.jpg'
import photo_6 from './assets/photo-6.webp'
import like from './assets/like.png'
import liked from './assets/liked.png'
import './App.css'



function App() {
  const images = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  const [gusta, setGusta] = useState(true);
  const [likes, setLikes] = useState(0);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setselectedIndex(nextIndex);
  }
  
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  }

  const hendlermeGusta = () => {
    setGusta(!gusta);
    gusta ? setLikes(likes + 1) : setLikes(likes - 1);
  }

  return (
    <div className='principal'>
      <h1>Image Gallery</h1>
      <div className='imagen'>
        <img src={selectedImage} alt="imagen paisaje" className={loaded ? "imagen loaded" : "imagen"} onLoad={() => setLoaded(true)}/>
      </div>
      <div className='section-like'>
        <button onClick={hendlermeGusta}>
          {gusta ? <img src={like}/> : <img src={liked}/>}
        </button>
        <p>{likes}</p>
      </div>
      <div className='section-move'>
        <button onClick={previous} className='left'>{'<'}</button>
        <button onClick={next} className='right'>{'>'}</button>
      </div>
    </div>
  )
}

export default App
