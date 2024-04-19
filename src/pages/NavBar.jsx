import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import classNames from 'classnames';
import Contact from './contact/Contact';

const useStyles = createUseStyles(theme => ({
	rootNavBar: {
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column'
	},
	bottomNavLink: {
		height: 150,
		width: '100%'
	},
	contentNavLink: {
		margin: 'auto',
		width: '80%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	allNavItems: {
		display: 'flex',
		gap: 70
	},
	navItems: {
		display: 'flex',
		gap: 20
	},
	navItem: {
		borderTop: `3px solid #FFFFFF`,
		paddingTop: 20
	},
	defaultActive: {
		borderTop: `3px solid ${theme.color.primary[900]}`,
		transition: 'border-top 500ms ease-in'
	},
	secondaryActive: {
		borderTop: `3px solid ${theme.color.secondary[500]}`,
	},
	content: {
		position: 'relative',
		flex: 1,
		backgroundImage: 'url(background.svg)'
	}
}));

const navItems = [
	{ label: 'Mes réalisations', to: '/achievement' },
	{ label: 'Tous savoir sur moi', to: '/me' },
	{ label: 'Hobbies', to: '/hobbies' },
]

const NavBar = () => {
	const classes = useStyles();
	const location = useLocation();
	const navigate = useNavigate();
	const [isContactActive, setIsContactActive] = useState(false);
	
	useEffect(() => {
		if(location.pathname === '/') {
			navigate('/home')
		}
	}, [location]);

  return (
    <div className={classes.rootNavBar}>
			<div className={classes.content}>
				{isContactActive && <Contact/>}
				<Outlet/>
			</div>
			<div className={classes.bottomNavLink}>
				<div className={classes.contentNavLink}>
					<div className={classes.allNavItems}>
						<div className={classes.navItems}>
							{navItems.map((item, index) => <NavItem key={index} onClick={() => navigate(item.to)} isActive={location.pathname === item.to} >{ item.label }</NavItem>)}
						</div>
						<NavItem variation='secondary' isActive={isContactActive} onClick={() => setIsContactActive(!isContactActive)}>Contactez-moi</NavItem>
					</div>
					<NavItem onClick={() => navigate('/home')}>Retour au debut</NavItem>
				</div>
			</div>
    </div>
  )
}

export default NavBar

const NavItem = ({ variation = 'default', onClick, isActive, children }) => {
	const classes = useStyles();

	let activeClass;
	switch(variation) {
		case 'default':
			activeClass = classes.defaultActive;
			break;
		case 'secondary':
			activeClass = classes.secondaryActive;
			break;
		default:
			break;
	}

	let activeVariation = isActive ? (variation === 'default' ? 'primary' : 'secondary') : variation;

	return <div className={classNames(classes.navItem, isActive && activeClass)}>
		<Button variation={activeVariation} onClick={onClick}>{ children }</Button>
	</div>
}