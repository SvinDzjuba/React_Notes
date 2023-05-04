import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/edit-post/:id' element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
