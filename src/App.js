import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import QuizGame from './QuizGame';

function App() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">QUIZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Navbar>
      <QuizGame />
    </Container>
  );
}

export default App;
