import { Button } from "@mui/material"

import GenericPopup from "../popups/GenericPopup"

import { useState, useEffect } from "react";

import { RootState } from "../../redux/store";

import { useSelector, useDispatch } from 'react-redux'

import { open, buttonClicked, PopupButton, PopupState } from '../popups/popupSlice';

 

export const Login = () => {

    const clickedButtonState = useSelector((state: RootState) => state)

    const dispatch = useDispatch();

    const titlesWthButtons: { [key :string]: any } =

    {

        "Success": "Clicked Success",

        "Error": "Clicked Error",

        "Warning":"Clicked Warning"

    };

 

    const contentsWthButtons: { [key:string]: any } =

    {

        "Success": "Content when clicked Success Button",

        "Error": "Content when clicked Error Button",

        "Warning":"Content when clicked Warning Button"

    };

 

    const buttonsWthButtons: { [key:string]: any } =

    {

        "Success": [PopupButton.Ok],

        "Error": [PopupButton.Ok, PopupButton.Cancel],

        "Warning":[PopupButton.Cancel]

    };

 

    console.log(clickedButtonState);

    
    const handleButtonClick = (e: any) => {
    let buttonState = {

        title: titlesWthButtons[e.target.name],

        content: contentsWthButtons[e.target.name],

        buttons:buttonsWthButtons[e.target.name]

    } as PopupState;



    dispatch(open(buttonState));

}

return (

    <>

        {clickedButtonState.clickedButton && (clickedButtonState.clickedButton == PopupButton.Ok ? <>"Clicked Popup OK"</> : <>"Clicked Popup Cancel"</>)}

        <div>

            <Button onClick={e => handleButtonClick(e)} name="Success">Success</Button>

            <Button onClick={e => handleButtonClick(e)} name="Error">Error</Button>

            <Button onClick={e => handleButtonClick(e)} name="Warning">Warning</Button>

            <GenericPopup></GenericPopup>

        </div>

    </>

)

}