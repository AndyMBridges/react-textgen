import React, {Component} from 'react';
import Output from './Output';
import Text from './Controls/Text';
import Select from './Controls/Select';
import axois from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            paras: 4,
            html: true,
            text: ''
        }
    }

    // Prepate getText for initial render
    componentWillMount(){
        this.getText();
    }

    // Get ipsum via axois
    getText(){
        axois.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
        .then((response) => {
            this.setState({text: response.data.text}, function() {
                // console.log(this.state);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // Get number from child text component on change
    changeParas(number){
        console.log(number);
        // Set paras to number from input
        // Call getText again to update the API - update the request
        this.setState({paras: number}, this.getText)
    }

    changeHtml(val) {
        // console.log(val);
        this.setState({html: val}, this.getText)
    }

    render() {
        return (
            <div className="container">
                <h1>DummyText Generator</h1>
                <Output value={this.state.text} />
                <h3>Real Time Options</h3>
                <form>
                    <div>
                        <label>Paragraphs: </label>
                        <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
                    </div>
                    <div>
                        <label>Include HTML: </label>
                        <Select value={this.state.html} onChange={this.changeHtml.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
