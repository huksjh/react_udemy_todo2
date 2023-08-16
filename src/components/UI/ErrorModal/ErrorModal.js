import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onCloseHandler} />;
}

const ModalOverlay = (props) =>{
    // console.log(classes,classes.modal, classes.header, classes.content, classes.actions)
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onCloseHandler}>확인</Button>
        </footer>
    </Card>);
}

const ErrorModal = (props) => {
    // console.log(props);
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseHandler={props.onCloseHandler}/>, document.querySelector("#backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onCloseHandler={props.onCloseHandler} />, document.querySelector("#overlay-root"))}
        </React.Fragment>
    );
};

export default ErrorModal;
