import Button from "./Button"
import React, {useState} from 'react';

const DropdownButton = ({text}) =>{
    const[isSelected, select] = React.useState(1);

    if(isSelected === 1){
        return(
            <div>
                <Button text="V" onClick={() => select(0)} ></Button>
            </div>
        );
    }
    else{
        return(
            <div>
                <Button text="^" onClick={() => select(1)} ></Button>
                <p>{text}</p>
            </div>
        );
    }
}



export default DropdownButton