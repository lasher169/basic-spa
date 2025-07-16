import React from "react";
import NavItem from "./NavItem";

const Navigation = ( {styling, navItemsList} ) => {

    return (
        <nav className={styling}>            
            {
                navItemsList && 
                navItemsList.map( item => (                                                                
                    <NavItem navName={item.name} styling={item.styling} />                    
                ))
            }
        </nav>
    );
};

export default Navigation;