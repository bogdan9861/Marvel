import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h1>Такого адреса не существует</h1>
      <Link to="/">back</Link>
    </div>
  )
}

export default Page404