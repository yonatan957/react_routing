import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <NavLink to={'/pages'} end>Home</NavLink><br />
        <NavLink to={'/pages/credit'}>credit</NavLink><br />
        <NavLink to={'/pages/transfer'}>transfers</NavLink>
    </div>
  )
}