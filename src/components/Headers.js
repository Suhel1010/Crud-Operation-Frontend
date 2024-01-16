import React from "react";
import { Card,CardBody } from "reactstrap";

function Header(){

    
    return(
        <Card className="my-1" color="primary" inverse>
            <CardBody>
            <h1>Welcome To My Course Application</h1>
            </CardBody>
        </Card>
        
    )

}
export default Header;