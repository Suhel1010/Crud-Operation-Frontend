import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menuss=()=>{

    return(
        <ListGroup>
        <ListGroupItem  color="danger" tag="a" href="/courses" action>!! Explore Courses Now !!
        </ListGroupItem>    
    </ListGroup>

    );
};
export default Menuss;