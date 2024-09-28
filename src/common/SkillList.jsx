import React from 'react'

function SkillList({ source, skill }) {
   return (
   <span>
      <img src={source} alt="check icon" />
      <p>{skill}</p>
   </span>
   )
}

export default SkillList
