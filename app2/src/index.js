import React from 'react';
import Select from 'react-select';

// window.onload = getData();
// http://192.168.1.156:80/csv4
// http://10.25.138.110:80/csv1

// await fetch('http://10.25.138.110:80/csv1')
//         .then(response => response.json());
//     console.log(json);
//     return json;
async function getData(){
    json = await fetch('http://192.168.1.156:80/csv4')
        .then(response => response.json());
    console.log(json + 'Or here?');
    return json;
}

function saveToLocalStorage(){
    //Saving the data to local storage.
    console.log('Im here')
    localStorage.setItem('data', json);
    usableData = localStorage.getItem('data'); 
    console.log('UsableData: ', JSON.parse(usableData));
    return usableData;
}

const e = React.createElement;
const usableData = null;
const json = null;
const data = getData();
//const localStorage = saveToLocalStorage();

allCountries = usableData;

class showCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      countries: [],
      country: ""
    };
  }
  render() {
    return e(
    <Select onChange={this.handleChange} options={this.state.value}/>
      //<h1>{this.state.selected.name}</h1>
      // newarray = countries.map((country, i) => {
    );
  }
}

const domContainer = document.querySelector('#country');
ReactDOM.render(e(showCountry), domContainer);

// class showCountry extends React.Component {
//   constructor(props) {
    
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   fetchData(){
//     fetch('http://10.25.138.110:80/csv1')
//     .then(res => res.json())
//     then(json => {
//       this.setState({
//         isLoaded: true,
//         items: json,
//       })
//     });
//   }

//   // handleChange() {
        
//   //   }

//   render() {

//     var { isLoaded, items } = this.state;
//     if (!isLoaded){
//       return <div>Loading ...</div>
//     }
//     else{
//       return (
//         <div className="App">
//           Data has been loaded
//         </div>
//       )
//     }
//   }
// }
