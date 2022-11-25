import * as React from 'react';

import { useEffect } from 'react';

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';

import DialogContent from '@mui/material/DialogContent';

import DialogContentText from '@mui/material/DialogContentText';

import DialogTitle from '@mui/material/DialogTitle';

import { RootState } from "../../redux/store";

import { useSelector, useDispatch } from 'react-redux'

import { buttonClicked, PopupState, PopupButton, open } from '../popups/popupSlice';

 

export default function GenericPopup() {

 

    const dispatch = useDispatch();

    const clickedButtonState = useSelector((state: RootState) => state);

    const buttonNamesWthButtons: { [key in keyof typeof PopupButton]?: any } =

    {

        [PopupButton.Ok]: "Okay",

        [PopupButton.Cancel]: "Not Okay"

    };

 

    const handleClose = () => {

        let buttonState = {

            open: false

        } as PopupState;

        dispatch(buttonClicked(buttonState));

    };

 

    const handleButtonClick = (btn: PopupButton) => {

        let buttonState = {

            clickedButton:btn

        } as PopupState;

        dispatch(buttonClicked(buttonState));

    }

 

    return clickedButtonState.open ?

        (<div>

            <Dialog

                open={clickedButtonState.open}

                onClose={handleClose}

                aria-labelledby="alert-dialog-title"

                aria-describedby="alert-dialog-description"

            >

                <DialogTitle id="alert-dialog-title">

                    {clickedButtonState.title}

                </DialogTitle>

                <DialogContent>

                    <DialogContentText id="alert-dialog-description">

                        {clickedButtonState.content}

                    </DialogContentText>

                </DialogContent>

                <DialogActions>{

                    clickedButtonState.buttons.map(btn => {

                        return (<Button onClick={e => handleButtonClick(btn)}>{buttonNamesWthButtons[btn]}</Button>)

                    })}

                </DialogActions>

            </Dialog>

        </div>) : <></>

}