import React from 'react'
import PropTypes from 'prop-types'

const SimpleComponent = ({ ...props }) => {
    console.log('props', props)
    const isLogin = props.isAuth
    return (
        <>
            {!isLogin ? (
                <button onClick={props.onLogin}>Войти</button>
            ) : (
                <button onClick={props.onLogOut}>Выйти</button>
            )}
        </>
    )
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
}
export default SimpleComponent
