import { useState } from "react"
import SelectOptions from "./SelectOptions"
import "./NewSkillForm.css"
export default function NewSkillForm({setNewSkill}) {


    const [formData, setFormData] = useState({
        name: '',
          level:'2'
      })

    function handleChange(evt) {
        const newFormData = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(newFormData)
        setNewSkill(formData)
       console.log(formData)
    }

return(
<div className="NewSkillForm" > 
    <label htmlFor="">Skill</label>
        <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" />
    <label htmlFor="">Level</label>
        <select
            required
            name="level"
            value={formData.level}
            onChange={handleChange}    >
        <SelectOptions/>
    </select>
    <button>Submit</button>
</div>
)

}
