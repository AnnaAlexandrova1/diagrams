const ID_INPUT = "ID_INPUT"
const ID_OUT = "ID_OUT"
const ID_ERROR = 'ID_ERROR'
const ID_LOADING = 'ID_LOADING'
const AVG_GET = 'AVG_GET'

const initialState = {
    isAuth: 'logout',
    currentUser: '',
    data: [],
    dataAvg: []
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ID_INPUT:
            return {
                ...state,
                isAuth: 'idle',
                currentUser: action.payload.id,
                data: action.payload.data,
            }
        case AVG_GET:
            return {
                ...state,
                isAuth: 'idle',
                dataAvg: action.payload,
            }
        case ID_LOADING:
            return {
                ...state,
                isAuth: 'loading',
            }
        case ID_OUT:
            return {
                ...state,
                isAuth:' false',
                currentUser: '',
                data: [],
                dataAvg: []
            }
          case ID_ERROR:
            return {
                ...state,
                isAuth: 'logout',
                currentUser: '',
            }
        default:
            return state
    }
}

export const userLogin = id => ({ type: ID_INPUT, payload: id })
export const avgGet = (data) => ({type: AVG_GET, payload: data  })
export const userError = id => ({ type: ID_ERROR })
export const userLoading = id => ({ type: ID_LOADING })
export const logout = () => ({ type: ID_OUT })
