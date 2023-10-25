import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../header/Header'
import {MainPage, ComicsPage, CharacterPage, ComicPage, Page404} from '../../pages/Pages'

const App = () => {

  const [selectedChar, setSelectedChar] = useState(null);
  const [comics, setComics] = useState([]);

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/char/:charId' element={<CharacterPage />} />
          <Route path='/comics' element={<ComicsPage />} />
          <Route path='/comics/:comicId' element={<ComicPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App