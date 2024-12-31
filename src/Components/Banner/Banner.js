import React, { useEffect, useState } from 'react';
import Banner1 from "../../Image/Banner/section2.png";
import Banner2 from "../../Image/Banner/section1.png";
import Motor from "../../Image/Insurance/motor.svg";
import Travel from "../../Image/Insurance/travel.svg";
import Yacht from "../../Image/Insurance/boat.svg";
import Home from "../../Image/Insurance/home.svg";
import Individual from "../../Image/Insurance/medical.svg";
import Other from "../../Image/Insurance/others.svg";
import Mobile from "../../Image/Insurance/mobile.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { API_URL } from '../..';

const state = {
  autoplay: false,
  loop: false,
  lazyLoad: true,
  responsive: {
    0: { items: 1 },
    1000: { items: 1 },
  },
};

const state1 = {
  lazyLoad: true,
  responsive: {
    0: { items: 2 },
    1000: { items: 6 },
  },
};

const state2 = {
  lazyLoad: true,
  responsive: {
    0: { items: 1 },
    1000: { items: 1 },
  },
};

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/get_mainpage`);
        const result = await response.json();
        if (result.status === 200) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="banner_all_one mb-5">
      <OwlCarousel className="img_abcds desktop" margin={10} responsive={state.responsive}>
        {data?.banner?.length > 0
          ? data.banner.map((val, index) => (
              <div className="item" key={index}>
                <img
                  src={`${API_URL}/Cmsuploads/banner/${val.filename}`}
                  className="partners_abcd"
                  alt={`Banner ${index}`}
                />
              </div>
            ))
          : (
              <>
                <div className="item">
                  <LazyLoadImage src={Banner1} className="partners_abcd" alt="Default Banner 1" />
                </div>
                <div className="item">
                  <LazyLoadImage src={Banner2} className="partners_abcd" alt="Default Banner 2" />
                </div>
              </>
            )}
      </OwlCarousel>

      <OwlCarousel style={{ display: "none" }} className="img_abcds mobile" margin={10} responsive={state2.responsive}>
        {[...Array(3)].map((_, index) => (
          <div className="item" key={index}>
            <LazyLoadImage src={Mobile} className="partners_abcd" />
          </div>
        ))}
      </OwlCarousel>

      <div className="container banner_sliders">
        <h3>We Don't Only Compare, We Issue!</h3>
        <OwlCarousel margin={30} responsive={state1.responsive}>
          {[
            { src: Motor, alt: "Motor", link: "/Chasisno" },
            { src: Travel, alt: "Travel", link: "/Traveldetails" },
            { src: Yacht, alt: "Yacht", link: "/Yachtdetails" },
            { src: Home, alt: "Home", link: "/Homeinsurance" },
            { src: Individual, alt: "Individual Medical", link: "/Individualpolicy" },
            { src: Other, alt: "Other Insurance", link: "/Otherinsurance" },
          ].map((item, index) => (
            <div className="item" key={index}>
              <Link to={item.link}>
                <div className="insuranc">
                  <img src={item.src} alt={item.alt} />
                  <p>{item.alt}</p>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Banner;
