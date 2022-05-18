import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home/Home';
import AddTask from './Component/Pages/AddTask/AddTask';
import TaskManager from './Component/Pages/TaskManager/TaskManager';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add-task' element={<AddTask></AddTask>}></Route>
        <Route path='/task-manager' element={<TaskManager></TaskManager>}></Route>
      </Routes>
    </div>
  );
}

export default App;
