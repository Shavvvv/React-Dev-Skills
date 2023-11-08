import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SkillList from './SkillList'
import Form from './form'
import './App.css'

/*const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];
*/
function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);
  const[showSkills,setShowSkills]= useState(true)
  
  return (
   <div className='App'>
   <h1> React Dev Skills</h1>
   <SkillList skills={skills}/>
   <hr />
   <Form/>
   </div>
  )
}


export default App
