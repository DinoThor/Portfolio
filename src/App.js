import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import EducationAndCertificates from './components/education/EducationAndCertificates';
import Skills from './components/skills/Skills';


function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      {/* <CustomNavbar/> */}
      <Header/>
      <EducationAndCertificates/>
      <Skills/>
    </main>
  );
}

export default App;
