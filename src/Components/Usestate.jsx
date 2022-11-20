//class component
// import React, {Component} from "react";
// class Usestate extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             num :0
//         };
//         this.incrementNumber = this.incrementNumber.bind(this);
//     }
// incrementNumber() {
//     this.setState({num:this.state.num+1});
// }
// render(){
//     return(
//         <div>
//             <h2>{this.state.num}</h2>
//             <button onClick={this.incrementNumber}>Increment</button>
//         </div>
//     );
// }
// }

// export default Usestate;

// functional component

// import React, {useState} from 'react';

// const Usestate = () => {
//     const [num,setNum] =useState(0);
//     function incrementNumber() {
//         setNum(num+1);
//     }
//   return (
//     <>
//     Usestate
//     <h1>{num}</h1>
//     <button onClick ={incrementNumber}>Increment</button>
//     </>
//   )
// }

// export default Usestate;

//import {useState} from 'react';
// const [number, setNumber]=useState('')
// const [count, setCount]=useState(0)
// we can initailize our state to any kind of js variables, numbers, string, boolean, array, obj

// import {useState} from 'react';
 
// const Usestate = () => {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(prevCount => prevCount + 5)
//     }

//     return(
//         <div>
//           <h1>{count} </h1>
//           <button onClick={handleClick}>Add Five</button>
//         </div>
//       )
//     }
    
//     export default Usestate;

    // https://www.smashingmagazine.com/2021/11/useful-react-hooks/

    //we can set state for arrays and objects
    // import {useState} from 'react';

    // const Usestate = () => {
    //   //initialize our array nd obj states
    //   const [arr, setArr] = useState ([2,4])
    //   const [obj, setObj] = useState({num:1, name:'Desmond'})

    //   // //set array to the new array values
    //   const handleArrClick =() => {
    //     const newArr = [1,5,7]
    //     setArr([...arr, ...newArr])
    //   }
       
    //   //set obj to the new object values
    //    const handleObjClick = () => {
    //     const newObj ={name: "sam", age:25}
    //     setObj({...obj, ...newObj})
    //    }

    //    return(
    //     <div>
    //       <h2>{arr}</h2>
    //       {console.log(arr)}
    //       <h2>{obj}</h2> 
    //       console.log(obj);
    //       <button onClick={handleArrClick}>SetArrayState</button>
    //       <button onClick={handleObjClick}>SetObjectState</button>
    //     </div>
    //    )
    // }

    // export default Usestate;

    import React from 'react'
    
     function Usestate() {
      return (
        <>
        <h2>Usestate</h2>
        </>
      )
    }
    
    export default Usestate;