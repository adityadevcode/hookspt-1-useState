// It does a similar thing to the class-based component’s componentDidMount, componentWillUnmount, 
// and componentDidUpdate lifecycle methods
//-provides us an opportunity to write imperative codes that may have side effects on the application
// -Examples of such effects include logging, subscriptions, mutations, etc.
//to make use of side effects in our app
// -This hook uses an array of "dependencies": variables or states that useEffect listen to for changes.
//  When their values change, the main body of the useEffect hook is executed.
// -The return statement of this hook is used to clean methods that are already running, such as timers
// -The first time this hook is called, its main body is the one that is going to be evaluated first
// -All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. 
// -This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks.
// -According to the useeffects run after every completed render,
// but you can choose to fire them only when certain values have changed. 
// This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. 
// When their values change, the main body of the useEffect hook is executed.

// useEffect(() => {
//     // Some code that uses the properties
// }, [myObject.property1, myObject.property2]);

// Useeffect usecases
// Running once on mount: fetch API data
// Running on state change: validating input field
// Running on state change: live filtering
// Running on state change: trigger animation on new array value
// Running on props change: update paragraph list on fetched API data update
// Running on props change: updating fetched API data to get BTC updated price

// When we want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it.
// we are triggering a fetch() GET request when the app is mounted, using an empty array as useEffect dependency.
//*************************************************

// import {useState, useEffect} from 'react';

// // we are fetchingapi here
// const Useeffect = props => {
//     // useState is needed in order to display the result on the screen
//   const [bio, setBio] = useState({});

// // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous
// //  to prevent race conditions. We need to put the async function inside.
// useEffect (()=> {
// const fetchData = async () => {
//     const response = await fetch('https://swapi.dev/api/people/1/');
//     const data = await response.json();
//     console.log(data);
//     setBio(data);
// };
// fetchData();
// },[]);
// //  -Empty dependencies array will make useEffect to run only once
// // at startup because that array never changes

// return (
//     <>
//     <hr/>
//     <h3>UseEffect usecase</h3>
//     <h3>Running once on mount:fetch api data</h3>
//     <p>Aron skywalker bio:</p>
//     {/* pre for preformatted text it will arrange text nicely */}
//     <pre>{JSON.stringify(bio, null, '\t')}</pre>
//     </>
// );
// };

// export default Useeffect;

// **************************************************

// running on state change, validating input field
// -Validating an input while it's receiving characters is another great application for useEffect.
// - Whilst the input is being stored in a state using useState, the validation takes place every time 
// -the input changes, giving immediate feedback to the user.
// we would need to clear that timer by using the clearTimeout() function in the return 
//statement of the useEffect hook

// import { useEffect, useState } from "react";

// const Useeffect = props => {
//     const [input, setInput] = useState('');
//     const [isValid, setIsValid] = useState(false);

//     // react prevent form submission when enter is pressed
//     // we need to create a form handler that would prevent the default form action
//     // 
//     const inputHandler = e => {
//         setInput(e.target.value);
//         console.log (inputHandler);
//     };

//     useEffect(() => {
//         if (input.length < 5 || /\d/.test(input)) {
//             setIsValid(false);
//         } else {
//             setIsValid(true);
//         }
//     }, [input]);

// //  const Useeffect = () => {
//   return (
//     <>
//      <h2>useEffect use case</h2>
//     <h3>Running on state change: validating input field</h3>
//             <form>
//                 <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
//                 <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
//             </form>
//             <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
//         </>
//     );
// //   }
// };

// export default Useeffect

//**************************************************