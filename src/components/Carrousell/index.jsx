import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import * as images from '../../assets/carrousel'

// Settings for the slider
const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
};


export default function Carrousell({images}) {
    return (
        <Box
            left={0}
            height={'700px'}
            width={'full'}
            overflow={'hidden'}
        >
            <Slider {...settings}>
                {images?.map((url, index) => (
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
            </Slider>
            {/* <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10, md: 28 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            className='text-white'
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                zIndex: -1,
                            }}>
                            !Bienvenido
                        </Text>
                        <br />
                        <Text as={'span'} className='text-blue-500 italic' position={'relative'} >
                            A nuestra Casa!
                        </Text>
                    </Heading>
                    <Text className='text-black font-bold dark:text-white' position={'relative'}>
                        Snippy is a rich coding snippets app that lets you create your own
                        code snippets, categorize them, and even sync them in the cloud so
                        you can use them anywhere. All that is free!
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                    </Stack>
                </Stack>
            </Stack> */}
        </Box >
    );
}