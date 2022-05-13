import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import logo from '../images/logo.png'
import { BsInstagram } from 'react-icons/bs'

const Logo2 = (props: any) => {
    return (
        <div >

            <div className=''>
                <div className=' flex font-bold '>

                    <img
                        src={logo} alt='CCDT'
                        className='object-cover h-10 w-10 '
                    />
                    <div className='py-4 pl-2'>

                        Comunidad Cristiana Don Torcuato
                    </div>
                </div>

            </div>

        </div >
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithLogoCentered() {
    return (
        <Box
            // bg={useColorModeValue('slate.600', 'gray.900')}
            className='bg-white'
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container maxW={'full'} py={5} px={5} className='flex justify-center' >
                <SimpleGrid columns={{ base: 3, sm: 2, md: 3 }} spacing={8} className='flex justify-center' >

                    <div >

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </div>
                    <div className='mr-2'>

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </div>
                    <div className=''>

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg>
                    </div>
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