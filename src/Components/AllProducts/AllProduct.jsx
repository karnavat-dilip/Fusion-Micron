import React, { useEffect } from 'react'
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

import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
import { Link } from 'react-router-dom'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

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

  return (
    <div>
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <Link key={product.id} className='product-child' to={`/Allproduct/${index+1}`}>
                            <h4>{product.title}</h4>
                            <img src={product.img} width='200'/>
                            <h3>Description</h3>
                            <p>{`${product.description.slice(0,58)}...`}</p>
                            <ul>
                              <li><a >Read More</a></li>
                            </ul>
                          </Link>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct