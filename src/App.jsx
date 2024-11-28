import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import DashBoard from './components/DashBoard';
import TaskList from './components/TaskList';

export default function App() {
  const [isLogin, setIsLogin] = React.useState(false)
  const [selectedTab,setSelectedTab]=React.useState('')
  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}  setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
      {!isLogin && <SignIn isLogin={isLogin} setIsLogin={setIsLogin} setSelectedTab={setSelectedTab}/>}
     {selectedTab==='DashBoard' && <DashBoard/>}
     {selectedTab==='TaskList' && <TaskList/>}
    </div>
  );
}