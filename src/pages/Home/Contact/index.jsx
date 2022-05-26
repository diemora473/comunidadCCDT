import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Button,
    Center
} from '@chakra-ui/react';
import { ImWhatsapp } from 'react-icons/im';

export default function ContactUs() {
    return (
        <Container maxW={'full'} py={12} >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>

                    <Heading className='font-bold dark:text-white'>Contactate con Nosotros!</Heading>
                    <Text color={'gray.500'} fontSize={'lg'} className='font-bold dark:text-white'>
                        O mejor aun, por que no vienes a visitarnos?
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Text color={'gray.500'} fontSize={'lg'}>
                        </Text>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            <div className='font-bold text-black dark:text-white'>

                                Comunidad Cristiana Don Torcuato
                            </div>

                            <div className='pt-4'>
                                Libertad 3248, B1618 Tigre, Provincia de Buenos Aires
                            </div>
                            <div className='pt-8'>
                                Nos encantaria verte por nuestra casa, donde seras bienvenido, podras contar con nuestro apoyo, y te sentiras como en casa, para alabar el nombre de nuestro Señor.

                                Tambien nos puedes enviar un Mensaje, apretando la opcion de abajo!.
                            </div>
                        </Text>

                        <Button
                            w={'full'}
                            colorScheme={'whatsapp'}
                            className='dark:bg-white dark:text-black dark:hover:bg-white '
                            leftIcon={<ImWhatsapp />}
                            onClick={() => window.open('https://web.whatsapp.com/send?phone=5491132835215&text=Hola%20Comunidad%20Cristiana%20Don%20Torcuato!', '_blank')}
                        >
                            <Center>
                                <Text>¡Envianos un mensaje!</Text>
                            </Center>
                        </Button>
                    </Stack>
                </Stack>
                <Flex>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.9609296952624!2d-58.66169990194631!3d-34.487913999494104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3c0a4d3594d%3A0x3cf0283e860d6bf9!2sIglesia%20Comunidad%20Cristiana%20Don%20Torcuato!5e0!3m2!1ses!2sar!4v1650316523950!5m2!1ses!2sar" width="700" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myFrame" className="rounded-lg flex justify-center"/>
                </Flex>
            </SimpleGrid>
        </Container>
    );
}