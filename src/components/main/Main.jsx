import React, { useEffect, useState } from 'react'

import Service from '../service/Service'
import Spinner from '../spinner/Spinner'

import './Main.scss'

import mjolner from '../../assets/main_mjolner.png'

const Main = () => {

    const [char, setChar] = useState(null);

    const { loading, error, getCharacterById } = Service()

    useEffect(() => {
        updateChar()
    }, [])

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacterById(id)
            .then(onCharLoaded)
    }

    const onCharLoaded = (data) => {
        setChar(data);
    }

    const onRandomChar = () => {
        updateChar();
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <Content char={char} /> : null;

    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="main__item">
                        {spinner}
                        {content}
                    </div>
                    <div className="main__item random">
                        <p className="random__text">
                            Random character for today! <br />
                            Do you want to get to know him better?
                        </p>
                        <span className='random__btn-lable'>
                            Or choose another one
                        </span>
                        <button
                            className="random__btn btn red greenBG"
                            onClick={onRandomChar}
                        >
                            TRY IT
                        </button>
                        <img className='random__img' src={mjolner} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

const Content = (props) => {

    return (
        <>
            <img
                src={props.char.thumbnail}
                alt=""
                className="main__item-img"
                style={{objectFit: `${
                    props.char.thumbnail == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                    ? 'contain' : 'cover'
                }`}}
            />
            <div className="main__item-content">
                <h3 className="main__item-title">{props.char.name}</h3>
                <p className="main__item-text">
                    {props.char.description}
                </p>
                <div className="main__item-btns">
                    <a href={props.char.resourceUrl} className="btn red whiteBG main__item-btn red">
                        HOMEPAGE
                    </a>
                    <a href={props.char.wikiUrl} className="btn whiteBG main__item-btn">
                        WIKI
                    </a>
                </div>
            </div>
        </>
    )
}

export default Main