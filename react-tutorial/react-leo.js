
class Opinion extends React.Component{
  render() {
	  return(
	  <div>
	  <textarea/>
	  <button>Comenta</button>
	  </div>
	  )
  }
  
}

class LikeProfile extends React.Component{
	constructor(props) {
    super(props);
  }	
  render() {
	  return(
	  <div>
	  <h1>{this.props.name}</h1>
	  <p>{this.props.desc}</p>
	  <Opinion />
	  </div>
	  )
  }
  
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <LikeProfile name={this.props.name} desc={this.props.desc} />;
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
		Like {this.props.name}
		</button>
    );
  }
}

class LikeLeo extends React.Component {
  render() {

    return (
	  <div className="container">
	  <LikeButton name="George" desc="Soy un manaba"/>
	  <LikeButton name="Julio" desc="Soy del sur" />
	   <LikeButton name="Leonardo" desc="Soy de Sambo" />
		</div>
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeLeo />, domContainer);