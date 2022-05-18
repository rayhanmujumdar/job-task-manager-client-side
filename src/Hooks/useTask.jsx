import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import axiosPrivate from "../Component/axiosPrivate/axiosPrivate"
import auth from "../firebase/firebase.init"

const useTask = () => {
    const [user] = useAuthState(auth)
    const {data,isLoading,error,refetch} = useQuery("Mytask",() => {
        const url = `https://boiling-lake-25232.herokuapp.com/task?email=${user?.email}`
        return axiosPrivate.get(url)
    })
    return {data,isLoading,error,refetch}
}
export default useTask