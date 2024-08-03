import './App.css';
import Navbar from './components/navbar/Navbar';
import CreatePost from './pages/createPost/CreatePost';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom'
import SinglePost from './pages/singlePost/SinglePost';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/updatepost/:postID' element={<CreatePost />} />
        <Route path='/' element={<Home />} />
        <Route path='/:postID' element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
