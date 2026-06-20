import './App.css'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import { Header } from './components/Header'
import Hero from './components/Hero'

function App() {


  return (
    <>
      <Header/>
      <Hero/>
      <div className='container d-flex justify-content-between gap-3'>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
