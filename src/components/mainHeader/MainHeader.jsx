import { NavLink } from 'react-router-dom'

const navLinkStyles = ({ isActive }) =>
  `px-2 py-0.5 hover:bg-cyan-500 hover:text-black rounded-lg transition-colors ${
    isActive ? 'bg-cyan-700 text-white' : 'underline'
  }`

function MainHeader() {
  return (
    <div className="fixed top-0 left-0 min-w-screen w-full border-b-2 py-2 px-1.5 z-50 bg-white">
      <div className="max-w-2xl w-full flex items-center justify-center gap-3 m-auto">
        <p>Main Header</p>
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/auth" className={navLinkStyles}>
          Auth
        </NavLink>
      </div>
    </div>
  )
}

export default MainHeader
