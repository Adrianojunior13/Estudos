import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {
  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample name="Adriano" idade={30}  />
    </>
  );
}

export default App

