import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import { Helmet } from 'react-helmet'

import Banner from '../../components/banner/Banner'
import Service from '../../components/service/Service'

import './CharPage.scss'

import thumbnail from '../../assets/thumbnail.png'
import Spinner from '../../components/spinner/Spinner'

const CharPage = () => {

    const { charId } = useParams();

    const [char, setChar] = useState(null);
    const { getCharacterById, loading, error } = Service();

    useEffect(() => {
        getCharacterById(charId)
            .then(res => setChar(res))
            .catch(e => console.error(e))
    }, [])

    const spinner = loading ? <Spinner /> : null;
    const result = !(loading || error || !char) ? <Char char={char} /> : null

    return (
        <>
            <div className="char">
                <Helmet>
                    <meta
                        name="description"
                        content={`Single page with information about a ${char?.name}`}
                    />

                    <title>{loading ? 'loading...' : `${char?.name} character page`}</title>
                </Helmet>
                <div className="container">
                    <Banner />
                    {spinner}
                    {result}
                </div>
            </div>
        </>
    )
}

const Char = ({ char }) => {
    return (
        <div className="char__wrapper">
            <img className="char__img" src={char.thumbnail} alt="" />
            <div className="char__inner">
                <h2 className="char__name">{char.name}</h2>
                <p className="char__description">
                    {char.description}
                </p>
            </div>
        </div>
    )
}

export default CharPage