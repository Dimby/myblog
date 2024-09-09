import classNames from 'classnames';
import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme => ({
	rootPaper: {
        width: '430px',
        height: '516px',
        borderRadius: '20px',
        border: `1px solid ${theme.color.grey[500]}`,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        backgroundColor: '#ffffff'
	},
})))

const Paper = ({styles, children}) => {
	const classes = useStyles();

  return (
    <div className={classNames(classes.rootPaper, styles)}>{children}</div>
  )
}

export default Paper