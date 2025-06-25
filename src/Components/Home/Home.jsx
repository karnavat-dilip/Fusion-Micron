import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../Assets/about.jpg'
import liquifyvector from '../../Assets/banner.jpg'
import round1 from '../../Assets/round.png'
import 'animate.css'
import Banner2 from '../../Assets/Banner2.jpg'
import profile_img from '../../Assets/Assets/about.webp'
import img31 from '../../Assets/img-35-1.jpeg'
import star_delta_mccb from '../../Assets/Assets/paper-printing.webp'
import stardelta from '../../Assets/Assets/dolomite-poweder.webp'
import atspanel from '../../Assets/Assets/water-treatment.webp'
import dolmccb from '../../Assets/Assets/Pipes-PVC-Products.webp'
import dolgold from '../../Assets/Assets/ceramics.webp'
import dolpanel from '../../Assets/Assets/master-batch.webp'

import Hp100msdol from '../../Assets/Assets/paints-coating.webp'
import Hp100mssd from '../../Assets/Assets/animal-feed.webp'
import Hp100sd from '../../Assets/Hp100sd.png'
import Hp150ATS from '../../Assets/Hp150ATS.png'
import Hp150msdol from '../../Assets/Hp150msdol.png'
import Hp200ATS from '../../Assets/Hp200ATS.png'
import Hp250ATS from '../../Assets/Hp250ATS.png'
import Hp250msdol from '../../Assets/Hp250msdol.png'
import Hp30msdol from '../../Assets/Hp30msdol.png'
import Hp40msdol from '../../Assets/Hp40msdol.png'
import Hp40mssd from '../../Assets/Hp40mssd.png'
import Sphp3 from '../../Assets/S.php3.png'
import Sphp5 from '../../Assets/S.php5.png'

import ads2 from '../../Assets/ads2.png'
import Domestic from '../../Assets/services_agri_icon.png'
import Mining from '../../Assets/services_mining_icon.png'
import Industry from '../../Assets/services_industry_icon.png'
import FireFighting from '../../Assets/services_fire_icon.png'
import Construction from '../../Assets/services_construction_icon.png'
import Residential from '../../Assets/services_residential_icon.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo1 from '../../Assets/logo1.jpg'
import testy1 from '../../Assets/testi1.jpg'
import testy2 from '../../Assets/testi2.jpg'
import testy3 from '../../Assets/testi3.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.jpg'
import logo9 from '../../Assets/logo9.jpg'
import logo10 from '../../Assets/logo10.jpg'
import logo11 from '../../Assets/logo11.jpg'
import logo12 from '../../Assets/logo12.jpg'
import logo13 from '../../Assets/logo13.jpg'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

function  AboutUs() {
  return (
    <div>
      <p>Fusion Micron produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement...
        <a href='/about' style={{ color: '#01a875' }}> Read more</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Calcite powder and calcium carbonate (CaCO₃) offer a wide range of strengths that make them indispensable in various industrial applications. One of their primary advantages is their excellent whiteness and purity, which enhances the brightness and opacity of products such as paints, plastics, and paper... <a href='/about' style={{ color: '#01a875' }}> Read more</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>It is one of the most widely used Industrial Minerals for a variety of applications and we produce it in a broad range of particle sizes ranging from coarser to finer and ultra-fine sizes depending on the nature of your application it needs to be used in... <a href='/about' style={{ color: '#01a875' }}>Read more</a></p>
    </div>
  );
}

const products = [
  {
    id: uuidv4(),
    img: stardelta,
    title: 'Dolomite Powder'
  },
  {
    id: uuidv4(),
    img: atspanel,
    title: 'Calcium Carbonate for Water Treatment'
  },
  {
    id: uuidv4(),
    img: dolmccb,
    title: 'Calcium Carbonate for Pipes & PVC products'
  },
  {
    id: uuidv4(),
    img: dolgold,
    title: 'Calcium Carbonate for Ceramics'
  },
  {
    id: uuidv4(),
    img: dolpanel,
    title: 'Calcium Carbonate for Master batch'
  },
  {
    id: uuidv4(),
    img: star_delta_mccb,
    title: 'Calcium Carbonate for Paper & Printing'
  },

  {
    id: uuidv4(),
    img: Hp100msdol,
    title: 'Calcium Carbonate for Paints & Coating'
  },
  {
    id: uuidv4(),
    img: Hp100mssd,
    title: 'Calcium Carbonate for Animal feed supplements'
  }
]
function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

  const data = [
    ["West Bangal", "Hours per Day"],
    ["Jammu & Kashmir", 9],
    ["Maharashtra", 6],
    ["Kerala",5],
    ["Rajasthan", 7],
    ["Tamilnadu", 8],
    ["Bihar", 9],
    ["Andaman & Nicabar", 6],
    ["Andhra-Pradesh", 8],
    ["Uttar Pradesh", 11],
    ["Jharkhand", 13],
    ["Panjab", 12],
    ["Delhi", 14],
    ["Hariyana", 9],
  ];

  const options = {
    title: "",
  };

  const productapplication = [
    {
      id: uuidv4(),
      img: Domestic,
      Appname: 'Domestic',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },
    {
      id: uuidv4(),
      img: Mining,
      Appname: 'Mining',
      moreinfo: 'The mining industry which is referred as the world’s toughest industrialized working environments needs a bit of revamping'
    },
    {
      id: uuidv4(),
      img: Industry,
      Appname: 'Industry',
      moreinfo: 'Industries seem to be smaller when put into comparison with the amount of diverse and distinctive pumps that Goodluck is equipped with'
    },
    {
      id: uuidv4(),
      img: FireFighting,
      Appname: 'Fire Fighting & Dewatering',
      moreinfo: 'The most critical component of a Fire Sprinkler system, i.e the fire pump needs due attention, and that’s why we at Goodluck take immense care in designing..'
    },
    {
      id: uuidv4(),
      img: Construction,
      Appname: 'Construction & Building',
      moreinfo: 'Irrespective of the scale of building services Goodluck offers wide varieties of pumps, valves, and systems that perfectly match your building and construction needs.'
    },
    {
      id: uuidv4(),
      img: Residential,
      Appname: 'Residential',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },

  ]

  return (
    <>
      <div className='swiper-container'>
        {/* <img src={liquifyvector} id='img1' /> */}
        {/* <section className='slide'>
          <div> */}

        <div className='child_slider'>
          <h1 className='animate__animated animate__backInLeft' >{products[currentLogoIndex].title}</h1>
          <div className='inner-img'>
            <img src={round1} className='product-img1 animate__animated animate__backInRight'  />
            <img src={products[currentLogoIndex].img} className='product-img animate__animated animate__backInUp'  />
          </div>
        </div>

        {/* </div>
        </section> */}
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to our <span style={{color:'#263078',fontSize:'larger'}}>Fusion Micron</span></h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>Fusion Micron produces Ground Calcium Carbonates (CaCO3) with series of different brightness and particle sizes as per the requirement of the industry and the customers.</p>
                  <h4>Production & Manufacturing Capacity
                  </h4>
                  <p>CaCO3 is manufactured by grinding Limestone or white marble. Because of their high brightness and purity, our product is a Super White, Highly Pure, Micronized, closely controlled particle size. CaCO3 produced from the finest quality resources procured from selective mines.</p>
                </div>
                <div>
                  <img src={profile_img} id='profile-img' />
                </div>
              </div>
              <div>
                <h4>Technology Innovations
                </h4>
                <p>One of the most notable developments is the creation of nano calcium carbonate (NCC), which involves ultrafine particles with sizes below 100 nanometers.These nanoparticles offer a higher surface area, improving their performance as fillers in plastics, rubber, paints, and coatings.</p>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Product Category</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

              >
                {
                  products?.map((product, index) => {
                    return (
                      <SwiperSlide key={product.id} className='swiper-child'>
                        {/* <div key={product.id} className='swiper-child'> */}
                        <Link to={`/Allproduct/${index + 1}`}>
                          <img src={product.img} width='200px' /><br/>
                          <h3>{product.title}</h3>
                        </Link>
                        {/* </div> */}
                      </SwiperSlide>

                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </section >
        <section data-aos="fade-up">
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={60000} duration={2} delay={0} />}+

                <h4>SQ. FT Manufacturing Unit</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={2200} duration={5} delay={0} />}+

                <h4>Metric ton Production Capacity</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={60} duration={5} delay={0} />}+

                <h4>Valuable Clients</h4>
              </div>
              
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            <div>
              <img src={img31} style={{
                width: "50%",
                position: 'relative',
                left: "25%"
              }} />
            </div>
          </div>
        </section>
        {/* <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Product Application
              </h1>
            </div>
            <div className='grid-container'>
              {productapplication?.map((product, index) => {
                return (
                  <div className='grid-item'>
                    <img src={product.img} />
                    <h1>{product.Appname}</h1>
                    <Accordion style={{ background: 'aliceblue', boxShadow: 'none' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}

                      >
                        More Info
                      </AccordionSummary>
                      <AccordionDetails>
                        {product.moreinfo}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                )
              })}
            </div>
          </div>
        </section> */}
        {/* <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Our Service
              </h1>
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              loader={<div>Loading Chart...</div>}
              height={"400px"}
            />

          </div>
        </section > */}
        <section>

        </section>
      </div >
    </>
  )
}

export default Home
