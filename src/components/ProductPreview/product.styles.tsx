import tw from 'twin.macro';

export const ProductContainer = tw.section`
    relative
    lg:container
    mx-auto
    md:px-40
    xl:px-80
    lg:mt-8
    lg:flex
    lg:gap-24

`;

export const ProductSlide = tw.div`
  
`;

export const Previous = tw.img`
    absolute 
    top-[50%]
    ml-6
    py-4
    px-5 
    bg-white
    rounded-[50%]
    cursor-pointer
`;

export const Next = tw(Previous)`
    right-0
    mr-6
    
`;

export const CompanyTitle = tw.h2`
    py-8
    text-xl
    leading-7
    tracking-wide 
    font-bold 
    text-orange
    uppercase 
`;

export const ProductTitle = tw.h3`
    text-[3rem]
    font-bold
    leading-[3.8rem]
`;

export const Paragraph = tw.p`
    py-8 
    text-2xl 
    leading-10
`;

export const PriceContainer = tw.div`
    flex
    gap-8
    py-4
    items-center
    font-bold
    [> .price]:(text-5xl )
    [> .discount]:(
        px-4
        py-1
        text-2xl
        bg-paleOrange
        text-orange
        rounded-lg
        shadow-xl)

    [> .discounted_price]:(
        text-2xl
        text-darkGrayishBlue)
`;

export const ButtonAddtoCart = tw.button`
flex 
items-center 
justify-center 
py-6 
mx-auto 
text-center 
text-2xl 
font-bold  
bg-orange 
rounded-2xl 
shadow-lg 
w-full
text-white`;
