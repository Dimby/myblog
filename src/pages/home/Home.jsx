import React from 'react'
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme => ({
	root: {
		'& a': {
			color: theme.color.secondary[500]
		}
	}
})))

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Link to='/'>Home</Link>
        <Link to='/test'>Test</Link>
    </div>
  )
}

export default Home