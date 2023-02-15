import React from 'react'
import { nanoid } from 'nanoid'
import PersonCard from './PersonCard'

function List({items=[]}) {
  return (
    <ul>
      {items.map((person) => <PersonCard key={nanoid()} {...person} />)}
    </ul>
  )
}

export default List