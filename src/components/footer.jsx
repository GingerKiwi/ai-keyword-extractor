import { Box, Image, Text, Flex } from '@chakra-ui/react';
import logoOpenAI from '../assets/openai.png';

const footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logoOpenAI}/>
            <Text>
                Powered by OpenAI's GPT-3
            </Text>
        </Flex>
        
    </Box>
  )
}

export default footer