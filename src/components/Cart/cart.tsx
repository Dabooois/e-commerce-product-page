import React from 'react';
import ImageProduct1 from '../../assets/images/image-product-1.jpg';

export interface ICartDetails {
  src: string;
  name: string;
  amount: number;
  quantity: number;
}

const Cart = (props: ICartDetails) => {
  const { src, name, amount, quantity } = props;
  const total = amount * quantity;
  return (
    <div className='flex gap-8 items-center '>
      <img src={src} alt={name} className='h-20 w-auto rounded-lg' />
      <div className='flex flex-col'>
        <h5 className=' text-paragraph text-xl tracking-wide  font-bold '>
          {name}
        </h5>
        <p className='text-xl flex gap-2'>
          <span className=''>${amount}</span>
          <span>x</span>
          <span>{quantity}</span>
          <span className='font-bold'>${total}</span>
        </p>
      </div>
      <i className='text-2xl ri-delete-bin-line ml-auto'></i>
    </div>
  );
};

export default Cart;
