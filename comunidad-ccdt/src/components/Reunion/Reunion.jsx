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
        <Container maxW={'full'} p="12" bg={'#131313'}>
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
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="3" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(blue.500 1px, transparent 1px)',
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.7"
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
                        <Link >
                            <div className='text-white font-bold pb-20'>

                                Reuniones
                            </div>
                        </Link>
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
                        className='text-white flex justify-start'
                        fontSize="lg"
                    >
                        Domingo
                    </Text>
                    <Text
                        as="p"
                        marginTop="2"
                        // color={useColorModeValue('gray.700', 'white')}
                        className='text-white flex justify-start'
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