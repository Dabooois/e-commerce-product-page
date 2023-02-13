import Reac, { useState } from 'react';
import { ProductData } from '../../constant/data.json';
import IconNext from '../../assets/images/icon-next.svg';
import IconPrev from '../../assets/images/icon-previous.svg';
import ImageProduct1 from '../../assets/images/image-product-1.jpg';
import { Next, Previous, ProductSlide } from './product.styles';

interface IModalProduct {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
}

const ModalProduct = (props: IModalProduct) => {
  const { showModal, setShowModal } = props;
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

  const handleShow = () => {
    setShowModal(!showModal);
  };
  console.log(showModal);
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-40 flex items-center justify-center   bg-blackTransparent '>
      <div className='py-8 flex flex-col'>
        <i
          className=' ri-close-line text-4xl text-white inline-block ml-auto my-4 cursor-pointer'
          onClick={handleShow}
        />

        <div className='relative'>
          {ProductData.map((el, key) => (
            <div
              key={key}
              className={`relative    ${
                key === activeIndex ? 'block' : 'hidden'
              }`}
            >
              <Previous
                src={IconPrev}
                onClick={() => handleChange(key, 'previous')}
                className='block'
              />
              <img
                src={el.image}
                className='lg:rounded-3xl md:cursor-pointer h-[40rem]'
              />
              <Next
                src={IconNext}
                onClick={() => handleChange(key, 'next')}
                className='block'
              />
            </div>
          ))}
        </div>
        <div className='flex flex-row items-center justify-evenly gap-8  mt-16'>
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
    </div>
  );
};

export default ModalProduct;
