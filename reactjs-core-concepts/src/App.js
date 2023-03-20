import './App.css';

// const h1Style = {
//   color: 'rebeccapurple'
// }

function App() {
  return(
    <div className="container">
      <h1> Learning React</h1>
      <Motizhil></Motizhil>
      <Motizhil></Motizhil>
      <Motizhil></Motizhil>
      <h3>A Break Point</h3>
      <BossName></BossName>
      <BossName></BossName>
    </div>
  )
    
}

function Motizhil (){
  return(
    <div>
      <h1>Location: Motizhil</h1>
      <p>Red Crisent House: level - 10</p>
    </div>
  )
}

function BossName (){
  return(
    <div>
      <h1>Max Ether</h1>
      <p>Profession: TechBoss</p>
    </div>
    
  )
}
export default App;
