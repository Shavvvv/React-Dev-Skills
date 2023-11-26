import { useState } from "react";
import NewSkillForm from "./NewSkillForm"

export default function Form( {addSkill} ) {
    const [newSkill, setNewSkill] = useState({
        name: '',
        level:''
    })

 

    function handleAddSkill(evt) {
        evt.preventDefault();
         addSkill(newSkill)
        setNewSkill({
            name: '',
            level:''
        })
       
    }




return(
    <form onSubmit={handleAddSkill}>
        <NewSkillForm setNewSkill={setNewSkill } />
    </form>
)

}