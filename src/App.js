import React from 'react'
import Footer from './components/Footer'
import BookForm from './components/BookForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <main>
    <div className='container'>
    <BookForm/>

    </div>
    </main>
    <Footer/>

    </div>
  )
}

export default App