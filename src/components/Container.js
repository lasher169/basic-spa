import React from "react";
import './Container.css';

const Container = ({children, styling}) => {
    return (
        <main className={styling}>          
            {React.Children.map(children, child => {
                return React.cloneElement(child, {style: { marginBottom: '1rem'}});
            })
            }  
        </main>
    )
}

export default Container;