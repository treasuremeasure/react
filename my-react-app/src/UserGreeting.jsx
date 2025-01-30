import PropTypes from 'prop-types'

function UserGreeting(props) {
    return (
        props.isLoggedIn ? <h2>Welcome, {props.username}</h2> : <h2>Please log in to continue</h2>
    )
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    username: "Guest"
}

export default UserGreeting