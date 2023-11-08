import "./SkillListItem.css"
export default function SkillListItem({skill}){
    return (
    <div>


    <li className="SkillListItem"
    >
         {skill.name}
     <div className="level"> Level {skill.level}</div>
    </li>
    
    </div>
    )
}