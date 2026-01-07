import React from 'react'

const Course = ({title,desc,image,duration,price,author,id}) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <div>
        <span>{price}</span>
        <span>{duration}</span>
      </div>
      <p>{desc}</p>
      <span>{author}</span>
    </div>
  )
}

export default Course
