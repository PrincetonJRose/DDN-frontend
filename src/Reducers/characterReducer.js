export default (state = { characters: [], currentCharacter: null, errors: [], }, action) => {
    switch(action.type)  {
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: action.characters
            }
        case 'CLEAR_CHARACTERS':
            return {
                ...state,
                characters: []
            }
        case 'PLAY_CHARACTER':
            return {
                ...state,
                currentCharacter: action.character
            }
        case 'CLEAR_CHARACTER':
            return {
                ...state,
                currentCharacter: null
            }
        default: return state
    }
}