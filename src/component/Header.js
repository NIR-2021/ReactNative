import React from "react";
import {Link,NavLink, withRouter} from 'react-router-dom';


const Header = (props) =>{

    console.log(props);
    return(
        <nav className="ui raised very padded segment menu">
            <div className="ui right floated header">
                <button className="ui button" ><h1><Link to="/">Home</Link></h1></button>
                <button className="ui button"><h1><Link to="/contact">Contact</Link></h1></button>
            </div>
        </nav>
    );
}

export default withRouter(Header);