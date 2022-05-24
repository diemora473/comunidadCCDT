// import React from 'react';
// import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// // And react-slick as our Carousel Lib
// import Slider from 'react-slick';

// // Settings for the slider
// const settings = {
//     dots: true,
//     arrows: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

// export default function Carrousell() {
//     // As we have used custom buttons, we need a reference variable to
//     // change the state
//     const [slider, setSlider] = React.useState();

//     // These are the breakpoints which changes the position of the
//     // buttons as the screen size changes
//     const top = useBreakpointValue({ base: '90%', md: '50%' });
//     const side = useBreakpointValue({ base: '30%', md: '10px' });

//     // These are the images used in the slide
//     const cards = [
//         'https://imborrable.com/wp-content/uploads/2021/04/fotos-gratis-de-stock-1.jpg',
//         'https://portfolio-diegomorales.web.app/static/media/Diego.fdf4135e03b0d284b4ce.jpeg',
//         'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
//         "https://s2.glbimg.com/mme6i6KCZk22tUJEO3tOnThzml8=/e.glbimg.com/og/ed/f/original/2020/06/11/content-1591695033-underwater-caves-by-atvictordevalles-spain.jpg"
//     ];

//     return (
//         <Box
//             className='w-full w-96  rounded-lg'
//             position={'relative'}
//             height={'300px'}
//             width={'550px'}

//             // justifyContent={'center'}
//             overflow={'hidden'}>
//             {/* CSS files for react-slick */}
//             <link
//                 rel="stylesheet"
//                 // className='slick-list slick-slider'
//                 type="text/css"
//                 charSet="UTF-8"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//             />
//             <link
//                 rel="stylesheet"
//                 type="text/css"
//                 href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//             />
//             {/* Left Icon */}
//             <IconButton
//                 aria-label="left-arrow"
//                 colorScheme="messenger"
//                 borderRadius="full"
//                 position="absolute"
//                 left={side}
//                 top={top}
//                 transform={'translate(0%, -50%)'}
//                 zIndex={2}
//                 onClick={() => slider?.slickPrev()}>
//                 <BiLeftArrowAlt />
//             </IconButton>
//             {/* Right Icon */}
//             <IconButton
//                 aria-label="right-arrow"
//                 colorScheme="messenger"
//                 borderRadius="full"
//                 position="absolute"
//                 right={side}
//                 top={top}
//                 transform={'translate(0%, -50%)'}
//                 zIndex={2}
//                 onClick={() => slider?.slickNext()}>
//                 <BiRightArrowAlt />
//             </IconButton>
//             {/* Slider */}
//             <Slider {...settings} ref={(slider) => setSlider(slider)}>
//                 {cards.map((url, index) => (
//                     <Box
//                         className='bg-fixed lg:w-96'
//                         key={index}
//                         // height={'2xl'}
//                         height={'80'}
//                         position="relative"
//                         backgroundPosition="center"
//                         backgroundRepeat="no-repeat"
//                         backgroundSize="cover"

//                         backgroundImage={`url(${url})`}
//                     />
//                 ))}
//             </Slider>
//         </Box>
//     );
// }

import React from 'react';
import { Box, IconButton, useBreakpointValue, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Footers from '../Footers/Footers'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import ccdt from '../images/ccdt.jpg'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carrousell() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState()

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = [

        'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ];
    return (

        <Box
            left={0}
            position={'absolute'}
            height={'400px'}
            width={'full'}
            // pr={2}
            overflow={'hidden'}

        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box
                        className='bg-fixed lg:w-96'
                        key={index}
                        height={'2xl'}
                        width={'full'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${url})`}
                    />
                ))}
                {/* <Footers /> */}
            </Slider>
        </Box >
    );
}