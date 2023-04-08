import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import PassTimes from './routes/PassTimes'
import Major from './routes/Major'


function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/PassTimes' element={<PassTimes />} />
            <Route path='/Major' element={<Major />} />
        </Routes>
    </>
  );
}

export default App;
