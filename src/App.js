import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {

  const sampleObject = {
    id: 0,
    name: "", // string
    type: "", // string
    isActive: false, // boolean
    start: () => {}, // function (method)
    stop: () => {}, // function (method)
    numbersOfActivation: 0, // number
    detailOfActivation: [] ,// array
    childObjects: {} // object
  }

  const object1 = {...sampleObject}
  object1.id = 1;
  console.log(object1,'object1')
  const object2 = {...sampleObject}
  object2.id = 2;
  console.log(object2,'object2')
  const object3 = {...sampleObject}
  object3.id = 3;
  console.log(object3,'object3')
  const Objects =[object1,object2,object3];
  let object4 = {...sampleObject,id:4};
  Objects.push(object4);
  console.log(Objects,'object4');
  let id1= 1;
  Object.assign(object1,{object1,id1});
  console.log(object1);
  let name = "nahid";
  Object.assign(object2,{name});
  console.log(object2);
let isActive= true;
Object.assign(object3,{isActive});
console.log(object3);
let childObjects={size:36,high:182};
Object.assign(object4,childObjects);
console.log(object4);



// const [trainingArray, setTrainingArray] = useState(Objects)

// https://fa.javascript.info/array-methods



//Array method







// *******************************************************
  
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


// Array.methods(push,shift,unshift,change index)

// let style = ["jazz",'blues'];
// style.push("rock-n-roll");
// style[1] = "classics";
// style.shift(style);
// style.unshift("rap","reggae");
// console.log(style);


// Array(push)
// let arr = ['a','b'];
// arr.push(function() 
// {alert (this);
// });
// arr[2]();
// console.log(arr);



// Array.forEach(2)
//  let arr =["yek","dow","se"].forEach(console.log);
// let arr =["yek","dow","se"].forEach(alert);



// Array.reverse
// let arr =[1,2,3,4,5];
// arr.reverse();
// console.log(arr);


// Array.split
// let names ="yek,dow,se,char,panj";
//  names.split(" , ");
// console.log(names);



// Array.filter by Range
// function filterRange(arr,a,b)
// {return arr.filter (item =>(a <= item && item <= b)); }
// let arr =[ 5,3,8,1];
// let filtered = filterRange(arr,1,4);
// console.log(filtered);
// console.log(arr);



// Array filterRangeInPlace ok but?????
// function filterRangeInPlace(arr,a,b)
// {for (let i=0; i <arr.lenght; i++)
// {
//   let val = arr[i];
// if (val <a || val >b)
// {arr.splice(i,1);
// i--;}
// }}
// let arr = [5,3,8,1];
// filterRangeInPlace(arr,1,4);
// console.log(arr);
// console.log(filterRangeInPlace);

// Array sort
// let arr =[5,2,1,-10,8];
// arr.sort((a,b) => b - a);
// console.log(arr);



//Array
// const gr =["alef","be","jim","dal"];
// console.log(gr);

// Array.length
// const gr =["alef","be","jim","dal"];
// let length = gr.length;
// console.log(length);

//Array.at
// const gr =["alef","be","jim","dal"];
// let grs = gr.at(2)
// console.log(grs)

//Array.join.....fail
// const gr = ["alef","be","jim","dal"];
// document.getElementById("demo").innerHTML = gr.join(" * ");



// Array mapp
// let jhon = {name:"jhon" , lastName:"smith" , id:1};
// let pete = {name:"pete" , lastName: "hunt" , id:2};
// let mary = {name:"mary" , lastName:"key" , id:3};
// let users = [jhon,pete,mary];
// let userMapped = users.map(user =>({
//   fullName: `${user.name} ${user.lastName}`,
//   id: user.id
// }))
// console.log(userMapped[0]);                          //fullName,id




// create object and use its methods (3)
// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_object_method.asp

// Object.assign
// let user = {name: "jhon"};
// let permission1 = {canView: true};
// let permission2 = {canEdit: true};
// Object.assign(user,permission1,permission2);
// console.log(user);
// console.log(user.name);
// console.log(user.canView);
// console.log(user.canEdit);



// object creat/add/delet
// let user = {};
// user.name ="jhon";
// user.surname= "smith";
// user.name = "pit";
// delete user.name;
// console.log(user);


// object for...in /addition
// let salaries ={
//   jhon:100,
//   ann:160,
//   pete:130,
// };
// let sum =0;

// for (let key in salaries)
// {sum += salaries[key];
// }
// console.log(sum);
// alert(sum);





// Object Multiplication
// let menu = {
//   width: 200,
//   height: 300,
//   title: "my menu"
// };
// multiplayNumeric(menu);
//   function multiplayNumeric(obj){
//     for (let key in obj) {
//       if (typeof obj[key] == 'number'){
//         obj[key] *= 2;
//       }
//     }
//   }
// console.log(menu);
// alert(menu);



// sampling Object by alireza::
// refrence object::


// console.log(Object.keys(sampleObject))
// console.log(Object.values(sampleObject))
// console.log(Object.entries(sampleObject))

// ITERATING OBJECTS
// sampleObject.childObjects = {childKey1 : 'childValue'}
// sampleObject.childObjects = {...sampleObject.childObjects, childKey2 : 'childValue2'} // ECMA 2016

// creating instance of object and manipulating it by Nahid
// ADV sample :: const nahidSampleObject = {...sampleObject, name: "nahidObject"}
// const nahidObject = {...sampleObject}
// nahidObject.isActive = true
// nahidObject.numbersOfActivation = 6;
// delete nahidObject.name

// console.log(sampleObject,'sample Object')
// console.log(nahidObject, 'nahid simple object')
 



// JSON
// console.log(JSON.stringify(sampleObject)) // string kardane yek object
// console.log(JSON.parse(JSON.stringify(sampleObject))) // object kardan data ye JSON



//creat an object
// const person = { firstName: "nahid",lastName: "jafari",age: "30",eyecolor: "blue"};
// person.name = function()
//  {return this.firstName+""+this.lastName}
// console.log(person)


// creat an object
//const car = {type:'fiat' , model:500 , color:'white'};
//console.log(car);



//prompt & alert
// var userinfo = prompt("please write something", "hello")


// alert(userinfo)

//if

// var a = 5;
// var b = 5;
// if(a == b)
// {document.write("khodeshe")}


// if else
// var a = 5;
// var b = 6;
// if(a == b)
// {document.write("khodeshe")}
// else
// {document.write("noch")}




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
         {}
        


        </a>
      </header>
    </div>
  );
}

export default App;
