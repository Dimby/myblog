import React from 'react'
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Heading from '../../components/Heading';

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
        <div>Test</div>
        <div>Test1</div>
    </div>
  )
}

export default Home