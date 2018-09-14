import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from "react";

interface IState {
        currency: any,
        error: any,
        isLoaded: boolean,
        items: object,
        message: any
        name: any,
        value: any
        
}

const styles = {
        textField: {
        margin: 20,
     }
}

export default class FirstComponent extends React.Component<{}, IState> {
        constructor(props: any) {
                super(props);
                this.state = {
                        currency: 'NZD',
                        error: null,
                        isLoaded: false,
                        items: {},
                        message: 'Enter a CryptoCoin to find its current value.',
                        name: 'BTC',
                        value: ''
                };
            
                this.handleNameChange = this.handleNameChange.bind(this);
                this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.displayData = this.displayData.bind(this);
        }
            
        public handleNameChange(event: any) {
                this.setState({name: event.target.value.toUpperCase()});
        }

        public handleCurrencyChange(event: any) {
                this.setState({currency: event.target.value.toUpperCase()});
        }
        
        public handleSubmit(event: any) {  
                // Forming an URL to the API with user input parameters
                const root = "https://min-api.cryptocompare.com/"
                const path = "data/price?"
                const param = "fsym="+ this.state.name + "&tsyms=" + this.state.currency + "&extraParams=nzmsa2018qhen143"
                const url = root + path + param 

                // API call
                fetch(url)
                        .then(res => res.json())
                        .then(
                                (res) => {
                                        // Store retrieved data and alter the display
                                        this.setState({
                                                isLoaded: true,
                                                items: res
                                        });  
                                         this.displayData();
                                },
                                // Invalid response (error handling)
                                (error) => {
                                        this.setState({
                                                error,
                                                isLoaded: true
                                                
                                         });
                                }
                        )
                event.preventDefault();
        }
        
        // Updates components with new data
        public displayData() {
                this.setState({value: this.state.items[this.state.currency]});
                const response = 'Response'
                if (this.state.items[response] === "Error") {
                        this.setState({message: 'Invalid search parameters!'})      
                } else {

                        this.setState({message: '1 '+ this.state.name + ' is worth $' + this.state.value})
                        
                }
        }

        public render() {
                 return (
                        <div className = 'outer' >
                                <div className="containers">
                                                <div className = 'components'>
                                                        <TextField
                                                                id="name"
                                                                label="Name"
                                                                value={this.state.name}
                                                                onChange={this.handleNameChange}
                                                                margin="normal"
                                                                className = 'inputs'
                                                        />
                                                        <TextField
                                                                id="currency"
                                                                label="Currency"
                                                                value={this.state.currency}
                                                                onChange={this.handleCurrencyChange}
                                                                margin="normal"
                                                                className = 'inputs'
                                                                style = {styles.textField}
                                                        />
                                                        <Button variant="contained" 
                                                                color="primary" 
                                                                onClick = {this.handleSubmit}
                                                                style = {{width: 150}}
                                                        >Get Price</Button>
                                                </div>
                                                <label > {this.state.message} </label>
                                </div>
                         </div>
                );
        }
}