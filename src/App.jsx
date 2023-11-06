import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from './SkillList'
import Form from './form'
import './App.css'

function App() {
  
  return (
   <div className='App'>
   <h1> React Dev Skills</h1>
   <SkillList/>
   <hr />
   <Form/>
   </div>
  )
}


export default App
