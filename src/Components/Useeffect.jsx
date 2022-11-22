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

// const { renderIntoDocument } = require("react-dom/test-utils")

// import { getValue } from "@testing-library/user-event/dist/utils"

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

// **************************************

// import {useState, useEffect} from 'react';

// const Useeffect = () => {
// const [count,setCount]= useState(0)
// useEffect(()=>{
//     console.log(count)
// })

// return(
//     <>
//     ....
//     </>
// )
// }
// export default Useeffect;
//we simply logged count in the useeffect, this will run after every render of the component

// we may want to run the hook once (on the mount) in our component.
// we can achieve this by providing a second parameter to useeffect

// ****************************************************
// import {useState, useEffect} from 'react';
// const Useeffect = () => {
//     const [count, setCount] = useState(0);

//     useEffect(()=> {
//         setCount(count + 5)
//     },[])

//     // useEffect has 2 params, first params is the function {},second params is array of dependencies
//     //if the second param is not provided the hook will run continously
//     //passing empty square bracket to the hook as second param, we instruct react to run the useeffect hook only once on the mount
//     return(
//         <>
//         <h1>{count}</h1>
//         <h3>Useeffect example</h3>
//         </>
//     )
//     }

//     export default Useeffect;

// ************************************
//We could also make our side effect run whenever some dependent values change
// This can be done by passing these values in the list of dependencies.
// For instance, we could make the useEffect to run whenever count changes as follows.

// import {useState, useEffect} from 'react';

// const Useeffect = () => {
// const [count, setCount] = useState(0);

// useEffect(() => {
// console.log(count);
// }, [count]);
// // useeffect to run whenever cunt changes as follow
// // useffect will render when setcount changes

// // useEffect(() => {
// //     console.log(count);
// // }, []);
// // we instruct react to run use effect only once
// // in console only once comp is render then it will not run


// return (
//     <div>
//         <h3>{count}</h3>
//         {/* <h3>{setCount}</h3> */}
//         <button onClick={()=> setCount(count + 5 )}>Increment</button>
//     </div>
// );
// };

// export default Useeffect;

//*********************************** */
// useeffect will run when either of these two conditions is first = (second) => {third}
// 0nmount-after the component is rendered
// when the value of count changes

// On mount, the console.log expression will run and log count to 0. Once the count is updated,
//  the second condition is met, so the useEffect runs again, this will continue whenever the button is clicked.

// Once we provide the second argument to useEffect, it is expected that we pass all the dependencies to it.

// import React from 'react'
// import {useState, useEffect} from 'react';

// function Useeffect() {
//     const [count, setCount] = useState(0);
//     useEffect (()=> {
//         console.log('mounted');
//     })
//   return (
//     <>
//     <p>Useeffect</p>

//     </>
//   )
// }

// export default Useeffect

//*************************
 
// FETCHING AND REFETCHING DATA WITH useEffect #
// One of the commonest use cases of the useEffect hook is fetching and prefetching data from an API.

// To illustrate this, we’ll use fake user data I created from JSONPlaceholder to fetch data with the useEffect hook.
// import {useEffect, useState} from "react";
// import axios from "axios";

// function Useeffect() {
//     // created a users state using useState hook
//     const [users, setUsers] =useState([]);
//     const endPoint =
//     "https://my-json-server.typicode.com/ifeanyidike/jsondata/users";

// useEffect(() => {
//     const fetchUsers = async () => {
//         // this is async process, we used async/await function
//         const {data}= await axios.get (endPoint);
//         setUsers(data);
//         console.log(data);
//         // console.log(setUsers);
//     };
//     fetchUsers();
// }, []);
// // empty param hook it will called just once when components mounts

// return (
//     <>
//     {users.map((user) => (
//         // map creates a new array from calling a function for every array element
//         <div>
//             <h2>{user.name}</h2>
//             <p>Occupation:{user.job}</p>
//             <p>Sex:{user.sex}</p>
//         </div>
//     ))}
//     </>
// )

// }

// export default Useeffect

//********************************************** */
//we are using 2 use effects
// Here we created two useEffect hooks. In the first one, we used the dot then syntax to get all users from our API. 
// This is necessary to determine the number of users.

// We then created another useEffect hook to get a user based on the id. This useEffect will refetch the data whenever
//  the id changes. To ensure this, we passed the id in the dependency list.

// Next, we created functions to update the value of our id whenever the buttons are clicked. Once the value of the
//  id changes, the useEffect will run again and refetch the data.

// We can also refetch the data when some conditions change. We’ll show this in the code below.

import { useEffect, useState } from "react";
import axios from "axios";

function Useeffect() {
  const [userIDs, setUserIDs] = useState([]);
  const [user, setUser] = useState({});
  const [currentID, setCurrentID] = useState(1);

  const endPoint =
    "https://my-json-server.typicode.com/ifeanyidike/userdata/users";

  useEffect(() => {
    axios.get(endPoint).then(({ data }) => setUserIDs(data));
  }, []);

  useEffect(() => {
    const fetchUserIDs = async () => {
      const { data } = await axios.get(`${endPoint}/${currentID}`);
      setUser(data);
    };

    fetchUserIDs();
}, [currentID]);

  const moveToNextUser = () => {
    setCurrentID((prevId) => (prevId < userIDs.length ? prevId + 1 : prevId));
  };
  const moveToPrevUser = () => {
    setCurrentID((prevId) => (prevId === 1 ? prevId : prevId - 1));
  };
  return (
    <div>
        <div>
          <h2>{user.name}</h2>
          <p>Occupation: {user.job}</p>
          <p>Sex: {user.sex}</p>
        </div>
  
      <button onClick={moveToPrevUser}>Prev</button>
      <button onClick={moveToNextUser}>Next</button>
    </div>
  );
}

export default Useeffect;



// If we want, we can even clean up or cancel the promise-based token in Axios, we could do that with 
// the clean-up method discussed above.

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
// Running on state change: live filtering
// We can use useEffect to filter an array "on the fly" by typing letters into an input element.
// To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect
// that will be triggered when the input changes, thanks to useEffect dependencies.

// import { useEffect, useState } from "react";

// const array = [
//   { key: "1", type: "planet", value: "Tatooine" },
//   { key: "2", type: "planet", value: "Alderaan" },
//   { key: "3", type: "starship", value: "Death Star" },
//   { key: "4", type: "starship", value: "CR90 corvette" },
//   { key: "5", type: "starship", value: "Star Destroyer" },
//   { key: "6", type: "person", value: "Luke Skywalker" },
//   { key: "7", type: "person", value: "Darth Vader" },
//   { key: "8", type: "person", value: "Leia Organa" },
// ];

// const Useeffect = (props) => {
//   const [inputValue, setInputValue] = useState("");
//   const [inputType, setInputType] = useState("");
//   const [filteredArray, setFilteredArray] = useState(Array);

//   const inputValueHandler = (e) => {
//     setInputValue(e.target.value);
//   };

//   const inputTypeHandler = (e) => {
//     setInputType(e.target.value);
//   };

//   useEffect(() => {
//     setFilteredArray((_) => {
//       const newArray = array
//         .filter((item) => item.value.includes(inputValue))
//         .filter((item) => item.type.includes(inputType));
//       return newArray;
//     });
//   }, [inputValue, inputType]);

//   // now prepare array to rendered

//   const listItems = filteredArray.map((item) => (
//     <>
//       <tr>
//         <td style={{ border: "1px solid blue", padding: "0 1rem" }}>
//           {item.type}
//         </td>
//         <td style={{ border: "1px solid red", padding: "0 1rem" }}>
//           {item.value}
//         </td>
//       </tr>
//     </>
//   ));

//   return (
//     <>
//       <hr />
//       <h2>useEffect use case</h2>
//       <h3>Running on state change: live filtering</h3>
//       <form
//         style={{
//           maxWidth: "23rem",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div>
// {/*The htmlFor property sets or returns the value of the for attribute of a label.
// The for attribute specifies which form element a label is bound to.  */}
//           <label htmlFor="input-type">
//             Filter by <b>type</b>
//           </label>
//           <br />
//           <input
//             type="text"
//             id="input-type"
//             autoComplete="off"
//             onChange={inputTypeHandler}
//             style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
//           />
//         </div>
//         <div>
//           <label htmlFor="input-value">
//             Filter by <b>value</b>
//           </label>
//           <br />
//           <input
//             type="text"
//             id="input-value"
//             autoComplete="off"
//             onChange={inputValueHandler}
//             style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
//           />
//         </div>
//       </form>
//       <br />
//       <table
//         style={{ width: "20rem", border: "2px solid purple", padding: "0 1rem" }}
//       >
//         <tr>
//           <th>Type</th>
//           <th>Value</th>
//         </tr>
//         {listItems}
//       </table>
//     </>
//   );
// };

// export default Useeffect;

// *****************************************
// Running on state change: trigger animation on new arrayValue
// We can use the useEffect hook to trigger an animation on a shopping cart 
// as a side effect of adding a new product to it. In this case, we'll need a state 
// to handle the cart items, and another state to handle the animation trigger.

// As we are using a timer inside the useEffect, It is a good practice to clear it before
// it gets set again by using the return statement of the useEffect,
// which gets executed before the main body of the useEffect hook gets evaluated
// (except for the first render).

// import { useState, useEffect } from 'react';
// import classes from './UseCaseAnimation.module.css';

// const products = [
//     'Death Star',
//     'CR90 corvette',
//     'Millennium Falcon',
//     'X-wing fighter',
//     'TIE fighter'
// ];

// const Useeffect = props => {
//     const [cart, setCart] = useState([]);
//     const [triggerAnimation, setTriggerAnimation] = useState(false);

//     // Add item to the cart (array)
//     const clickHandler = e => {
//         e.preventDefault();
//         setCart(prevCart => {
//             const newCart = [...prevCart];
//             newCart.push(e.target.value);
//             return newCart;
//         });
//     };

//     // Clear the cart (array)
//     const clearHandler = e => {
//         e.preventDefault();
//         setCart([]);
//     };

//     // Trigger cart animation
//     useEffect(() => {
//         setTriggerAnimation(true);

//         const timer = setTimeout(() => {
//             setTriggerAnimation(false);
//         }, 900); // The duration of the animation defined in the CSS file

//         // Clear the timer before setting a new one
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [cart]);

//     const cartClasses = triggerAnimation ? `${classes['jello-horizontal']} ${classes.cart}` : classes.cart;

//     const itemsOnSale = products.map(itemOnSale => {
//         return <li><form><span className={classes.item}>{itemOnSale}  <button onClick={clickHandler} value={`"${itemOnSale}"`}>Add to cart</button></span></form></li >;
//     });

//     const cartItems = cart.map(item => {
//         return <li>{item}</li>;
//     });

//     return (
//         <>
//             <hr />
//             <h2>useEffect use case</h2>
//             <h3>Running on state change: trigger animation on new array value</h3>
//             <h4 style={{ color: 'blue' }}>Starship Marketplace</h4>
//             <ul>
//                 {itemsOnSale}
//             </ul>
//             <div className={cartClasses}><span>Cart</span></div>
//             <div>
//                 <p>Elements in cart:</p>
//                 <ul>
//                 {cartItems}
//                 </ul>
//             </div>
//             <form><button className={classes.margin} onClick={clearHandler} value="clear">Clear cart</button></form>
//         </>
//     );
// }; 

// export default Useeffect;

//*****************************************
//  Running on props change update paragraph list on fetched API data update
// we want to trigger a state update due to an updated fetch() call. We are sending the fetched data
//  to a child component, and whenever that data is changed, the child component re-process it.

// import { useState, useEffect, useCallback } from "react";

// const Useeffect = props => {
//     const [baconParagraphText, setBaconParagraphText] = useState([]);

//     useEffect(() => {
//         setBaconParagraphText(props.chopBacon.map(piece => <p key={Math.random()}>{piece}</p>));
//     }, [props.chopBacon]); // Props

//     return (
//         <>
//             <p>Number of paragraphs: {baconParagraphText.length}</p>
//             {baconParagraphText}
//         </>
//     );
// };

// const UseCaseUpdateFetch = () => {
//     const [bacon, setBacon] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const submitHandler = async e => {
//         e.preventDefault();

//         setIsLoading(true);
//         const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`);
//         const data = await response.json();
//         setIsLoading(false);
//         setBacon(data);
//     };

//     return (
//         <>
//             <hr />
//             <h2>useEffect use case</h2>
//             <h3>Running on props change: update paragraph list on fetched API data update</h3>
//             <form onSubmit={submitHandler}>
//                 <label htmlFor="paragraphs" style={{ display: "block", marginBottom: "1rem" }}>How many paragraphs of "Bacon ipsum" do you want?</label>
//                 <select id="paragraphs" name="paragraphs">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                 </select>
//                 <input type="submit" value="Show me the bacon!" style={{ marginLeft: "1rem" }} /> {isLoading && <span>Getting paragraphs... 🐷</span>}
//             </form>
//             <BaconParagraphs chopBacon={bacon} />
//         </>
//     );
// };

// export default Useeffect;

//******************************************* */
//Running on props change: updating fetched API data to get updated BTC price
// - useEffect is used to fetch new data from an API every 3 seconds. 
// -The child component useEffect receives the time as dependency and every time that dependency changes, a new fetch() is triggered.
// This way, we can have an updated BTC exchange rate in our app.

// import { useState, useEffect } from "react";
// // import classes from './UseCaseUpdateApi.module.css';

// // SECTION - Functions

// const getCurrentTime = () => {
//     const now = new Date();
//     const time = now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2) + ':' + ('0' + now.getSeconds()).slice(-2);
//     return time;
// };

// // SECTION - Components

// const ExchangeRate = props => {
//     const [exchangeRate, setExchangeRate] = useState(0);
//     const [isAnimated, setIsAnimated] = useState(false);

//     useEffect(() => {
//         const getExchangeRate = async () => {
//             // Please don't abuse my personal API key :)
//             const response = await fetch("https://api.nomics.com/v1/exchange-rates?key=86983dc29fd051ced016bca55e301e620fcc51c4");
//             const data = await response.json();
//             console.log(data.find(item => item.currency === "BTC").rate);
//             setExchangeRate(data.find(item => item.currency === "BTC").rate);
//         };
//         getExchangeRate();

//         // Triggering animation
//         setIsAnimated(true);
//         const classTimer = setTimeout(() => {
//             setIsAnimated(false);
//         }, 1500);

//         // Clear the timer before setting a new one
//         return () => {
//             clearTimeout(classTimer);
//             setExchangeRate(exchangeRate); // Preventing Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
//         };
//     }, [props.onTime]);

//     const priceClasses = isAnimated ? `${classes.price} ${classes.heartbeat}` : `${classes.price}`;

//     return <div className={priceClasses}>USD <b>{exchangeRate}</b></div>;
// };

// const Useeffect= props => {
//     const [time, setTime] = useState(getCurrentTime());

//     // Trigger the update interval on startup (mount)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(getCurrentTime());
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []); // Empty dependencies array, so it will run once at mount and keep running 'in the background'

//     console.log(time);

//     return (
//         <>
//             <hr />
//             <h2>useEffect use case</h2>
//             <h3>Running on props change: updating fetched API data to get updated BTC price</h3>
//             <span>Last updated: {time} (polling every 3 seconds)</span><ExchangeRate onTime={time} />
//         </>
//     );
// };

// export default Useeffect;


///**************************************** */















