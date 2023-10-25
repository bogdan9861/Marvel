import React, { useEffect, useState } from 'react'

import Service from '../service/Service'

import thubnail from '../../assets/feab-462-a-641.jpg'

import './CharList.scss'
import CharListSceleton from './CharListSceleton'

const CharList = ({ selectChar, setComics }) => {

    const { getAllCharacters, loading, error } = Service();

    const [chars, setChars] = useState([]);
    const [offset, setOffset] = useState(9)

    useEffect(() => {
        getAllCharacters()
            .then(res => setChars([...res]))
    }, [])

    const onLoad = () => {
        setOffset(offset => offset + 9);

        getAllCharacters(offset)
            .then(res => setChars(chars => [...chars, ...res]))
    }

    const content = loading ? <CharListSceleton /> : <Item chars={chars} selectChar={selectChar} setComics={setComics} />

    return (
        <section className="charList">
            <div className="charList__wrapper">
                {content}
                <button className="charList__btn btn red whiteBG" onClick={onLoad} disabled={loading}>LOAD MORE</button>
            </div>
        </section>
    )
}

const Item = ({ chars, selectChar, setComics }) => {

    const { getComicsByCharId, loading, error } = Service();

    const onCharSelected = (char) => {
        selectChar(char);

        getComicsByCharId(char.id)
            .then(res => setComics(comics => [...res]))
            .catch(e => console.error(e))

    }

    return (
        <div className="charList__inner">
            {
                chars.map((char, i) => {
                    return (
                        <div className="charList__item" key={char.id} onClick={() => onCharSelected(char)}>
                            <img
                                className="charList__img"
                                src={char.thumbnail} alt=""
                                style={{
                                    objectFit: char.thumbnail == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
                                    ? 'contain' : 'cover',

                                    height: char.thumbnail == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
                                    ? 'auto' : '200px'
                                }
                                } />
                            <span className="charList__name">{char.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CharList