import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Jobs, { jobsLoader } from './Pages/Jobs'
import RootLayout from './layout/RootLayout'
import ContactLayout from './components/ContactLayout'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import JobError from './components/JobError'

function App() {
  

  const router=createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>

        <Route index element={<Home/>} />

        <Route path='prodcuts' element={<Products/>} />

        <Route path='about' element={<About/>} />
        
        <Route path='contact' element={<ContactLayout/>}>
          <Route path='info' element={<ContactInfo/>}/>
          <Route path='form' element={<ContactForm/>}/>
          <Route/>
        </Route>

        <Route path='jobs' element={<JobsLayout/>} errorElement={<JobError/>} >
          <Route index element={<Jobs/>} loader={jobsLoader} />
          <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader} />
        </Route>

        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
