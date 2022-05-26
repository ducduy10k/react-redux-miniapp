const { createSlice } = require("@reduxjs/toolkit");
const photo = createSlice({
    name: 'photos',
    initialState: [{
        id: 86160,
        categoryId: 5,
        photo: 'https://picsum.photos/id/649/300/300',
        title: 'Id ex enim non dolore reprehenderit eu ullamco.'
    }],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        }
    }
})

console.log(photo)
const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer