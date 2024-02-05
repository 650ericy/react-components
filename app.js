// TODO
const GroceryListItem = ({ prop }) => (
  <li className="li-hover">{prop}</li>

)

//<li>{prop}</li>;

//takes in array of prop, hence props
//iterate with map and then render prop
const GroceryList = ({ props }) => (
  <ul>
    {props.map((prop, index) => (
      <GroceryListItem key={index} prop={prop} />
    ))}
  </ul>
);

let groceryItems = ['Cucumber', 'Kale'];
// array with items, +

//render GroceryList inside Dom
ReactDOM.render(<GroceryList props={groceryItems} />, document.getElementById('app'));

console.log('working');