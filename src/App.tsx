import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
