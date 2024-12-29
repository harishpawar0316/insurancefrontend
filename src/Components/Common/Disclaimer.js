import React, { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Disclaimerbanner from '../Banner/Disclaimerbanner'
import { API_URL } from '../..';

const Disclaimer = () => {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        getTermsAndConditionsContent('Disclaimers')
    }, [])

    const getTermsAndConditionsContent = async (name) => {
        try {
        const requestOptions = {
            method: 'GET',
        }
        await fetch(`${API_URL}/api/socialMediaLinkName?name=${name}`, requestOptions)
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
            <Disclaimerbanner />
            <div className='container mt-5 mb-5'>
                <div className='privacypolicy'>
                    <h3><b>Disclaimer</b></h3>
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

export default Disclaimer
