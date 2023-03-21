import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    const URL = 'https://jsonplaceholder.typicode.com/users'
    fetch(URL).then(resp => resp.json()).then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users: </h2>
      {/* <p>{users.length}</p> */}
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User (props){
  return (
    <div style={{border: '2px solid silver', margin: '1rem', padding: "1rem", backgroundColor: 'rebeccapurple', borderRadius: '0.4rem', color: 'whitesmoke'}}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}
// function Counter(){
//   const [count, setCount] = useState(0);
//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// const products = [
//   {name: "Laptop", Price: "45000", color: "Silver"},
//   {name: "Desktop", Price: "165000", color: "Black"},
//   {name: "Watch", Price: "5500", color: "Silver"},
//   {name: "Mobile", Price: "32000", color: "Blue"},
//   {name: "Sunglass", Price: "3500", color: "Black"},
//   {name: "Shoe", Price: "18000", color: "Khaki"}
// ];

// /*
// {
//         products.map(product => <Product name={product.name} price={product.Price} color={product.color}></Product>)
//       }
//       {/* <Product name="Laptop" price="45000"></Product>
//       <Product name="Desktop" price="165000"></Product>
//       <Product name="Watch" price="5500"></Product> */}

// */

// function Product(props){
//   return (
//     <div className='product'>
//       <h3> {props.name} </h3>
//       <div className='priceNcolorDiv'><p>Price: {props.price} </p> <p>Color: {props.color}</p></div>
//     </div>
//   )
// }

export default App;
