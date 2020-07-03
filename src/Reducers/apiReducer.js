export default (state = { data: {}, errors: [], }, action) => {
    switch(action.type)  {
        case 'FETCH_DATA':
            return {
                ...state,
                data: action.data
            }
        case 'CLEAR_DATA':
            return {
                ...state,
                data: {}
            }
        default: return state
    }
}