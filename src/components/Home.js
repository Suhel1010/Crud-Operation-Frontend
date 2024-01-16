import {useEffect } from "react";
import React from "react";
import {Container,Button} from "reactstrap";


const Home = () => {
    useEffect(()=>{
        document.title="Home || Kumar Shanu";
    })
  return <div>
        <jumbotron className="text-center">
            
            <h1>Course application by Kumar Shanu</h1>
            <p>This Application is developed using Spring Boot(BackEnd) and React JS(FrontEnd)</p>
           <Container>
           <Button color="primary" outline>Start Using</Button>
           </Container>
        </jumbotron>


    </div>;
};
export default Home;