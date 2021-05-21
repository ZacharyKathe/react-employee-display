import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmpContainer extends Component {
  state = {
    result: [],
    search: "",
    
  };

  componentDidMount() {
    this.searchEmp("4")
  }

  handleInputChange = event => {
    console.log(event.target)
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmp(this.state.search)
    this.setState({
      name: ""
    }
      
    )
  }


  searchEmp = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
        <Card heading="Search" size="lg-10">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          <Card heading="Employee's">
              
                {this.state.result.map(allEmpObj=><EmployeeDetail
                  key={allEmpObj.dob.date}
                  employee={allEmpObj}/>
                  )}
                  
                
            
          </Card>
          
        </Row>
      </Container>
    );
  }
}

export default EmpContainer;
 