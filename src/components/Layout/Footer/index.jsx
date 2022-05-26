import {
    Box,
    Container,
    SimpleGrid,
    Text,
    Flex,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../../assets/icons';
import logo from '../../../assets/logo.png'

const Logo2 = () => (
    <div className=' flex font-bold '>
        <img
            src={logo} alt='CCDT'
            className='object-cover h-10 w-10 '
        />
        <div className='py-4 pl-2'>
            Comunidad Cristiana Don Torcuato
        </div>
    </div>
);

const socialMedia = [
    {icon: InstagramIcon, url: 'https://www.instagram.com/comunidadcdt/?hl=es-la', alt: 'Instagram social icon'},
    {icon: FacebookIcon, url: 'https://www.facebook.com/Comunidad-Cristiana-Don-Torcuato-353473925273593/', alt: 'Facebook social icon'},
    {icon: YoutubeIcon, url: 'https://www.youtube.com/channel/UC4LN7Tzs4_tf1EC-OkQZBow', alt: 'Youtube social icon'},
]

export default function Footer() {
    return (
        <Box
            className='bg-white'
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container maxW={'full'} py={5} px={5} className='flex justify-center' >
                <SimpleGrid columns={{ base: 3, sm: 2, md: 3 }} spacing={8} className='flex justify-center' >
                    {socialMedia.map(({icon, url, alt}) => (
                        <Button variant={'link'} onClick={() => window.open(url, '_blank')} >
                            <img src={icon} alt={alt}/>
                        </Button>
                    ))}
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo2 />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 Comunidad Cristiana Don Torcuato. Todos los derechos reservados
                </Text>
            </Box>
        </Box >
    );
}