import React, {Component} from 'react';

class Select extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    // Change value state
    // Pass new value to app.js with callback
    onChange(e){
        this.setState({value: e.target.value }, function() {
            console.log(this.state.value);
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.onChange.bind(this)}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
            </div>
        );
    }
}

export default Select;
