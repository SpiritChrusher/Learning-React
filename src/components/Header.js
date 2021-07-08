import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

	const OnClick = () => {
	console.log('Clicked')
	}
	
	return (
	<header className='header'>
	<h1>{title}</h1>
		<Button color= 'green' text='Add' 
		onClick={OnClick}/>
	</header>
	)
}

Header.defaultProps = {
	title: 'My Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

//CSS in JS
//const headingStyle = {
//	color: 'red',
//	backgroundColor: 'black',
//}

export default Header