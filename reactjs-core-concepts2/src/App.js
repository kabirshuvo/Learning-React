import './App.css';

function App() {
const products = [
  {name: "Laptop", Price: "45000", color: "Silver"},
  {name: "Desktop", Price: "165000", color: "Black"},
  {name: "Watch", Price: "5500", color: "Silver"},
  {name: "Mobile", Price: "32000", color: "Blue"},
  {name: "Sunglass", Price: "3500", color: "Black"},
  {name: "Shoe", Price: "18000", color: "Khaki"}
];
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.Price} color={product.color}></Product>)
      }
      {/* <Product name="Laptop" price="45000"></Product>
      <Product name="Desktop" price="165000"></Product>
      <Product name="Watch" price="5500"></Product> */}
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <div className='priceNcolorDiv'><p>Price: {props.price} </p> <p>Color: {props.color}</p></div>
    </div>
  )
}

export default App;
