import React from 'react'
import Button from '../button/Button'

export const Sidebar = () => {
  const enviar = (e) => {
    e.preventDefault()
    console.log("Helloooo")
  }
  return (
    <div className="sidebar">
      <form className="sidebar__form">
        <input 
          name="description"
          type="text"
          placeholder="Write Introduction"
          className="sidebar__form__input"
        />
        <Button 
          text="Send Description"
          onClick={enviar}
        />
      </form>
    </div>
  )
}