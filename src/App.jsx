import { Container, Box } from '@chakra-ui/react'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


const App = () => {
  return (
    <Box bg = 'blue.600' color='white' height='100vh' paddingTop={ 130 }>
      <Container maxW='3xl' centerContent>
        <Header></Header>
        <Footer></Footer>
      </Container>
      
    
    </Box>
    
  )
}

export default App