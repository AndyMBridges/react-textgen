import React, {Component} from 'react';

class Text extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e){
        // Set value to input value
        this.setState({value: e.target.value}, function() {
            // console.log(this.state.value);
            // Emit onChange property
            // Makes the value accessible in app.js, search for onChange prop
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <div>
                <input type='number' value={this.state.value} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default Text;
