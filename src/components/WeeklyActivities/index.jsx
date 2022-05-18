import { ReactNode, useState } from 'react';
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
import Week from './activities.json'

function CardWrapper({ children }) {
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

export default function WeeklyActivities() {
    const [currentActivitiesDay, setCurrentDay] = useState('Lunes')
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
                <CardWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" className='dark:text-white'>
                            Actividades
                        </Text>
                    </Box>
                    <Box
                        // bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        margin='3'
                        borderBottomRadius={'xl'}
                        display='flex'
                        flexDirection={{base: 'column', md: 'row'}}
                        >
                        {Week[currentActivitiesDay].map(({place, activities}) => (
                            <List spacing={3} marginTop={{base: '10', md: '0'}} textAlign="start" px={12}>
                                <Text fontWeight="500" fontSize="1xl" className='dark:text-white'>
                                    {place}
                                </Text>
                                {activities.map((item) => (
                                    <ListItem>
                                        <div className='dark:text-white'>
                                            <ListIcon as={FaCheckCircle} color="green.500" />
                                            {item}
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        ))}
                    </Box>
                    <VStack
                        // bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}
                        overflowX={{base:'auto'}}
                        >
                        <List spacing={3}  px={12}>
                            {Object.keys(Week).map((day) => (
                                <Button onClick={() => setCurrentDay(day)} margin={1}>
                                    {day}
                                </Button>
                            ))}
                        </List>
                    </VStack>
                </CardWrapper>
            </Stack>
        </Box >
    );
}