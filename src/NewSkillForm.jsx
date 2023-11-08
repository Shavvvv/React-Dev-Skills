import SelectOptions from "./SelectOptions"
import "./NewSkillForm.css"
export default function NewSkillForm(){
return(
<div className="NewSkillForm" > 
    <label htmlFor="">Skill</label>
    <input type="text" />
    <label htmlFor="">Level</label>
    <select name="" id="">
        <SelectOptions/>
    </select>
    <button>Submit</button>
</div>
)

}
