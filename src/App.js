import Header from './components/header/Header';
import EducationAndCertificates from './components/education/EducationAndCertificates';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';


function App() {
  return (
    <main className='text-gray-400 bg-bluegray-900 body-font'>
      <Header/>
      <EducationAndCertificates/>
      <Skills/>
      <Experience/>
    </main>
  );
}

export default App;
