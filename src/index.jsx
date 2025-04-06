import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import StartPage from './pages/startpage/startpage';
import Register from './pages/register/register';
import Login from './pages/login/login';
import HomePage from './pages/home/homepage';
import Devices from './pages/devicesList/devicesList';
import DevicesSettings from './pages/devicesSettings/devicesSettings';
import Error404 from './pages/error/error404';
import Layout from './components/layout/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/devicesList" element={<Devices/>}/>
          <Route path="/devicesSettings:devicesSettingsId" element={<DevicesSettings/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
