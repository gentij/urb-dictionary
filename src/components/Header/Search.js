import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Search  = () => {
    return (
        <div className="search-container">
            <div className="search-input">
                <input type="text" placeholder="Type any word..."/>
            </div>
            <div className="search-buttons">
                <button className="search-buttons">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button className="search-buttons">
                    <FontAwesomeIcon icon={faArrowsAlt}/>
               </button>
                <button className="search-buttons">
                    <FontAwesomeIcon icon={faUser}/>
                </button>
            </div>
        </div>
    )
}

export default Search;