import React from 'react'
import { createUseStyles } from 'react-jss';
import { motion } from "framer-motion";
import Heading from '../../components/Heading';
import { IconBrandBehance, IconBrandLinkedin, IconDeviceLandlinePhone, IconMailForward, IconPhoneCall } from '@tabler/icons-react';

const useStyles = createUseStyles(theme => ({
	rootContact: {
		position: 'absolute',
		backgroundColor: 'rgba(50, 54, 63, 0.98)',
		width: '100%',
		height: '100%',
		display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
		zIndex: 10
	},
	contactContent: {
		backgroundColor: '#FFFFFF',
		width: 'fit-content',
		padding: 30,
		borderRadius: '15px 15px 0 0',
		borderBottom: `5px solid ${theme.color.secondary[500]}`,
		marginBottom: 10,
		display: 'flex',
    gap: 30,
    alignItems: 'center',
	},
	iconContent: {
		border: `1px solid ${theme.color.primary[900]}`,
		padding: 5,
		borderRadius: 50,
		'& > div': {
			border: `1px solid ${theme.color.primary[900]}`,
			width: 90,
			height: 90,
			borderRadius: 50,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.color.secondary[500],
			'& svg': {
				width: 44,
				height: 44,
				color: '#FFFFFF',
				strokeWidth: 1
			},
		}
	},
	title: {
		color: theme.color.secondary[500],
		fontWeight: 'bold'
	},
	contactItems: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10
	},
	contactItem: {
		backgroundColor: theme.color.grey[450],
		padding: '8px 15px',
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		borderRadius: 11,
		cursor: 'pointer',
		width: 'fit-content',
		fontSize: 13,
		'& svg': {
			width: 17
		}
	}
}));

const Contact = () => {
	const classes = useStyles();
  return (
    <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		 	className={classes.rootContact}>
			<motion.div 
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4 }}
				className={classes.contactContent}>

				<motion.div 
					initial={{ height: '0%' }}
					animate={{ height: '90%' }}
					transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
					className={classes.iconContent}>
					<motion.div
						animate={{ rotate: [-200, 0] }}
						transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
						><IconPhoneCall/></motion.div>
				</motion.div>

				<div>
					<Heading level='typo3'styles={classes.title}>Allôoo !!! <br /> Comment puis-je <br /> vous aidez ? </Heading>
					<div style={{ width: 250, marginTop: 20 }}>
						“Le temps est précieux, gaspillez-le avec discernement.”
					</div>
				</div>

				<div className={classes.contactItems}>
					<div className={classes.contactItem}><IconMailForward/> dimbyrasolonirina@gmail.com</div>
					<div className={classes.contactItem}><IconDeviceLandlinePhone/> +261 34 85 634 92</div>
					<div className={classes.contactItem}><IconBrandLinkedin/> https://www.linkedin.com/in/dimby-rasolonirina-13bb94193/</div>
					<div className={classes.contactItem}><IconBrandBehance/> https://www.behance.net/dimbyrasolon</div>
				</div>

			</motion.div>
		</motion.div>
  )
}

export default Contact;