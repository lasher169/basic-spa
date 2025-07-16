import React from "react";


const NavItem = (({navName, styling}) => {
    console.log("this is navItem", navName);
    return (        
        <div className={styling}>
            <ul>
                <li>
                    {navName}        
                </li>                
            </ul>
        </div>
    )
});

export default NavItem;
