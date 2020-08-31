const MAIN_URL = `http://localhost:3000/`
const DND_API_CALL = MAIN_URL + 'api_call'

export function dndAPICall(url) {
    return fetch(DND_API_CALL, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .catch( errors => console.log(errors) )
    .then( response => response.json() )
    
}

