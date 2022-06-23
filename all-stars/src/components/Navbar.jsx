function Navbar() {
  return (
    <div>
      <h1 class="text-slate-50 text-center text-5xl text-yellow-400 font-extrabold bg-slate-400 bg-opacity-30 p-4">
        Matariki
      </h1>
      <nav class="flex justify-center space-x-4 bg-slate-400 bg-opacity-30">
        <a
          href="/dashboard"
          class=" font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        {/* <a
          href="/team"
          class="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Team
        </a> */}
        <a
          href="/projects"
          class="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Stars
        </a>
        <a
          href="/reports"
          class="font-bold font-medium px-3 py-2 text-slate-50 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
      </nav>
    </div>
  )
}

export default Navbar
