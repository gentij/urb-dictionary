import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Word = (props) => {


    return (
        <div className="word-container">
            <div className="content">
                <div className="content-header">
                    <div className="share">
                        <p>WORD OF THE DAY</p>
                        <div className="socials">
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="word-wrapper">
                        <h1>WAP</h1>
                    </div>
                </div>
                <div className="content-main">
                    <div className="description-container">
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, nihil?</p>
                        </div>
                        <div className="example">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="content-info">
                        <div className="created">
                            <p>by Black Don August 06, 2020</p>
                        </div>
                        <div className="feedback">
                            <div className="likes">
                                <button>967</button>
                                <button>217</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ad">
                <p>Get a WAP mug for your sister in law julia</p>
            </div>
        </div>
    )
}

export default Word;