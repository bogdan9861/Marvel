import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Banner from '../../components/banner/Banner'
import { Link } from 'react-router-dom'
import Service from '../../components/service/Service'
import Spinner from '../../components/spinner/Spinner'

import comics_img from '../../assets/comics_img.png'
import './ComicsPage.scss'


const ComicsPage = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(8);

    const { getAllComics, loading, error } = Service()

    useEffect(() => {
        getAllComics()
            .then(res => setComics([...res]))
            .catch(e => console.error(e))
    }, [])

    const onLoad = () => {
        setOffset(offset => offset + offset)

        getAllComics(offset)
            .then(res => setComics([...comics, ...res]))
            .catch(e => console.error(e))
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />

                <title>Comics page</title>
            </Helmet>
            <div className="comics">
                <div className="container">
                    <Banner />
                    <div className="comics__inner">
                        {loading ? <Spinner /> : comics.map((comic, i) => {
                            return (
                                <Link to={`${comic.id}`} className="comics__item" key={i}>
                                    <img className="comics__img" src={comic.thumbnail} alt="" />
                                    <h4 className="comics__title">{comic.title}</h4>
                                    <span className='comics__price'>{comic.price}$</span>
                                </Link>
                            )
                        })}

                    </div>
                    <button className='comics__btn btn red whiteBG' onClick={onLoad}>LOAD MORE</button>
                </div>
            </div>
        </>
    )
}

export default ComicsPage