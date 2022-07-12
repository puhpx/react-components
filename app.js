var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.items.map((item) =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  onMouseOver() {
    this.setState({
      hovered: true
    });
  }

  onMouseOut() {
    this.setState({
      hovered: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal',
      fontSize: 20
    };

    return (
      <li style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<GroceryList items={['cucumber', 'kale']} />, document.getElementById("app"));
