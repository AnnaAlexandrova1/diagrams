import axios from 'axios'
import { useDispatch } from 'react-redux'
import { link } from '../api/link'
import { userLogin, userLoading } from '../reducers/authReduser'

export const auth = (id) => {
    
    return async dispatch => {
        dispatch(userLoading())
        try {
            const response = await axios.get(`${link}/search?id=${id}`)
            dispatch(userLogin({ data: response.data, id: id}))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}
