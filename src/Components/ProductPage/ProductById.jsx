import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
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

import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    AOS.init()
  }, [])
  const productsData = {
    panels: [
      {
        id: 1,
        img: stardelta,
        title: 'Dolomite Powder',
        description: 'High-quality Dolomite Powder used as a filler and extender in paints, plastics, ceramics, and rubber industries. Offers excellent hardness, whiteness, and purity for industrial applications.',
        features: [
          'Excellent whiteness and purity',
          'High bulk density',
          'Good chemical stability'
        ],
        specifications: [
          'Purity: 98% Min',
          'Particle Size: 200-500 mesh',
          'Brightness: 92% Min',
          'CaCO₃ Content: 58% - 61%'
        ],
        other_info: [
          'Application Areas: Paints, Plastics, Ceramics, Rubber',
          'Packaging: 25/50 kg HDPE bags',
          'Origin: India'
        ]
      },
      {
        id: 2,
        img: atspanel,
        title: 'Calcium Carbonate for Water Treatment',
        description: 'Effective grade of Calcium Carbonate used to neutralize acidic water, remove impurities, and adjust pH levels in water treatment plants and filtration systems.',
        features: [
          'High buffering capacity',
          'Fast pH neutralization',
          'Low impurity content'
        ],
        specifications: [
          'CaCO₃ Purity: 95% - 98%',
          'Moisture: < 0.5%',
          'Mesh Size: 100-300',
          'pH Range: 9-9.5'
        ],
        other_info: [
          'Application Areas: Drinking Water Plants, Wastewater Treatment',
          'Packaging: 25/50 kg bags',
          'Origin: India'
        ]
      },
      {
        id: 3,
        img: dolmccb,
        title: 'Calcium Carbonate for Pipes & PVC products',
        description: 'Optimized for PVC applications, this Calcium Carbonate improves impact resistance, enhances surface finish, and reduces production costs in pipe and plastic manufacturing.',
        features: [
          'High purity and brightness',
          'Improves impact resistance',
          'Enhances processing performance'
        ],
        specifications: [
          'CaCO₃ Content: 96% Min',
          'Brightness: 94% Min',
          'Mesh Size: 400 - 700',
          'Moisture: < 0.3%'
        ],
        other_info: [
          'Application Areas: PVC Pipes, Profiles, Fittings',
          'Packaging: 25/50 kg HDPE/PP bags',
          'Origin: India'
        ]
      },
      {
        id: 4,
        img: dolgold,
        title: 'Calcium Carbonate for Ceramics',
        description: 'Ultra-fine Calcium Carbonate used in ceramic manufacturing to increase strength, reduce shrinkage, and provide a smooth surface finish for tiles and sanitaryware.',
        features: [
          'Enhances product strength',
          'Reduces shrinkage',
          'Improves glaze bonding'
        ],
        specifications: [
          'CaCO₃ Purity: 97% Min',
          'Mesh Size: 300 - 800',
          'Brightness: 93% Min',
          'Moisture: < 0.4%'
        ],
        other_info: [
          'Application Areas: Ceramic Tiles, Sanitary Ware, Tableware',
          'Packaging: 25/50 kg HDPE bags',
          'Origin: India'
        ]
      },
      {
        id: 5,
        img: dolpanel,
        title: 'Calcium Carbonate for Master batch',
        description: 'Specially treated Calcium Carbonate for masterbatch production, ensuring excellent dispersion, brightness, and compatibility with polymer matrices.',
        features: [
          'High surface modification',
          'Superior dispersion in polymers',
          'Reduces raw material cost'
        ],
        specifications: [
          'CaCO₃ Content: 98% Min',
          'Coating: Stearic Acid (1%–2%)',
          'Mesh Size: 800 - 1500',
          'Brightness: 96% Min'
        ],
        other_info: [
          'Application Areas: Color Masterbatches, Filler Masterbatches',
          'Packaging: 25 kg laminated bags',
          'Origin: India'
        ]
      },
      {
        id: 6,
        img: star_delta_mccb,
        title: 'Calcium Carbonate for Paper & Printing',
        description: 'Fine Calcium Carbonate designed to improve paper brightness, opacity, and smoothness. Enhances print quality and ink absorption in printing and paper coating applications.',
        features: [
          'High brightness and opacity',
          'Improves ink retention',
          'Cost-effective filler material'
        ],
        specifications: [
          'CaCO₃ Purity: 95% - 97%',
          'Mesh Size: 325 - 600',
          'Brightness: 95% Min',
          'Moisture: < 0.5%'
        ],
        other_info: [
          'Application Areas: Coated Paper, Newsprint, Printing Boards',
          'Packaging: 25/50 kg moisture-proof bags',
          'Origin: India'
        ]
      },
      {
        id: 7,
        img: Hp100msdol,
        title: 'Calcium Carbonate for Paints & Coating',
        description: 'High-durability Calcium Carbonate used as an extender in paints and coatings, providing enhanced coverage, better adhesion, and improved weather resistance.',
        features: [
          'Excellent coverage properties',
          'Improves weather resistance',
          'Increases paint durability'
        ],
        specifications: [
          'CaCO₃ Content: 96% - 98%',
          'Mesh Size: 325 - 800',
          'Brightness: 94% Min',
          'Oil Absorption: 22-26 g/100g'
        ],
        other_info: [
          'Application Areas: Decorative Paints, Industrial Coatings, Primers',
          'Packaging: 25/50 kg moisture-resistant bags',
          'Origin: India'
        ]
      },
      {
        id: 8,
        img: Hp100mssd,
        title: 'Calcium Carbonate for Animal feed supplements',
        description: 'Food-grade Calcium Carbonate used as a rich source of calcium in animal feed supplements, essential for bone development and metabolic function in livestock and poultry.',
        features: [
          'High bioavailability of calcium',
          'Supports bone and eggshell formation',
          'Food-grade and safe for consumption'
        ],
        specifications: [
          'CaCO₃ Purity: 98% Min',
          'Mesh Size: 100 - 250',
          'Moisture: < 0.3%',
          'Lead & Heavy Metals: Within permissible limits'
        ],
        other_info: [
          'Application Areas: Poultry Feed, Livestock Feed, Veterinary Supplements',
          'Packaging: 25/50 kg food-grade bags',
          'Origin: India'
        ]
      }
    ]
  };



  const products = [
    {
      id: uuidv4(),
      img: stardelta,
      title: 'Dolomite Powder',
      description: 'High-quality Dolomite Powder used as a filler and extender in paints, plastics, ceramics, and rubber industries. Offers excellent hardness, whiteness, and purity for industrial applications.'
    },
    {
      id: uuidv4(),
      img: atspanel,
      title: 'Calcium Carbonate for Water Treatment',
      description: 'Effective grade of Calcium Carbonate used to neutralize acidic water, remove impurities, and adjust pH levels in water treatment plants and filtration systems.'
    },
    {
      id: uuidv4(),
      img: dolmccb,
      title: 'Calcium Carbonate for Pipes & PVC products',
      description: 'Optimized for PVC applications, this Calcium Carbonate improves impact resistance, enhances surface finish, and reduces production costs in pipe and plastic manufacturing.'
    },
    {
      id: uuidv4(),
      img: dolgold,
      title: 'Calcium Carbonate for Ceramics',
      description: 'Ultra-fine Calcium Carbonate used in ceramic manufacturing to increase strength, reduce shrinkage, and provide a smooth surface finish for tiles and sanitaryware.'
    },
    {
      id: uuidv4(),
      img: dolpanel,
      title: 'Calcium Carbonate for Master batch',
      description: 'Specially treated Calcium Carbonate for masterbatch production, ensuring excellent dispersion, brightness, and compatibility with polymer matrices.'
    },
    {
      id: uuidv4(),
      img: star_delta_mccb,
      title: 'Calcium Carbonate for Paper & Printing',
      description: 'Fine Calcium Carbonate designed to improve paper brightness, opacity, and smoothness. Enhances print quality and ink absorption in printing and paper coating applications.'
    },
    {
      id: uuidv4(),
      img: Hp100msdol,
      title: 'Calcium Carbonate for Paints & Coating',
      description: 'High-durability Calcium Carbonate used as an extender in paints and coatings, providing enhanced coverage, better adhesion, and improved weather resistance.'
    },
    {
      id: uuidv4(),
      img: Hp100mssd,
      title: 'Calcium Carbonate for Animal feed supplements',
      description: 'Food-grade Calcium Carbonate used as a rich source of calcium in animal feed supplements, essential for bone development and metabolic function in livestock and poultry.'
    }
  ];

  useEffect(() => {

    const foundProduct = productsData.panels.find(item => item.id === productId);
    setProduct(foundProduct);
  }, [productId]);


  const { title, img, description, features, specifications, other_info } = product || {};

  return (
    <>
      <Breadcrumbs title='Product Details Default' />
      <section className='m-top53px'>
        <div>
          <div>
            {product ? (
              <div>
                <div className='img-magnify container'>
                  <div className='border1px'>
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: img,

                      },
                      largeImage: {
                        src: img,
                        width: 800,
                        height: 800
                      },
                      enlargedImagePosition: 'over',
                      lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                    }} />
                  </div>
                  <div className='description' data-aos="fade-up">
                    <h2>{title}</h2>
                    <h3>Description</h3>
                    <p>{description}</p>
                    <h3>Features</h3>
                    <ul>
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='specification'>
                  <div className='otherinfo' data-aos="fade-up">
                    <h3>Specifications</h3>
                    <ul>
                      {specifications.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='otherinfo' data-aos="fade-up">
                    <h3>Other Info</h3>
                    <ul>
                      {other_info.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <p>Product not found</p>
            )}
          </div>
        </div>
      </section>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='h1-container'><h1>Related Products</h1></div>
          <div>
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
              modules={[Autoplay, Navigation]}

            >
              {
                products?.map((product, index) => {
                  return (
                    <SwiperSlide key={product.id} className='related-product'>
                      <Link key={product.id} to={`/Allproduct/${index + 1}`}>
                        <img src={product.img} width='200' />
                        <h4>{product.title}</h4>
                        <p>{`${product.description.slice(0, 48)}...`}</p>
                        <ul>
                          <li><a >Read More</a></li>
                        </ul>
                      </Link>
                    </SwiperSlide>
                  )
                })

              }
            </Swiper>
          </div>

        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </>
  )
}

export default ProductById
