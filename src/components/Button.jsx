import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
	rootButton: {
		padding: '10px 20px',
		width: 'fit-content',
		fontSize: 13,
		borderRadius: 11,
		cursor: 'pointer',
		textWrap: 'nowrap'
	},
	default: {
		backgroundColor: theme.color.grey[450],
		border: `3px solid ${theme.color.grey[450]}`,
		transition: 'background-color 300ms ease-out',
		'&:hover': {
			backgroundColor: theme.color.grey[500],
		}
	},
	primary: {
		backgroundColor: theme.color.primary[900],
		border: `3px solid ${theme.color.grey[450]}`,
		transition: 'background-color 300ms ease-out',
		color: '#FFFFFF',
		'&:hover': {
			backgroundColor: '#151922',
		}
	},
	secondary: {
		backgroundColor: theme.color.secondary[500],
		border: `3px solid ${theme.color.secondary[450]}`,
		transition: 'background-color 300ms ease-out',
		color: '#FFFFFF',
		'&:hover': {
			backgroundColor: '#a4a812',
		}
	},
}));

const Button = ({ variation, onClick, children }) => {
  const classes = useStyles();

	let variationClass = 'default';
	switch(variation) {
		case 'primary':
			variationClass = classes.primary;
			break;
		case 'secondary':
			variationClass = classes.secondary;
			break;
		default:
			variationClass = classes.default;
			break;
	}

  return (
    <div className={classNames(classes.rootButton, variationClass)} onClick={onClick}>{ children }</div>
  )
}

export default Button