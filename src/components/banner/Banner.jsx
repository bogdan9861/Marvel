import React from 'react'

import bannerImg from '../../assets/char-banner-img.png'
import bannerLogo from '../../assets/char-banner-logo.png'

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__inner">
                    <img className="banner__img" src={bannerImg} alt="" />
                    <h1 className='banner__title'>
                        New comics every week! <br />
                        Stay tuned!
                    </h1>
                </div>
                <img className="banner__logo" src={bannerLogo} alt="" />
            </div>
        </div>
    )
}

export default Banner