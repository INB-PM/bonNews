import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;

  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }

    return (
      <div>
        <Router>
          <Navbar />
          {/* <News setProgress={setProgress} pageSize={pageSize}{5} country="in" category="science"/> */}

          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
      />
          
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key= "home" pageSize={pageSize} country="in" category="general" />} />
            <Route path="/science" element={<News setProgress={setProgress} key= "science" pageSize={pageSize} country="in" category="science" />} />
            <Route path="/business" element={<News setProgress={setProgress} key= "business" pageSize={pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} key= "entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} key= "health" pageSize={pageSize} country="in" category="health" />} />
            <Route path="/sports" element={<News setProgress={setProgress} key= "sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} key= "technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}
 export default App;