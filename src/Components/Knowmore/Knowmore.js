import React, { useEffect, useState } from 'react'
import Knowmoreimg from '../../Image/personalized_insurance.png'
import videoicon from '../../Image/videoIcon.svg'
import { API_URL } from '../..'
import { Link } from "react-router-dom";

const Knowmore = () => {

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
            console.log("data", data.data)
            setData(data.data)
          }
        })

    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div>
      <div className='container knowmore' data-aos="zoom-in-up" data-aos-duration="2000">
        <div className='row'>
          <div className='col-md-4'>
            <img src={Knowmoreimg} className='knowmoreimg' alt='knowmore' />
          </div>
          <div className='col-md-8'>
            {data && (
              <h3 dangerouslySetInnerHTML={{ __html: data.know_more_header }} />
            )}
            <Link to="/Knowmorecontent"><button className='knowmore_button'>Know more</button></Link>
            {data?.know_more_banner && data.know_more_banner.map((val, index) => (
              <a
                key={index}
                style={{ textDecoration: 'none' }}
                href={`${API_URL}/Cmsuploads/knowmore/${val.filename}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className="rbt-feature feature-style-1 align-items-center">
                  <div className="icon bg-primary-opacity">
                    <img src={videoicon} alt='video icon' />
                  </div>
                  <div className="feature-content">
                    <h6 className="feature-title">Watch Video</h6>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowmore