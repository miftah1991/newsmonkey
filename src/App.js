import Nav from './Components/Nav';
import React,{useState} from 'react'
import NewsList from './Components/NewsList';
import LoadingBar  from 'react-top-loading-bar'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const pagesize = 5;
  const [progress, setProgress] = useState(10)
  return (
    <BrowserRouter>
      <Nav />
      <LoadingBar height={3} color='#f11946' progress={progress}  />
      <Routes>
        <Route path="/" element={<NewsList pagesize={pagesize} setProgress={setProgress} />} />
        <Route path="/business" element={<NewsList pagesize={pagesize} setProgress={setProgress} key="business"  category="business" />} />
        <Route path="/entertainment" element={<NewsList pagesize={pagesize} setProgress={setProgress} key="entertainment"  category="entertainment" />} />
        <Route path="/health" element={<NewsList pagesize={pagesize} setProgress={setProgress} key="health"  category="health" />} />
        <Route path="/sports" element={<NewsList pagesize={pagesize} setProgress={setProgress} key="sports"  category="sports" />} />
        <Route path="/technology" element={<NewsList pagesize={pagesize} setProgress={setProgress} key="technology"  category="technology" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
