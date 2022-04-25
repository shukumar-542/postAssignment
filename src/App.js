import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';
import Comment from './Components/Comment/Comment';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path={'/details/:postid'} element={<PostDetails/>}/>
       <Route path={'/comment/:commentId'} element={<Comment/>}/>

       <Route path='*' element={<NoMatch/>}/>


     </Routes>
   </BrowserRouter>
  );
}

export default App;
