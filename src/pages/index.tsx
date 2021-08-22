import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      
      <Box
        bgImage="url('/images/banner-background.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={isWideVersion ? "335" : "163"}
      >
        <Flex
          maxW="1240"
          h="100%"
          mx="auto"
          px={["4", "10"]}
          direction="column" 
          align="flex-start" 
          justify="center"
          pos="relative"
        >
          <Heading 
            as="h1"
            fontWeight="500"
            fontSize={["xl", "4xl"]}
            color="gray.50"
            mb={["2", "5"]}
          >
            6 Continents, <Divider as="br" /> infinity possibilities.
          </Heading>
          <Text
            maxW="524"
            fontSize={["sm", "xl"]}
            color="gray.100"
          >
            It"s time to take the trip you"ve always dreamed of on paper.
. 
          </Text>
          
          {isWideVersion && (
            <Image 
              pos="absolute"
              right="0"
              bottom="-35"
              src="/icons/airplane-icon.svg" 
              alt="Travel" 
            />
          )}
        </Flex>
      </Box>
    
      <Box
        maxW="1240"
        mx="auto"
        mt={["9", "24"]}
        mb={["6", "10"]}
      >
        <Flex 
          px={["12", "10"]} 
          mb={["9", "20"]} 
          justify="space-between" 
          wrap={isWideVersion ? "nowrap" : "wrap"}
        >
          <TravelTypes title="Nightlife">
            <Image src="/icons/cocktail-icon.svg" maxW="85" alt="Nightlife" />
          </TravelTypes>

          <TravelTypes title="Beach">
            <Image src="/icons/surf-icon.svg" maxW="85" alt="Beach" />
          </TravelTypes>

          <TravelTypes title="Modern">
            <Image src="/icons/building-icon.svg" maxW="85" alt="Modern" />
          </TravelTypes>

          <TravelTypes title="Classic">
            <Image src="/icons/museum-icon.svg" maxW="85" alt="Classic" />
          </TravelTypes>

          <TravelTypes title="and more..." isLastChild={true}>
            <Image src="/icons/earth-icon.svg" maxW="85" alt="More" />
          </TravelTypes>
        </Flex>
          
        <Center w="90px" mx="auto" borderTopWidth="2px" borderColor="gray.600"></Center>

        <Box>
          <Heading 
            py={["6", "14"]}
            fontWeight="normal"
            fontSize={["xl", "4xl"]}
            textAlign="center"
            lineHeight={["30px", "3.375rem"]}
          >
            Let's go? <Divider as="br" /> Chose you continent
          </Heading>

          <Box
            w="100%"
            h={["250", "450"]}
          >
            <Slide />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
