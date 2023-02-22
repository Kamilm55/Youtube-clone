import React from 'react';
import './App.css';
import Search from './features/Home/Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { Route ,Routes , BrowserRouter as Router  } from 'react-router-dom';
import HomePage from './features/Home/HomePage';
import WatchPage from './features/WatchPage/WatchPage';
import ChannelPage from './features/Channel/ChannelPage';
import ScrollToTop from './components/ScrollToTop';

const App:React.FC = () => {
 
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/watch/:id' element={<WatchPage/>} />
          <Route path='/channel/:id' element={<ChannelPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
