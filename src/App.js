import React from 'react';
import { theme } from './theme/theme';
import {
  ChakraProvider, Flex, Box, Link, Button, Text, Heading, Divider, Container, Stack, 
  SimpleGrid, Tabs, TabList, Icon, TabPanels, Tab, Image } from '@chakra-ui/react';

const featureData = [
  {
    icon: <Icon />, // Replace with actual icons
    title: "HAND PICKED GUIDES"
  },
  {
    icon: <Icon />,
    title: "24/7 CUSTOMER SUPPORT"
  },
  {
    icon: <Icon />,
    title: "EVERY TOUR PRIVATE AND CUSTOMIZABLE"
  },
  {
    icon: <Icon />,
    title: "FLEXIBLE CANCELLATION"
  }
];



function App() {
  return (
    
    <ChakraProvider theme={theme}>   
      <Image image='https://github.com/mjbylak/emile-tour-app/blob/master/src/assets/LowPolyLuxor4.jpg' alt="Main Image Banner"> = </Image> 
      <Box bg="desertNile.2">
      <Tabs>
        <Flex as="nav" align="center" textStyle = '' justify="space-between" wrap="wrap" padding="1.5rem" bgGradient="linear(to-r, desertNile.2, desertNile.1)" color="white">
          {/* List of navigation TabPanels */}
          <TabList>
          <Tab href="#languages" padding="1rem">Languages</Tab>
          <Tab href="#locations" padding="1rem">Touring Locations</Tab>
          <Tab href="#reviews" padding="1rem">Reviews</Tab>
          <Tab href="#agency" padding="1rem">Agency Profile</Tab>
          <Tab href="#about" padding="1rem">About Me</Tab>
          <Tab href="#contact" padding="1rem">Contact Here</Tab>
          <Tab href="#quote" padding="1rem">Get a Quote</Tab>
          <Tab href="#bookings" padding="1rem">Available Bookings</Tab>
          <Tab href="#photos" padding="1rem">Photos</Tab>
          </TabList>
        </Flex>
        </Tabs>

        {/* Content Sections */}
        <Box id="languages" padding="1rem">
          <Heading variant="h2">Languages</Heading>
          <Text textStyle="body"> <justify>English German Arabic</justify></Text>
        </Box>
        
        <Box id="locations" padding="1rem">
          <Heading variant="h2">Touring Locations</Heading>
          {/* Content about touring locations */}
        </Box>

        <Box id="contact" padding="1rem">
          <Heading variant="h2">Contact Here</Heading>
          {/* Contact information */}
          <Text>WhatsApp: XXX-XXX-XXXX</Text>
          <Text>Email: tourguide@example.com</Text>
        </Box>

        <Box id="quote" padding="1rem">
          <Heading variant="h2">Get a Quote</Heading>
          <Button colorScheme="teal">Request a Quote</Button>
        </Box>

        <Box id="bookings" padding="1rem">
          <Heading variant="h2">Available Bookings</Heading>
          {/* Booking calendar or list */}
        </Box>

        <Box id="photos" padding="1rem">
          <Heading variant="h2">Photos</Heading>
          <Image src="path_to_photo.jpg" alt="A scenic tour location" />
          {/* Gallery of photos */}
        </Box>

      </Box>
      <Box backgroundColor="orange.100" py={10}> {/* Use appropriate colors from the theme */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} textAlign="center">
          {featureData.map((feature, index) => (
            <Box key={index}>
              <Box boxSize="50px" bg="orange.300" mx="auto" p={2} borderRadius="full"> {/* Placeholder for icon */}
                {feature.icon}
              </Box>
              <Text mt={2} fontWeight="bold">{feature.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box py={10} backgroundColor="orange.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            CUSTOMER TESTIMONIALS
          </Heading>
          <Divider my={6} />
          <Stack spacing={6}>
            <Box>
              <Image borderRadius="full" boxSize="100px" src="path-to-customer-image.jpg" alt="Customer" mx="auto" /> {/* Replace with actual image path */}
              <Text fontStyle="italic">"We've used your firm for several years, with tours in a number of international cities. We recently completed a trip that included 13 tours in 5 different countries. WITHOUT EXCEPTION, the tours were excellent and the guides thoroughly helpful, interesting, kind, and professional (and we tend to be picky). What a great record!"</Text>
              {/* Repeat the above <Box> for additional testimonials */}
            </Box>
          </Stack>
        </Container>
      </Box>
      </ChakraProvider>
  );
}

export default App;