import React from 'react'
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Heading from '../../components/Heading';
import classNames from 'classnames';

const useStyles = createUseStyles((theme => ({
	root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 70,
		'& a': {
			color: theme.color.secondary[500]
		}
	},
  heroContent: {
    width: 'fit-content'
  },
  firstHero: {
    position: 'relative',
  },
  imageArrow: {
    position: 'absolute',
    bottom: '-10px',
    left: '41%'
  },
  image: {
    border: '1px solid red',
    width: 400,
    height: 400
  },
  sectionOne: {
    color: theme.color.secondary[500]
  },
  heading: {
    fontWeight: 'bold'
  },
  text: {
    width: 380,
    margin: '15px 0 0 30px'
  },
  zIndexMinus: {
    position: 'relative',
    zIndex: 2
  },
  circle01: {
    backgroundImage: 'url(rond-01.svg)',
    backgroundSize: 'cover',
    position: 'absolute',
    width: 200,
    height: 200,
    bottom: -100,
    right: -50,
    zIndex: 1
  },
  circle02: {
    backgroundImage: 'url(rond-02.svg)',
    backgroundSize: 'cover',
    position: 'absolute',
    width: 300,
    height: 300,
    bottom: -50,
    left: -150,
    zIndex: 1
  },
})))

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heroContent}>
        <div className={classes.firstHero}>
          <div className={classes.zIndexMinus}>
            <Heading level='typo1' styles={classes.heading}><span className={classes.sectionOne}>Inspirer</span> <br /> chaque jour,</Heading> <br />
          </div>
          <div className={classNames(classes.text, classes.zIndexMinus)}>
            <Heading level='typo3'>Explorez, découvrez, créez : laissez-vous inspirer chaque jour par le monde du design. Rejoignez-moi dans cette aventure créative et trouvez l'inspiration pour vos propres projets !</Heading>
          </div>
          <div className={classes.circle01} />
        </div>
        <div style={{ position: 'relative', marginTop: 50 }}>
          <div className={classes.zIndexMinus}>
            <Heading level='typo1' styles={classes.heading}><span className={classes.sectionOne}>Apprendre</span> <br /> à chaque clic.</Heading> <br />
          </div>
          <div  className={classNames(classes.text, classes.zIndexMinus)}>
            <Heading level='typo3'>Apprenez à être toujours assoiffé de nouveauté en explorant des réalisations inspirantes.</Heading>
          </div>
          <div className={classes.circle02} />
        </div>
        <img src="arrow.svg" alt="Arrow" className={classes.imageArrow} />
      </div>
      <div className={classes.image}>
        Here
      </div>
    </div>
  )
}

export default Home