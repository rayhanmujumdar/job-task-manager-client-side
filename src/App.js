import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home/Home';
import AddTask from './Component/Pages/AddTask/AddTask';
import TaskManager from './Component/Pages/TaskManager/TaskManager';
import Header from './Component/Shared/Header/Header';
import { Toaster } from 'react-hot-toast';
import MyTask from './Component/Pages/MyTask/MyTask';
import NotFound from './Component/Shared/NotFound/NotFound';
import Login from './Component/Pages/Login/Login';
import Footer from './Component/Shared/Footer/Footer';
import RequiredAuth from './Component/Shared/RequiredAuth/RequiredAuth';
import About from './Component/Pages/About/About';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add-task' element={
          <RequiredAuth>
            <AddTask></AddTask>
          </RequiredAuth>
        }>
          <Route index element={<MyTask></MyTask>}></Route>
        </Route>
        <Route path='/task-manage' element={
          <RequiredAuth>
            <TaskManager></TaskManager>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default App;
