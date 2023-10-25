import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Main from '../components/main/Main'
import CharList from '../components/charList/CharList'
import CharInfo from '../components/charInfo/CharInfo'
import Form from '../components/form/Form'

import '../components/app/App.css'

import bg_dec from '../assets/bg_dec.png'

const MainPage = () => {

    const [selectedChar, setSelectedChar] = useState(null);
    const [comics, setComics] = useState([]);

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main page with our characters"
                />

                <title>Marvel information</title>
            </Helmet>

            <Main />
            <div className="CharList-wrapper container">
                <CharList selectChar={setSelectedChar} setComics={setComics} />

                <div className="charInfo-wrapper">
                    <CharInfo selectedChar={selectedChar} comicsList={comics} />
                    <Form />
                </div>
            </div>

            <img className='app_decoration' src={bg_dec} alt="" />
        </>
    )
}

export default MainPage