import React from "react";
import { createUseStyles } from "react-jss";
import Paper from "../../components/Paper";

const useStyles = createUseStyles((theme) => ({
  rootHobbies: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "40px",
  },
  paper: {},

  // TODO refont this poilice to component
  typo3Bold: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "24px",
    color: theme.color.green[500],
  },
  // TODO refont this poilice to component
  typo5Bold: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    fontSize: "10px",
    lineHeight: "12px",
  },
  // TODO refont this poilice to component
  typo5Default: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "12px",
  },
}));

const Hobbies = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootHobbies}>
      <Paper styles={classes.paper}>
        <div>A</div>
        <div>
          <div className={classes.typo3Bold}>Cinéphile</div>
          <div>
            <span className={classes.typo5Bold}>Adj.&nbsp;&nbsp;&nbsp;</span>
            <span className={classes.typo5Default}># Les gens qui aiment la cinema</span>
          </div>
        </div>
        <div>C</div>
      </Paper>
    </div>
  );
};

export default Hobbies;
