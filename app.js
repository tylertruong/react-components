// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['cucumbers', 'tomatoes', 'cabbages']}/>
  </div>
)

class GroceryListItem extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    }
  }

  onGroceryItemHover() {
    this.setState({
      hovering: !this.state.hovering,
    })
  }



  render() {

    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
       <li style={style} onMouseEnter={this.onGroceryItemHover.bind(this)} onMouseLeave={this.onGroceryItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem key={groceryItem} groceryItem={groceryItem} />
      )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));

