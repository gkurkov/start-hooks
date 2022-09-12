import React from 'react'
import Card from '../common/Card'

const withFunctions = (SimpleComponent) => () => {
    const isLogin = localStorage.getItem('auth') === 'token'

    function onLogin() {
        localStorage.setItem('auth', 'token')
    }
    function onLogOut() {
        localStorage.removeItem('auth')
    }

    return (
        <>
            <Card>
                <SimpleComponent
                    isAuth={isLogin}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                />
            </Card>
        </>
    )
}

export default withFunctions
