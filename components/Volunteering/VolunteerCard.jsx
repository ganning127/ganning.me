import { Box, Button, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
export const VolunteerCard = (props) => (
    <Box bg="black" color="white" maxW="300px" align="center" mx="auto" p="3" className="border-solid border-2 border-light-blue rounded-md">
        <Text fontSize='2xl' fontWeight={800} align="center" className="text-light-purple">{props.position}</Text>
        <Text fontSize='lg' fontWeight={500} align="center" className="text-light-purple">{props.org}</Text>
        <Text fontSize="md" fontWeight={600} my="4">
            {props.desc}
        </Text>

    </Box >
)