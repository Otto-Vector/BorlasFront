import React from 'react'
import {AppButton} from "../button/AppButton"
import {TextButton} from "../TextButton/TextButton"
import {ButtonTheme, TextButtonTheme} from "../../types/BtnThemeEnum"

export const TestViewPage: React.FC = () => {
    const onClickBtn = () => {
        // alert("Кнопка нажата")
        console.log("Кнопка нажата")
    }

    const onClickTxtBtn = () => {
        // alert("Кнопка коммента нажата")
        console.log("Кнопка коммента нажата")
    }

    return (
        <div style={{padding: "100px", display: "flex", flexDirection: "column", gap: "15px"}}>
            <AppButton text={"Button Primary"} onClick={onClickBtn}/>
            <AppButton text={"Button Primary disabled"} onClick={onClickBtn} isDisabled={true}/>
            <AppButton text={"Button Soft"} onClick={onClickBtn} theme={ButtonTheme.Soft}/>
            <AppButton text={"Button Soft disabled"} onClick={onClickBtn} theme={ButtonTheme.Soft}
                       isDisabled={true}/>
            <TextButton text={"Комментировать"} onClick={onClickTxtBtn}
                        theme={TextButtonTheme.Primary}/>
            <TextButton text={"Комментировать"} onClick={onClickTxtBtn}
                        theme={TextButtonTheme.Primary} isDisabled={true}/>
            <TextButton text={"Комментировать"} onClick={onClickTxtBtn}
                        theme={TextButtonTheme.Soft}/>
            <TextButton text={"Комментировать"} onClick={onClickTxtBtn}
                        theme={TextButtonTheme.Soft} isDisabled={true}/>
        </div>
    )
}
