import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme => ({
	root: {
		display: 'inline-block'
	},
	typo1: {
		fontSize: 70,
		lineHeight: '66px',
	},
	typo2: {
		fontSize: 40,
	},
	typo3: {
		fontSize: 20,
	},
	typo4: {
		fontSize: 13,
	},
	typo5: {
		fontSize: 10,
	},
})))

const Heading = ({ level = 'typo3', styles, children }) => {
	const classes = useStyles();

  let className;
	switch(level) {
		case 'typo1':
			className = classes.typo1
			break;
		case 'typo2':
			className = classes.typo2
			break;
		case 'typo3':
			className = classes.typo3
			break;
		case 'typo4':
			className = classes.typo4
			break;
		case 'typo5':
			className = classes.typo5
			break;
	}

  return (
    <span className={classNames(classes.root, className, styles)}>{children}</span>
  )
}

export default Heading