import './App.css';
import logo from "./logo.svg"

function Header(props) {
  return (
    <header>
      <h1>
        {props.names}'s Website
      </h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img src={logo} height={200} alt='Using the React logo for store logofor fun'/>
      <h3>
        Welcome to The Atomic Slice
      </h3>
      <p>Menu</p>
      {/* Lists all of the arrays with an id and title */}
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dishes.id}>{dish.title}</li>
        ))}
      </ul>
      
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
    <h3>
      Today is {props.month}/{props.today}/{props.year}
    </h3>
    <p>
      @Copyright {props.year}
    </p>
    </footer>
  );
}

const dishes = [
  "Roasted Steak",
  "Chicken Stew",
  "Veggie Burger"
]

// Transformation objects
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header names="Edward" />
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} today={new Date().getDate()} month={new Date().getMonth()}/>
    </div>
  );
}

export default App;
