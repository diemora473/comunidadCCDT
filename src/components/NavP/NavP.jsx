import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function ThreeTierPricing() {
    return (
        <Box py={12} mt={20}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" className='dark:text-white'>
                    !Queremos conocerte!
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Ponte en contacto con nosotros de la siguientes maneras!
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" className='dark:text-white'>
                            Mensajeria
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                Podes escribirnos a
                            </Text>
                        </HStack>
                        <HStack justifyContent="center">
                            <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                nuestro Whatsapp.
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        // bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <div className='dark:text-white'>

                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Mandanos tu pedido de oracion.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Te llegaran las ultimas noticias.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Podremos estar en contacto.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Estamos para ayudarte.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    5TB Lorem, ipsum dolor.
                                </div>
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme={'blue'}
                                className='dark:bg-green-400 dark:hover:bg-green-500'
                            >
                                <div className='dark:text-white '>

                                    Ver Mas!
                                </div>
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('blue.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl"
                                className='dark:bg-green-400 dark:text-white'>

                                Mejor Opcion
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl" className='dark:text-white'>
                                Conoce nuestra casa
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                    Cuentanos tu testimonio,
                                </Text>
                            </HStack>
                            <HStack justifyContent="center">
                                <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                    Queremos ayudarte.
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            // bg={useColorModeValue('gray.50', 'gray.700')}
                            className='dar:bg-blue-700'
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <div className='dark:text-white'>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Gente dispuesta a ayudarte.

                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className='dark:text-white'>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Podes acercarte cuando quieras.
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className='dark:text-white'>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Seras bienvenido.
                                    </div>
                                </ListItem>

                                <ListItem>
                                    <div className='dark:text-white'>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Podras conocer nuestra casa.
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div className='dark:text-white'>
                                        <ListIcon as={FaCheckCircle} color="green.500" />
                                        Estamos para escucharte.
                                    </div>
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="blue" className='dark:bg-green-400
                                dark:hover:bg-green-500'>
                                    <div className='dark:text-white '>

                                        Ver Mas!
                                    </div>
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" className='dark:text-white'>
                            Siguenos!
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                ¿Te perdiste de algo?
                            </Text>
                        </HStack>
                        <HStack justifyContent='center'>
                            <Text fontSize="xl" color="gray.500" className='dark:text-white'>
                                Mira nuestras reuniones
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        // bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <div className='dark:text-white'>

                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Estamos en redes sociales.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Tenemos canal de Youtube.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Enterate de las ultimas noticias.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Mira nuestras reuniones Online.
                                </div>
                            </ListItem>
                            <ListItem>
                                <div className='dark:text-white'>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    .
                                </div>
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme={'blue'} className='dark:bg-green-400 dark:hover:bg-green-500'>
                                Ver Mas!
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box >
    );
}