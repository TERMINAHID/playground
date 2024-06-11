import logo from './logo.svg';
import './App.css';

function App() {
//  az 2 tarigh mituni namayesh bedi ye mojoodiato 
//  1 : estefade az console 1*
// 2: render kardane oon dar JSX 2*
// 1* sample:
// console.log(moteghayer)

// create each of these variables https://www.w3schools.com/js/js_variables.asp


// string and sum of strings :> ali + reza = alirez


// use operators on both string and numbers https://www.w3schools.com/js/js_operators.asp

// create array and use its methods (5)
//  https://www.w3schools.com/js/js_arrays.asp
//  https://www.w3schools.com/js/js_array_methods.asp




// create object and use its methods (3)
// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_object_method.asp



// creat an object
//const car = {type:'fiat' , model:500 , color:'white'};
//console.log(car);



//new object
const person = new Object();
//Add properties
person.firstName = "nahid";
person.lastName = "jafari";
person.age = 30;
person.eyeColor = "blue";
console.log(person);



  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"  
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
          >

         {/*  mahale farakhani function ha va moteghayer ha dar JSX */}
         {/* 2* sample:  */}
         {person.eyeColor}
        


        </a>
      </header>
    </div>
  );
}

export default App;
