import React from "react";
import Button from "../UI/Button/Button";

import styles from "./DataInputForm.module.css";
const DataInputForm = (props) => {
    return (
        <from className={styles.input}>
            <div>
                <label>UserName</label>
                <input type="text" />
            </div>
            <div>
                <label>Age</label>
                <input type="text" />
            </div>

            <Button type="submit" onClick="">
                Add User
            </Button>
        </from>
    );
};

export default DataInputForm;
