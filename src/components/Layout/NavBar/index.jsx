import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Links = ['Actividades', 'Contactanos'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    width={'full'}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);
//transparent navbar
//bg-gradient-to-t from-transparent to-primary

export default function NavBar() {
  return (
    <Box 
      className=' absolute z-[1]' px={3} left={0} top={0} width={'full'} >
      <Flex h={32} alignItems={'center'} justifyContent={'flex-end'}
        width={'full'}>
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            className='font-bold text-white'
            display={{ base: 'none', md: 'flex' }}>
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}