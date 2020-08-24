import React, { Fragment } from 'react';
import './App.css';
class AirportChooser extends React.Component {
constructor(){
 super();

 this.state = {
       airports: null,
       displayMenu: false,
       isLoading: false,
       err: "",
       selectedAirport: "",
       city: "",
       country: "", 
       code: ""
     };
};

async fetchData() {
  console.log("Did mount method");
  if(this.state.airports && this.state.airports.length > 0){
    return;
  }
  this.setState({ isLoading: true });
  await fetch("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json")
  .then(response => response.json())
  .then(data => 
    this.setState({airports: data, isLoading: false})
  )
  .catch(error => {
    console.log(error);
    this.setState({err: error, isLoading: false})
  });

  console.log('State set is', this.state.airports);
}

showDropdownMenu = (event) => {
    event.preventDefault();
    console.log('Event target value is', event.target.value);
    this.fetchData();
    this.setState({ displayMenu: true}, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu); 
    });
  }

selectedState = (airport_name, airport_city, airport_country, airport_code) => {
  this.setState({selectedAirport: airport_name, city: airport_city, country: airport_country, code: airport_code})
}

filterFunction = () =>{
  var input, filter, a, i, div, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("ul");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

  render() {
    const { err, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loading_container" >
              <div className="loader">
              </div>
        </div>
      )
    }
    if (err !== "") {
      return (
        <div className="loading_container" >
              <div>Error returned from api</div>
        </div>
      )
    }
    return (
      <Fragment>
      <div  className="dropdown" style = {{background:"blue",width:"200px", justifyContent: 'center', margin: '150px 150px'}} >
      <div className="button" onClick={this.showDropdownMenu}> {this.state.selectedAirport === "" ? "Select an Airport" : this.state.selectedAirport} </div>
      { (this.state.airports && this.state.displayMenu) ? (
        <Fragment>
        <ul>
          {
              this.state.airports.map((item, index) => { 
                  return (
                    <li key={index} onClick={() => this.selectedState(item.name, item.city, item.country, item.code)}>{item.name} </li>
                  )

              })
          }
         </ul>
         </Fragment>
          ):
          (
            null
          )
        }
          </div>
          <Fragment>
          {this.state.selectedAirport !== "" ? (
                      <div className="card">
                      <div className="container">
                    <p><b>Selected Aiport:</b>{this.state.selectedAirport}</p> 
                    <p><b>City:</b> {this.state.city}</p>
                    <p><b>Country:</b>{this.state.country}</p>
                        <p><b>Airport Code:</b> {this.state.code}</p> 
                      </div>
                    </div>
                    ): (
                      null
                    )}
                    </Fragment>
          </Fragment>
    );
  }
}

export default AirportChooser;