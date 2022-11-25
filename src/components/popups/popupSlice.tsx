import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

 

export enum PopupStatus { Warning, Error, Success, Info }

export enum PopupButton { Undefined, Ok, Cancel, Warning }

export interface PopupState {

    open: boolean,

    title: string,

    content: string,

    buttons: Array<PopupButton>,

    status: PopupStatus,

    clickedButton: PopupButton

}

 

const initialState: PopupState = {

    open: false,

    title: "No Header",

    content: "No Content",

    buttons: [PopupButton.Cancel, PopupButton.Ok],

    status: PopupStatus.Success,

    clickedButton: PopupButton.Cancel

}

 

export const popupSlice = createSlice({

    name: 'popup',

    initialState,

    reducers: {

        open: (state, action: PayloadAction<PopupState>) => {

            state.open = true;

            state.clickedButton = action.payload.clickedButton;

            state.title = action.payload.title;

            state.content = action.payload.content;

            state.buttons = action.payload.buttons;

        },

        close: (state) => {

            state.open = false

        },

        buttonClicked: (state, action: PayloadAction<PopupState>) => {

            state.open = false;

            state.clickedButton = action.payload.clickedButton;

        }

    },

})

export const { open, close, buttonClicked } = popupSlice.actions

 

export default popupSlice.reducer;