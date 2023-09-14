import {userState} from 'react';
import { TextArea, Button, useToast } from '@chakra-ui/react';

const TextInput = () => {
    const [text, setText] = userState('');
    const submitText = () => {
        console.log(text);
    }

  
    return (
    <>
        <TextArea
        bg='blue.400'
        color='white'
        paddingTop={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
        >
            <Button
                bg='blue.500'
                color='white'
                marginTop={4}
                width='100%'
                _hover={{ bg: 'blue.700' }}
                onClick={submitText}
            >
                Extract Keywords
            </Button>
        </TextArea>
    </>
  )
}

export default TextInput