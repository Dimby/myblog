import React from 'react'
import Heading from '../../components/Heading'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  heading: {
    fontWeight: 'bold'
  }
}))

const Achievement = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Heading level='typo1' styles={classes.heading}>Inspirer</Heading> <br />
        <Heading level='typo1' styles={classes.heading}>chaque jour,</Heading>
      </div>
      <div>
        <Heading level='typo3'>Explorez, découvrez, créez : laissez-vous inspirer chaque jour par le monde du design. Rejoignez-moi dans cette aventure créative et trouvez l'inspiration pour vos propres projets !</Heading>
      </div>
    </div>
  )
}

export default Achievement