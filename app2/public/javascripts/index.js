import React from 'react';
import Select from 'react-select';

// window.onload = getData();

async function getData(){
    json = await fetch('http://10.25.138.110:80/csv1')
        .then(response => response.json());
    console.log(json);
    return json;

    //loop for adding the countries to the drop down selection.

    // for (var i = 0; i < json.length; i++){
    //     select.innerHTML = select.innerHTML +
    //         '<option value="' + json[i]['id'] + '">' + json[i]['name'] + '</option>'
    // 
}
async function saveToLocalStorage(){
  //Saving the data to local storage.
    localStorage.setItem('data', JSON.stringify(json))
    usableData = localStorage.getItem('data'); 
    console.log('UsableData: ', JSON.parse(usableData));
}

const e = React.createElement;
const usableData = null;
const json = null;

const data = getData();
const localStorage = saveToLocalStorage();

allCountries = usableData;

class showCountry extends React.Component {
  constructor(props) {
    data;
    localStorage;
    super(props);
    this.state = { country: 0
    };
  }

  handleChange() {
        
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