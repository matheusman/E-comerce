import React from "react";
import styles from './styles/Button.module.css'

type buttonTypes = React.ComponentProps<'button'> & React.PropsWithChildren<{
    id? : string;
}>

export default function Button ( { id, children, ...props} : buttonTypes) {
    return (
    <>
        <button id={id} className={styles.button} {...props}>{children}</button>
    </>)
}