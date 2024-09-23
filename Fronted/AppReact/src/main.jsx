import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import store from './store/store.js';

import PdfContextProvider from './context/pdfContext/PdfContextProvider.jsx';
import Layout from './Layout.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Notes from './pages/Notes/Notes.jsx';
import NotesSems from './pages/NotesSem/NotesSems.jsx';
import NotesSubjects from './pages/NotesSubject/NotesSubjects.jsx';
import Pdf1 from './pages/Pdf/Pdf1.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import UnderDevelopment from './pages/UnderDevelopment/UnderDevelopment.jsx';

import { ClerkProvider } from '@clerk/clerk-react'; // Import ClerkProvider
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute component

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route 
        path='notes' 
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='notes/:branch' 
        element={
          <ProtectedRoute>
            <NotesSems />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='notes/:branch/:semester' 
        element={
          <ProtectedRoute>
            <NotesSubjects />
          </ProtectedRoute>
        } 
      />
      <Route path='pdf' element={<Pdf1 />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='community' element={<UnderDevelopment />} />
      <Route path='shop' element={<UnderDevelopment />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <Provider store={store}>
        <PdfContextProvider>
          <RouterProvider router={router} />
        </PdfContextProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
