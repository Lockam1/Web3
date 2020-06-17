import React from 'react';
import Select from 'react-select';

// // window.onload = getData();

// async function getData(){
//     json = await fetch('http://10.25.138.110:80/csv1')
//         .then(response => response.json());
//     console.log(json);

//     return json;

//     //loop for adding the countries to the drop down selection.

//     // for (var i = 0; i < json.length; i++){
//     //     select.innerHTML = select.innerHTML +
//     //         '<option value="' + json[i]['id'] + '">' + json[i]['name'] + '</option>'
//     // 
// }
// function saveToLocalStorage(){
//     //Saving the data to local storage.
//     console.log('Im here')
//     localStorage.setItem('data', json);
//     usableData = localStorage.getItem('data'); 
//     console.log('UsableData: ', JSON.parse(usableData));
//     return usableData;
// }

// const e = React.createElement;
// const usableData = null;
// const json = null;

// const data = getData();
// const localStorage = saveToLocalStorage();

// allCountries = usableData;

// class showCountry extends React.Component {
//   constructor(props) {
    
//     super(props);
//     this.state = { country: 0
//     };
//   }

//   handleChange() {
        
//     }

//   render() {

//     return e(
//     <Select onChange={this.handleChange} options={this.state.value}/>
//       //<h1>{this.state.selected.name}</h1>
//       // newarray = countries.map((country, i) => {

      
//     );
//   }
// }

// const domContainer = document.querySelector('#country');
// ReactDOM.render(e(showCountry), domContainer);

class showCountry extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  fetchData(){
    fetch('http://10.25.138.110:80/csv1')
    .then(res => res.json())
    then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  // handleChange() {
        
  //   }

  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded){
      return <div>Loading ...</div>
    }
    else{
      return (
        <div className="App">
          Data has been loaded
        </div>
      )
    }
  }
}
