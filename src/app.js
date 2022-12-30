import { connect } from "react-redux";


//action
function incerement(number) {
  return {
    type: 'INCEREMENT',
    num:number,
   }
}

function decerement(number) {
  return {
    type: 'DECEREMENT',
    num:number,
   }
}
//end of action

function mapStateToProps(state) {
  return {
    count:state.count
  }
}

const mapDispatchToProps = {
  incerement,
  decerement
}

function App(props) {
  function handleIncerement() {
    props.incerement(1);
  }

  function handleDecerement() {
    props.decerement(1);
  }

  return (
    <div>
      <h1 className="m-2 text-center">{props.count}</h1>
      <div className="text-center">
        <button onClick={handleIncerement} className="btn btn-lg btn-primary m-2">+</button>
        <button onClick={handleDecerement} className="btn btn-lg btn-primary m-2">-</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
