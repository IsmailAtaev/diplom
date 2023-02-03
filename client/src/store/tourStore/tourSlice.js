import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {$host} from "../../http";
//{id: 1, country: 'USA', city: 'NYC', type: 'excursion', duration: 12, price: 170,},


export const getTours = createAsyncThunk('tours/getTours',
    async (_, {rejectWithValue, dispatch}) => {
        const {data} = await $host.get('/tour');
        dispatch(setTours(data));
    })


const tourSlice = createSlice({
    name: 'tours', initialState: {tours: []},
    reducers: {

        setTours: (state, action) => {
            state.tours = action.payload
        },
        addTour(state, action) {
            console.log(state)
            console.log(action)

            state.tours.push({
                country: action.payload.country,
                city: action.payload.city,
                type: action.payload.type,
                duration: action.payload.duration,
                price: action.payload.price,
            })
        },
    },
    extraReducers: {
        [getTours.fulfilled]: () => console.log(),
        [getTours.pending]: () => console.log(''),
        [getTours.rejected]: () => console.log(''),
    }
});

export const {addTour, setTours} = tourSlice.actions;

export default tourSlice.reducer;