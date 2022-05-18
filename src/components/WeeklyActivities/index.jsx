import { ReactNode, useEffect, useRef, useState } from 'react';
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
    TabList,
    Tabs,
    Tab,
    useInterval,
    useBoolean
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
    const tabsContainerRef = useRef(null)
    const tabsContainerWidth = tabsContainerRef?.current?.clientWidth
    const [currentActivitiesDay, setCurrentDay] = useState(0)
    const [tabsWidth, setTabsWidth] = useState(tabsContainerWidth)
    const [autoPlay, controlAutoPlay] = useBoolean(true)

    useEffect(() => {
        if(tabsContainerWidth)
            setTabsWidth(tabsContainerWidth)
    }, [tabsContainerWidth])

    useInterval(
        () => autoPlay && setCurrentDay((prev) => prev >= 6 ? 0 : prev+1), 
        5000
    )

    return (
        <Box py={12} mt={20}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
                ref={tabsContainerRef}
            >
                <CardWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" className='dark:text-white'>
                            Actividades
                        </Text>
                    </Box>
                    <Tabs index={currentActivitiesDay} isFitted>
                        <TabList 
                            overflowY="hidden"
                            sx={{
                                scrollbarWidth: 'none',
                                '::-webkit-scrollbar': {
                                display: 'none',
                                },
                            }}
                            width={tabsWidth < 600 ? `${tabsWidth}px` : 'auto'}>
                            {Object.keys(Week).map((day, index) => (
                                <Tab 
                                    onClick={() => {
                                        setCurrentDay(index)
                                        controlAutoPlay.off()
                                    }} 
                                    margin={1}>
                                    {day}
                                </Tab>
                            ))}
                        </TabList>
                    </Tabs>
                    <Box
                        // bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        margin='3'
                        borderBottomRadius={'xl'}
                        display='flex'
                        flexDirection={{base: 'column', md: 'row'}}
                        alignItems={{base: 'center', md: 'start'}}
                        >
                        {Object.values(Week)[currentActivitiesDay].map(({place, activities}) => (
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
                </CardWrapper>
            </Stack>
        </Box >
    );
}