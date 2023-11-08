import SkillListItem from "./SkillListItem"

export default function SkillList({skills}){

    const skillsListItems = skills.map((s,idx)=><SkillListItem skill={s} key={idx}/>)
    return(
        <ul>
            {skillsListItems}
        </ul>
    )
}