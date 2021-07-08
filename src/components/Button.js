import PropTypes from 'prop-types'

const Button = ({color, text, OnClick}) => {

return <button onClick = {OnClick}
style = {{backgroundColor: color}}
className='btn'>{text}</button>
}

Button.defaultProps = {
color: 'steelblue',
text: 'Add',
onClick: () => {console.log('Hello')},
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	OnClick: PropTypes.func,//.isRequired,
	
}

export default Button