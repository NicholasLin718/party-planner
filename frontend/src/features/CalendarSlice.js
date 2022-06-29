import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const selectedDaysSlice = createSlice({
    name: 'selectedDays',
    initialState,
    reducers: {
        storeList: {
            reducer(state, action) {
                for (let i = 0; i < action.payload.selectedList.length; i++) {
                    if (!state.includes(action.payload.selectedList[i])) {
                        state.push(action.payload.selectedList[i]);
                    }
                }
                // state.push(...action.payload.selectedList);
                // console.log(action.payload.selectedList);
            },
            prepare(selectedList) {
                return {
                    payload: { selectedList }
                };
            }
        }
        // storeList: (state, action) => {
        //     return { ...action.payload };
        // }
    }
});

export const selectAllDays = (state) => state.selectedDays;
export const { storeList } = selectedDaysSlice.actions;
export default selectedDaysSlice.reducer;
