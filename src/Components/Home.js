import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Common/Header'
import Banner from './Banner/Banner'
import Offers from './Offers/Offers'
import Quoteslist from './Quotes/Quoteslist'
import Partners from './Ourpartners/Partners'
import Footer from './Common/Footer'
import Reachus from './Reachus/Reachus'
import Testimonials from './Testimonials/Testimonials'
import Knowmore from './Knowmore/Knowmore'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddMotoformData } from '../redux/reducers/MotoformDataReducerSlice'
import { API_URL } from '..';
const Home = () => {
  const dispatch = useDispatch()
  const { token } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    if (token) {
      dispatch(AddMotoformData({ name: "businessentity", value: token, }));
    } else {
    }
  }, [dispatch, token])

  useEffect(() => {
    getMainpageCmsdata()
  }, [])

  const getMainpageCmsdata = async() => {
    try {
      const requestOptions = {
        method: 'GET',
      }
      await fetch(`${API_URL}/api/get_mainpage`, requestOptions)
        .then(response => response.json())
        .then((data) => {
          if(data.status === 200) {
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
      <Banner/>
      <Quoteslist />
      <Offers />
      <Partners />
      <Knowmore />
      <Testimonials />
      <Reachus />
      <Footer />
    </div>
  )
}

export default Home