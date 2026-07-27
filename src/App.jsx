import React from 'react'
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
const App = () => {
  return (
    <div >
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
