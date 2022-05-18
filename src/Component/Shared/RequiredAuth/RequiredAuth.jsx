import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase/firebase.init'
import Loading from '../../Shared/Loading/Loading'

const RequiredAuth = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/Login' state={{from: location}}></Navigate>
    }
    return children
};

export default RequiredAuth;