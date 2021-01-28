export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Remove when done developing
    //token: 'BQDo_vCZ_OJA8UWK9c5aa6sjilhMwW6LB3zCqslLsr4IsCNaycCTyuzWK0HuYt3Ucbow35M0ff4qcRd8L7u7w0HGatCbG9rsmfwKvCLBTEFevGQTHlQz7KQFHzZyErnwjyLQvoZJ3BiRaKxkVImMnzg-IKhkNv9Am-kdtlQ7m6jMKkL1'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlist: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

            default:
                return state;
    }
}

export default reducer;