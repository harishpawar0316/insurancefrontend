import React, { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Privacybanner from '../Banner/Privacybanner'
import { API_URL } from '../..';

const Privacypolicy = () => {
  const API = 'http://localhost:8000'
  const [data, setData] = useState([])
  
  useEffect(() => {
      getTermsAndConditionsContent('Privacy Policy')
  }, [])

  const getTermsAndConditionsContent = async (name) => {
      try {
        const requestOptions = {
          method: 'GET',
        }
        await fetch(`${API}/api/socialMediaLinkName?name=${name}`, requestOptions)
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
      <Privacybanner />
      <div className='container mt-5 mb-5'>
        <div className='privacypolicy'>
          <h3><b>Privacy Policy</b></h3>
          <p
            dangerouslySetInnerHTML={{
            __html: data.contants,
            }}
          />
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Privacypolicy
