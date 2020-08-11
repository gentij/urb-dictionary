import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../css-modules/main-module.css'

// React components
import Word from './Word' 

const Main = () => {
    const [wordOTD, setWordOFTD] = useState({})

    const fetchApi = (base_url, state) => {
        axios.get(base_url)
          .then(res => {
            state(res.data)
          })
    }

    // useEffect( ()=> {
    //     fetchApi('https://cors-anywhere.herokuapp.com/http://urban-word-of-the-day.herokuapp.com/', setWordOFTD)
    // },[])
    

    return (
        <main>
            <div className="container">
                <Word data={wordOTD}/>
            </div>
        </main>
    )
}

export default Main;