import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date?.toLocaleDateString()}</Text>
        </HStack>
    );
};

const ArticleList = () => {
    return (
        <Container maxW={'full'} p="12" bg={'#131313'} className='dark:bg-blue-800'>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">

                        <Image
                            borderRadius="lg"
                            src={
                                'https://img.freepik.com/foto-gratis/vida-cristiana-crisis-oracion-dios_1150-12938.jpg?w=2000'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(blue.400 1px, transparent 1px)',
                                'radial(blue.300 1px, transparent 1px)'
                            )}
                            // className='radial(blue-400 1px, transparent 1px)
                            // radial(blue.300 1px, transparent 1px)'
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"

                    marginTop={{ base: '1', sm: '0' }}>
                    {/* <BlogTags tags={['Engineering', 'Product']} /> */}
                    <Heading>
                        <div className='text-white font-bold pb-14'>

                            Reuniones
                        </div>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        // color={useColorModeValue('gray.700', 'white')}
                        className='text-white'
                        fontSize="lg">
                        Estamos encantados de poder recibirte dentro de nuestra Casa, Tenemos dispoibles horarios de reuniones, para que puedas acercarte, y alabar juntos al señor!
                    </Text>
                    <Text
                        as="p"
                        marginTop="2"
                        // color={useColorModeValue('gray.700', 'white')}
                        className='text-white flex justify-start pt-5 pl-10'
                        fontSize="lg"
                    >
                        Domingo
                    </Text>
                    <Text
                        as="p"
                        marginTop="2"
                        // color={useColorModeValue('gray.700', 'white')}
                        className='text-white flex justify-start pt-5 pl-10'
                        fontSize="lg"
                    >
                        Sabado
                    </Text>

                </Box>
            </Box>

        </Container>
    );
};

export default ArticleList;