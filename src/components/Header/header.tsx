import Menu from '../../assets/images/icon-menu.svg';

import Avatar from '../../assets/images/image-avatar.png';
import ImageProduct1 from '../../assets/images/image-product-1.jpg';
import {
  HeaderTitle,
  HeaderContainer,
  HeaderStyle,
  Image,
} from './header.style';
import { headerLinks } from '../../constant/data.json';
import { useState } from 'react';
import { ButtonAddtoCart } from '../ProductPreview/product.styles';
import Cart, { ICartDetails } from '../Cart/cart';
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle_cart, setToggleCart] = useState(true);
  const [cart_details, setcartDetails] = useState([
    {
      src: ImageProduct1,
      name: 'Fall limited edition sneakers',
      quantity: 3,
      amount: 120,
    },
    {
      src: ImageProduct1,
      name: 'Fall limited edition sneakers',
      quantity: 4,
      amount: 120,
    },
    {
      src: ImageProduct1,
      name: 'Fall limited edition sneakers',
      quantity: 5,
      amount: 120,
    },
  ]);
  const toggleNav = () => {
    setToggle((toggle) => !toggle);
  };
  const toggleCart = () => {
    setToggleCart((toggle_cart) => !toggle_cart);
  };

  return (
    <>
      <HeaderStyle>
        <HeaderContainer>
          <Image
            src={Menu}
            alt='menu icon'
            className='h-6 mt-2 lg:hidden'
            onClick={toggleNav}
          />
          <HeaderTitle>sneakers</HeaderTitle>
        </HeaderContainer>

        <nav className='mr-auto hidden lg:block'>
          <ul className='flex gap-8 items-center'>
            {headerLinks.map((el, idx) => (
              <li
                className={`py-10 text-2xl cursor-pointer ${
                  idx === 0 ? 'border-2 border-b-orange' : ''
                } border-2 border-white text-paragraph capitalize hover:border-2 hover:border-b-orange`}
                key={idx}
              >
                <a href='#'>{el}</a>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderContainer>
          <div
            className='badge  relative cursor-pointer'
            onClick={() => toggleCart()}
          >
            <i className=' ri-shopping-cart-2-line  text-4xl paragraph z-20 shrink-0 '></i>
            <span className='absolute bg-orange text-white px-4 py-1 rounded-full text-md left-[0.8rem] top-[-1rem]'>
              {cart_details.length}
            </span>
          </div>
          <Image
            src={Avatar}
            alt=' User Image'
            className='h-10 shrink-0 object-contain'
          />
        </HeaderContainer>
        <div
          className={`${
            toggle_cart ? 'hidden' : ''
          }  container absolute top-[9rem] right-0 md:w-[40rem] z-30 `}
        >
          <div
            className={` bg-white  container py-8 overflow-auto grid gap-10 shadow-2xl`}
          >
            <h5 className='text-black text-3xl font-bold '>Cart</h5>

            {cart_details.length === 0 && (
              <h6 className='text-center text-2xl font-bold text-paragraph'>
                Your cart is empty.
              </h6>
            )}

            {cart_details.length > 0 &&
              cart_details.map((el: ICartDetails, idx) => (
                <Cart {...el} key={idx} />
              ))}

            {cart_details.length > 0 && (
              <ButtonAddtoCart className='place-self-end'>
                Checkout
              </ButtonAddtoCart>
            )}
          </div>
        </div>
      </HeaderStyle>
      <nav
        className={`fixed lg:hidden  shadow-lg h-screen  top-0 z-20 ${
          !toggle ? 'w-[27rem]  ' : 'hidden'
        } bg-white`}
      >
        <div className='mt-10'>
          <i
            className='ri-close-line text-3xl ml-10 font-bold cursor-pointer'
            onClick={toggleNav}
          ></i>
          <ul className=' ml-10 flex flex-col mt-20 h-full'>
            {headerLinks.map((el, idx) => (
              <li className='py-4 text-2xl font-bold capitalize' key={idx}>
                <a href='#'> {el}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={` overlay ${!toggle ? 'overlay-active' : ''} `}></div>
    </>
  );
};

export default Header;
