import React from "react";

// nees pass ard CamelCase WrappedComponent
const Rainbow = (WrappedComponent) => {
    const colors = ["red", "pink", "orange", "blue", "green", "yellow"]
    const randomColor = colors[Math.floor(Math.random() * 5)]
    const className = randomColor + "-text"
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    };
}
 
export default Rainbow;