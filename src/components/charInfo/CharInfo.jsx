import React, { useEffect, useState } from 'react'

import Service from '../service/Service';

import './CharInfo.scss'
import Spinner from '../spinner/Spinner';
import InfoSceleton from './Sceleton';

const CharInfo = ({ selectedChar, comicsList }) => {

    const [char, setChar] = useState(null);
    const [comics, setComics] = useState([]);

    const {getComicsById, loading, error} = Service();

    useEffect(() => {
        setChar(char => selectedChar)
    }, [selectedChar])

    useEffect(() => {
        setComics(comics => comicsList)
    }, [comicsList])

    const content = !char ? <InfoSceleton /> : <View char={char} comicsList={comics} />

    return (
        <section className='charInfo'>
            <div className="charInfo__inner" style={{height: !char ? '294px' : 'fit-content'}}>
                <h4 className='charInfo__title'>{!char ? 'Please select a character to see information' : null} </h4>
                {content}
            </div>
        </section>
    )

}

const View = ({ char, comicsList }) => {
    return (
        <>
            <div className="charInfo__top">
                <img className="charInfo__top-img" src={char.thumbnail} alt="" />
                <div className="charInfo__top-content">
                    <h3 className="charInfo__top-title">{char.name}</h3>
                    <div className="charInfo__top-btns">
                        <a className="charInfo__top-btn btn red whiteBG" href={char.resourceUrl} >HOMEPAGE</a>
                        <a className="charInfo__top-btn btn whiteBG" href={char.wikiUrl} >WIKI</a>
                    </div>
                </div>
            </div>
            <div className="charInfo__body">
                <p className="charInfo__body-text">
                    {char.description}
                </p>
            </div>
            <div className="charInfo__bottom">
                <h4 className="charInfo__bottom-title">Comics:</h4>
                <ul className="charInfo__bottom-list">
                    {
                        comicsList.map(comic => {
                            return (
                                <li className="charInfo__bottom-item" key={comic.id}>
                                    {comic.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default CharInfo