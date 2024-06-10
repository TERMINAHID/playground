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

//array
const person = [ "jhon" , "doe" , "46"];
//console.log(person)

//array
// const cars = ["saab" , "volvo" , "bmw" ];
// console.log(cars);


//array
let myArray0 = ["date.now"];
let myArray1 = ["myfunction"];
let myArray2 = ["mycars"];
//console.log(myArray[0]);


//array
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let length = fruits.length;
//console.log(lenght);

//array
// const fruits =[ 'bnana' , 'orange' , 'apple' , 'mango'];
// let fruit = fruits [fruits.length - 1 ];
//console.log(fruit);


//array
const fruits = ['bnana' , 'orange' , 'apple' , 'mango'];
let flen = fruits.length;

let text = '<ul>';
for (let i = 0; i < flen; i++)
{text += 'li' + fruits[i] + '</li>';}
text += '</li>';
//console.log(fruits);





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
         {fruits}
        


        </a>
      </header>
    </div>
  );
}

export default App;
