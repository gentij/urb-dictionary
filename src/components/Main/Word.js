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
            </div>
        </div>
    )
}

export default Word;