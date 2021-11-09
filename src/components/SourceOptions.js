import React, {Component} from 'react';

class SourceOptions extends Component {
    constructor(props) {
        super(props);
        //this.state = {mode:0};
    }
    sourceChanged(event) { //just need to solve below
	//this.setState({mode:parseInt(event.target.value)});
        this.props.trigger(parseInt(event.target.value));
    }
    render() {
        return(
	    <div className="options">
	      <div className="srcOpt" onChange={this.sourceChanged.bind(this)}>
		      <input type="radio" name="src" value="0" id="sample" defaultChecked/><label htmlFor="sample">Sample Questions</label>
		      <input type="radio" name="src" value="1" id="triviaDb" /><label htmlFor="triviaDb">Open Trivia DB</label>
		      {/*<input type="radio" name="src" value="2" id="custom" /><label htmlFor="custom">Custom JSON</label>*/}
	      </div>
	      {/*this.state.mode===2?<FileProcessor/>:``*/}
	    </div>
        )
    }
}

export default SourceOptions;
