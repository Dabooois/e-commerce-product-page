import React, { useState } from 'react';
import {
  Next,
  Previous,
  ProductContainer,
  ProductSlide,
  CompanyTitle,
  ProductTitle,
  Paragraph,
  PriceContainer,
  ButtonAddtoCart,
} from './product.styles';
import { ProductData } from '../../constant/data.json';
import IconNext from '../../assets/images/icon-next.svg';
import IconPrev from '../../assets/images/icon-previous.svg';
import IconPlus from '../../assets/images/icon-plus.svg';
import IconMinus from '../../assets/images/icon-minus.svg';

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChange = (key: number, action: string) => {
    if (action === 'previous' && key !== 0) setActiveIndex((prev) => prev - 1);
    if (action === 'next') {
      if (activeIndex === ProductData.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    }
    if (action === 'carousel') {
      setActiveIndex(() => key);
    }
  };
  return (
    <ProductContainer>
      <div>
        {ProductData.map((el, key) => (
          <ProductSlide
            className={`relative   fade ${
              key === activeIndex ? 'block' : 'hidden'
            }`}
            key={key}
          >
            <Previous
              src={IconPrev}
              onClick={() => handleChange(key, 'previous')}
              className='md:hidden block'
            />
            <img src={el.image} className='z-[-10] lg:rounded-3xl ' />
            <Next
              src={IconNext}
              onClick={() => handleChange(key, 'next')}
              className='md:hidden block'
            />
          </ProductSlide>
        ))}

        <div className=' hidden md:flex flex-row items-center justify-evenly gap-8  mt-16'>
          {ProductData.map((el, key) => (
            <img
              src={el.thumbnail}
              className={`h-28 rounded-lg cursor-pointer hover:outline  hover:outline-offset-2
              hover:outline-orange hover:opacity-[0.6]  ${
                key === activeIndex
                  ? 'outline-orange opacity-[0.6] outline  outline-offset-2'
                  : ''
              }`}
              onClick={() => handleChange(key, 'carousel')}
            />
          ))}
        </div>
      </div>

      <div className='container lg:self-center'>
        <CompanyTitle>Sneaker Company</CompanyTitle>

        <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
        <Paragraph className='paragraph '>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Paragraph>

        <PriceContainer>
          <h4 className='price'>$125.00</h4>
          <p className='discount'>50%</p>
          <h4 className='discounted_price ml-auto'>$250.00</h4>
        </PriceContainer>

        <div className='md:grid md:grid-cols-2 md:items-center md:my-16'>
          <div className='flex items-center justify-around my-8 md:my-0 '>
            <img src={IconMinus} alt='icon minus' />
            <p className='text-3xl font-bold'>3</p>
            <img src={IconPlus} alt='icon plus' />
          </div>
          <ButtonAddtoCart className='my-16 md:my-0'>
            <i className='ri-shopping-cart-2-line text-white text-3xl mr-4'></i>
            <span>Add to Cart</span>
          </ButtonAddtoCart>
        </div>
      </div>
    </ProductContainer>
  );
};

export default Product;
