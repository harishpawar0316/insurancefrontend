import React, { useState,useEffect } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { API_URL } from '../..';

const Termsandcond = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        getMainpageCmsdata()
    }, [])

    const getMainpageCmsdata = async () => {
        try {
          const requestOptions = {
            method: 'GET',
          }
          await fetch(`${API_URL}/api/get_mainpage`, requestOptions)
            .then(response => response.json())
            .then((data) => {
              if (data.status === 200) {
                setData(data.data)
              }
            })
    
        } catch (error) {
          console.log("error", error)
        }
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <p
                    dangerouslySetInnerHTML={{
                    __html: data.know_more_content,
                    }}
                />
            </div>
            <Footer />
        </div >
    )
}

export default Termsandcond
