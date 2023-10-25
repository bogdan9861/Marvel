import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Banner from '../../components/banner/Banner'
import Service from '../../components/service/Service'

import img from '../../assets/comics_img.png'
import './ComicPage.scss'
import Spinner from '../../components/spinner/Spinner'

const ComicPage = () => {

    const { comicId } = useParams();
    const [comic, setComic] = useState(null);
    const navigate = useNavigate();

    const { getComicById, loading, error } = Service();

    useEffect(() => {

        getComicById(comicId)
            .then(res => setComic(res))
            .catch(e => console.error(e))

    }, [])

    const editPath = () => {
        navigate("..", { relative: "path" });
    }

    return (
        <div className="comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${comic?.title} comics book`}
                />

                <title>{comic?.title}</title>
            </Helmet> 
            <div className="container">
                <Banner />
                {loading ? <Spinner /> :
                    <div className="comic__inner">
                        <img className="comic__img" src={comic?.thumbnail} alt="" />
                        <div className="comic__cotnent">
                            <div className="comic__content-top">
                                <h1 className="comic__title">{comic?.title}</h1>
                                <a className="comic__back-link" onClick={editPath}>Back to all</a>
                            </div>
                            <p className="comic__text">
                                {comic?.description}
                            </p>
                            <span className="comic__pages">{comic?.pageCount} pages</span>
                            <span className="comic__lang">Language: {comic?.language}</span>
                            <span className="comic__price">{comic?.price}$</span>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default ComicPage