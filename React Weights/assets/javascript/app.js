'use strict';

var Constants = {
  appTitle: "Calculate Weight Percentages from One Rep Max",
  benchLabel: "Bench Press",
  overheadLabel: "Overhead Military Press",
  squatLabel: "Squat",
  deadliftLabel: "DeadLift"
};

var WeightBox = React.createClass({
  getInitialState: function() {
    return {
      weights: {bench: 0, overhead: 0, squat: 0, deadlift: 0}
    }
  },
  handleWeightSubmit: function(weights) {
    console.log("handleWeightSubmit");
    this.setState({weights: weights});
  },
  render: function() {
    return (
      <div className="weightBox">
        <h1>{Constants.appTitle}</h1>
        <WeightForm onWeightSubmit={this.handleWeightSubmit} />
        <WeightResult weights={this.state.weights} />
      </div>
    );
  }
});

var WeightForm = React.createClass({
  getInitialState: function() {
    return {bench: '', overhead: '', squat: '', deadlift: ''}
  },
  handleBenchChange: function(e) {
    console.log("handleBenchChange: " + e.target.value);
    this.setState({bench: e.target.value});
  },
  handleOverheadChange: function(e) {
    console.log("handleOverheadChange: " + e.target.value);
    this.setState({overhead: e.target.value});
  },
  handleSquatChange: function(e) {
    console.log("handleSquatChange: " + e.target.value);
    this.setState({squat: e.target.value});
  },
  handleDeadliftChange: function(e) {
    console.log("handleDeadliftChange: " + e.target.value);
    this.setState({deadlift: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log("handleSubmit");
    this.props.onWeightSubmit({bench: this.state.bench.trim(), overhead: this.state.overhead.trim(),
      squat: this.state.squat.trim(), deadlift: this.state.deadlift.trim()});
  },
  render: function() {
    return (
      <form className="weightForm" onSubmit={this.handleSubmit}>
        <label htmlFor="benchInput">{Constants.benchLabel}:</label>
        <input
          type="text"
          placeholder="Enter bench press"
          value={this.state.bench}
          onChange={this.handleBenchChange}
          id='benchInput'
        />
        <label htmlFor="overheadInput">{Constants.overheadLabel}:</label>
        <input
          type="text"
          placeholder="Enter overhead press"
          value={this.state.overhead}
          onChange={this.handleOverheadChange}
          id='overheadInput'
        />
        <label htmlFor="squatInput">{Constants.squatLabel}:</label>
        <input
          type="text"
          placeholder="Enter squat"
          value={this.state.squat}
          onChange={this.handleSquatChange}
          id='squatInput'
        />
        <label htmlFor="deadliftInput">{Constants.deadliftLabel}:</label>
        <input
          type="text"
          placeholder="Enter deadlift"
          value={this.state.deadlift}
          onChange={this.handleDeadliftChange}
          id='deadliftInput'
        />
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
    );
  }
});


var WeightResult = React.createClass({
  getInitialState: function() {
    return {weights: ['', '', '']}
  },
  render: function() {
    var weights = this.props.weights
    return (
      <div className='container'>
        <div className="weightResult">
          <div className='row'>
            <div className="col-sm-3">
              <ul>
                <lh>{Constants.benchLabel}</lh>
                <li>65%: {weights.bench *.65}</li>
                <li>70%: {weights.bench *.70}</li>
                <li>75%: {weights.bench *.75}</li>
                <li>80%: {weights.bench *.80}</li>
                <li>85%: {weights.bench *.85}</li>
                <li>90%: {weights.bench *.90}</li>
                <li>95%: {weights.bench *.95}</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <lh>{Constants.overheadLabel}</lh>
                <li>65%: {weights.overhead *.65}</li>
                <li>70%: {weights.overhead *.70}</li>
                <li>75%: {weights.overhead *.75}</li>
                <li>80%: {weights.overhead *.80}</li>
                <li>85%: {weights.overhead *.85}</li>
                <li>90%: {weights.overhead *.90}</li>
                <li>95%: {weights.overhead *.95}</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <lh>{Constants.squatLabel}</lh>
                <li>65%: {weights.squat *.65}</li>
                <li>70%: {weights.squat *.70}</li>
                <li>75%: {weights.squat *.75}</li>
                <li>80%: {weights.squat *.80}</li>
                <li>85%: {weights.squat *.85}</li>
                <li>90%: {weights.squat *.90}</li>
                <li>95%: {weights.squat *.95}</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <lh>{Constants.deadliftLabel}</lh>
                <li>65%: {weights.deadlift *.65}</li>
                <li>70%: {weights.deadlift *.70}</li>
                <li>75%: {weights.deadlift *.75}</li>
                <li>80%: {weights.deadlift *.80}</li>
                <li>85%: {weights.deadlift *.85}</li>
                <li>90%: {weights.deadlift *.90}</li>
                <li>95%: {weights.deadlift *.95}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <WeightBox />,
  document.getElementById('content')
);
