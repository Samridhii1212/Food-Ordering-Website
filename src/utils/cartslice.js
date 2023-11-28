import { createSlice } from "@reduxjs/toolkit";

export const cartslice=createSlice({
    name:"cart",
    initialstate:
    {
        items:[]
    },
    reducers:
    {
        additem:(state,action)=>
        {
            if(state===undefined)return state.items;
            state.items.push(action.payload);
        },
        // deleteitem: (state,action) => {
        //     if(state.items.length == 0) return state;
        //     state.items.pop();
        // },
        clearitem: (state, action) => {
            if (state.items.length == 0) return state;
         //will not do anything because state is a local variable to this
         //reducer function and whatever change we make here not seen in original array

         //state is a copy of original array not original itself
         //state=[]

           //do
            state.items.length = 0//make original array as original={items:[]}

            //or

           // return {items:[]}//replace original array with original={items:[]}
           //state.items=[]
        },
        
 }
})


export const {additem,deleteitem,clearitem}=cartslice.actions
export default cartslice.reducer;