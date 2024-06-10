import logo from './logo.svg';
import './App.css';

function App() {
//  az 2 tarigh mituni namayesh bedi ye mojoodiato 
//  1 : estefade az console 1*
// 2: render kardane oon dar JSX 2*
// 1* sample:
// console.log(moteghayer)

// create each of these variables https://www.w3schools.com/js/js_variables.asp
//variable 
// number: 
// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z)

// string and sum of strings :> ali + reza = alirez
// string
// let x = "nahid";
// let y = "jafati";
// let z = x + y;
// console.log(z)

//const:
// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total);

// use operators on both string and numbers https://www.w3schools.com/js/js_operators.asp
//assign value
// let a = 5; 
// let b = 2;
// let c = a + b;

//string
let text1 = "A";
let text2 = "B";
let result = text1 + text2;
console.log(result);



// create array and use its methods (5)
//  https://www.w3schools.com/js/js_arrays.asp

//array
// const cars = ["saab" , "volvo" , "bmw" ];
// console.log(cars);

//array
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// console.log(cars);

//array
//const cars = ["saab" , "volvo" , "bmw"];
//console.log(cars);


//  https://www.w3schools.com/js/js_array_methods.asp


// create object and use its methods (3)
// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_object_method.asp


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
         [cars0]
        


        </a>
      </header>
    </div>
  );
}

export default App;
