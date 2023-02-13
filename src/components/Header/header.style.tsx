import tw from 'twin.macro';

export const HeaderStyle = tw.header`
    relative
    flex
    flex-row
    justify-between
    items-center
    py-8
    lg:py-10
    gap-8
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
`;
