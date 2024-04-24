import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({

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