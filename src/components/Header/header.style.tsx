import tw from 'twin.macro';

export const HeaderStyle = tw.header`
    relative
    container
    2xl:max-w-[140rem]
    mx-auto
    py-8
    px-12
    sm:px-0
    lg:py-10
    lg:px-4
    flex
    flex-row
    justify-between
    items-center
    gap-8
    lg:gap-16
`;

export const HeaderTitle = tw.h1`
    font-bold
    text-title

`;

export const Image = tw.img`
    w-auto
    shrink-0
    leading-10
    cursor-pointer
    hover:(
        outline
        outline-offset-2
        outline-orange
        rounded-full)
`;

export const HeaderContainer = tw.div`
    flex 
    items-center
    justify-center
    gap-8
    lg:gap-16
`;
