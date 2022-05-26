const { createSlice } = require("@reduxjs/toolkit");
const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, actions) => {
            const idPhoto = actions.payload;
            state = state.filter(photo => photo.id !== idPhoto);
            return state;
        },
        updatePhoto: (state, actions) => {
            // const newPhoto = actions.payload;
            // state = state.map(photo => photo.id === newPhoto.id ? newPhoto : photo);
            // return state;
            const newPhoto = actions.payload;
            console.log(state)
            const index = state.findIndex(photo => photo.id === newPhoto.id);
            if (index !== -1) {
                state[index] = newPhoto
            }
        }
    }
})

console.log(photo)
const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer