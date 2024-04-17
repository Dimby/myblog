import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		if(location.pathname === '/') {
			navigate('/home')
		}
	}, [location])

  return (
    <div>
			<Outlet/>
			<div>
				<Link to='/home'>Home</Link>
        <Link to='/test'>Test</Link>
			</div>
    </div>
  )
}

export default NavBar