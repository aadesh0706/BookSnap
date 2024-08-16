import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'

import Layout from './Layout.jsx'
import Notes from './pages/Notes/Notes.jsx'
import Pdf1 from './pages/Pdf/Pdf1.jsx'


import PdfContextProvider from './context/pdfContext/PdfContextProvider.jsx'
import NotesSems from './pages/NotesSem/NotesSems.jsx'
import NotesSubjects from './pages/NotesSubject/NotesSubjects.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import UnderDevelopment from './pages/UnderDevelopment/UnderDevelopment.jsx'

//import ScrollToTop from './components/ScrollToTop.js'

const router = createBrowserRouter(
  createRoutesFromElements(

      // <Route path='/' element={<Layout />}>
      //   <Route path='notes' element={<Notes />}>
      //     <Route path=':branch' element={<NotesSems />}>
      //       <Route path=':semester' element={<NotesSubjects />} />
      //     </Route>
      //   </Route>
      //   <Route path='pdf' element={<Pdf1 />} />
      // </Route>



    
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='notes' element={<Notes/>}/>
        {/* <Route path='sem/:semester'  */}
        {/* <Route path='notes/sem' element={<NotesSems/>} > */}
      <Route path='notes/:branch' element={<NotesSems/>} />
        {/* <Route path='notes/sem/:semester' element={<NotesSubjects/>} /> */}
      <Route path='notes/:branch/:semester' element={<NotesSubjects/>} />
      <Route path='pdf' element={<Pdf1/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='community' element={<UnderDevelopment/>}/>
      <Route path='shop' element={<UnderDevelopment/>}/>
    </Route>




    // <Route path='/' element={<Layout/>}>
    //   <Route path='notes' element={<Notes/>}/>
    //   <Route path='pdf' element={<Pdf1/>}/>
    // </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PdfContextProvider>
        <RouterProvider router = {router}/>
      </PdfContextProvider>
    </Provider>
  </React.StrictMode>
)


