
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Authenticate/AuthContext'

function PrivateRoute({ children }) {

    const state = useContext(AuthContext)
    const navigate = useNavigate()
    if (!state.isAuth) {
        navigate("/login")
    }

    return (
        children
    )
}

export default PrivateRoute
