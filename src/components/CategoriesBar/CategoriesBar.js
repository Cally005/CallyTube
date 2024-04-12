import React, { useState } from 'react'
// import "./_categoriesBar.scss"

const keywords =['All', 'React js', 'React Native', 'Use of Api', 'Redux', 'Music', 'Alogrithm Art', 'Guitar', 'Coding', 'Football', 'Coding', 'Coding', 'Coding', 'Coding', 'Coding']

const CategoriesBar= () => {
  const [activeElement, setActiveElement] = useState('All')
  
  const handleClick = value => {
    setActiveElement(value)
  }
  return (
    <div  className="categoriesBar">
      {
        keywords.map((value,i)=>
        (<span onClick={(()=>handleClick(value))} key={i}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
        ))}
    </div>
  )
}

export default CategoriesBar