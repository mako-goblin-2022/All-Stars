import React from "react"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h1 className="text-slate-50 text-center text-5xl text-yellow-400 font-extrabold bg-slate-400 bg-opacity-30 p-4">
        Matariki
      </h1>
      <nav className="flex justify-center space-x-4 bg-slate-400 bg-opacity-30">
        <a
          href="/"
          className=" font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        {/* <a
          href="/team"
          class="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Team
        </a> */}
        <NavLink className="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900" to={'/stars'}>Stars</NavLink>
        <a
          href="/reports"
          className="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
      </nav>
    </div>
  )
}

export default Navbar
