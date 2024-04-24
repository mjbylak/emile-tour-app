import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Flex,
  Box,
  Link,
  Button,
  Text,
  Heading,
  Image
} from '@chakra-ui/react';



// Theme customization options
const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: ['48px', '72px'],
          fontWeight: 'bold',
          lineHeight: '110%',
          letterSpacing: '-2%',
          color: 'desertNile.4', // Assuming you want to use Pharaoh Gold
        },
        h2: {
          fontSize: ['36px', '48px'],
          fontWeight: 'semibold',
          lineHeight: '110%',
          letterSpacing: '-1%',
          color: 'desertNile.4', // Corrected color reference
        },
      }
    },
    Text: {
      baseStyle: {
        fontSize: ['16px', '18px'],
        fontWeight: 'normal',
        lineHeight: 'normal',
        color: 'desertNile.3', // Assuming Papyrus White is desired
      }
    },
  },
  colors: {
    brand: {
      1: '#1a365d', // Dark Blue
      2: '#153e75', // Medium Blue
      3: '#2a69ac', // Light Blue
    },
    desertNile: {
      1: '#c9a86a', // Sandstone
      2: '#214761', // Nile Blue
      3: '#f8f4e3', // Papyrus White
      4: '#f9a825', // Pharaoh Gold
    },
    historicalMonuments: {
      1: '#f0e6d2', // Limestone
      2: '#a67c52', // Hieroglyphics Brown
      3: '#748c69', // Oasis Green
      4: '#e35d6a', // Sunset Red
    },
    ancientArtifacts: {
      1: '#ede0d4', // Artifact Cream
      2: '#2e8b57', // Scarab Green
      3: '#4169e1', // Royal Blue
      4: '#b31b1b', // Carnelian Red
    },
    egyptianNight: {
      1: '#2c3e50', // Midnight Blue
      2: '#f7f7f7', // Moonstone
      3: '#e0c97e', // Pyramid Gold
      4: '#746855', // Sphinx Stone
    },
  },
});


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="desertNile.2">
        <Flex as="nav" align="center" textStyle = '' justify="space-between" wrap="wrap" padding="1.5rem" bgGradient="linear(to-r, desertNile.2, desertNile.1)" color="white">
          {/* List of navigation links */}
          <Link href="#languages" padding="1rem">Languages</Link>
          <Link href="#locations" padding="1rem">Touring Locations</Link>
          <Link href="#reviews" padding="1rem">Reviews</Link>
          <Link href="#agency" padding="1rem">Agency Profile</Link>
          <Link href="#about" padding="1rem">About Me</Link>
          <Link href="#contact" padding="1rem">Contact Here</Link>
          <Link href="#quote" padding="1rem">Get a Quote</Link>
          <Link href="#bookings" padding="1rem">Available Bookings</Link>
          <Link href="#photos" padding="1rem">Photos</Link>
        </Flex>

        {/* Content Sections */}
        <Box id="languages" padding="1rem">
          <Heading variant="h2">Languages</Heading>
          <Text textStyle="body">English<br />
          German<br />
          Arabic</Text>
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
    </ChakraProvider>
  );
}

export default App;