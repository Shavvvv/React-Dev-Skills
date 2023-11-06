import SelectOptions from "../SelectOptions"
export default function NewSkillForm(){
return(
<>
    <label htmlFor="">Skill</label>
    <input type="text" />
    <label htmlFor="">Level</label>
    <select name="" id="">
        <SelectOptions/>
    </select>
    <button>Submit</button>
</>
)

}
