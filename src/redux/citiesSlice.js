import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    value: [
      {
        id: 0,
        name: "Tokyo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
        imgURL: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 1,
        name: "New York",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
        imgURL: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
      {
        id: 2,
        name: "Rome",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
        imgURL: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
      },
      {
        id: 3,
        name: "Paris",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, voluptas. ",
        imgURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false,
      },
    ],
  },
  
  reducers:{
    add: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const { add } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer