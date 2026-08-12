import { Routes, Route} from 'react-router'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'


function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Hello World</h1>} />
      <Route path='/create-post' element={<CreatePost/>} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
  )
}

export default App
