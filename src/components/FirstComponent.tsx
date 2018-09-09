import TextField from '@material-ui/core/TextField';
import * as React from "react";

interface IState {
        currency: any,
        error: any,
        isLoaded: boolean,
        items: object,
        name: any,
        value: any
}

export default class FirstComponent extends React.Component<{}, IState> {
        constructor(props: any) {
                super(props);
                this.state = {
                        currency: '',
                        error: null,
                        isLoaded: false,
                        items: {},
                        name: '',
                        value: ''
                };
            
                this.handleNameChange = this.handleNameChange.bind(this);
                this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        }
            
        public handleNameChange(event: any) {
                this.setState({name: event.target.value.toUpperCase()});
        }

        public handleCurrencyChange(event: any) {
                this.setState({currency: event.target.value.toUpperCase()});
        }
        
        public handleSubmit(event: any) {
                alert('A name was submitted: ' + this.state.name);
                
                const root = "https://min-api.cryptocompare.com/"
                const path = "data/price?"
                const param = "fsym="+ this.state.name + "&tsyms=" + this.state.currency + "&extraParams=nzmsa2018qhen143"
                const url = root + path + param 
                fetch(url)
                // fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY&extraParams=nzmsa2018qhen143")
                        .then(res => res.json())
                        .then(
                                (res) => {
                                        this.setState({
                                                isLoaded: true,
                                                items: res
                                        });
                                         // tslint:disable-next-line:no-console
                                         console.log(this.state.items)   
                                         this.displayData();
                                },
                                // Note: it's important to handle errors here
                                // instead of a catch() block so that we don't swallow
                                // exceptions from actual bugs in components.
                                (error) => {
                                        this.setState({
                                                error,
                                                isLoaded: true
                                                
                                         });
                                         // tslint:disable-next-line:no-console
                                        console.log("asas")  
                                }
                        )
                event.preventDefault();
        }
        
        public displayData() {
                this.setState({value: this.state.items[this.state.currency]});
        }

        public render() {
                 return (
                        <form onSubmit={this.handleSubmit}>

                                 <TextField
                                        id="name"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                        margin="normal"
                                        />
                                <TextField
                                        id="currency"
                                        label="Currency"
                                        value={this.state.currency}
                                        onChange={this.handleCurrencyChange}
                                        margin="normal"
                                        />
                                <input type="submit" value="Submit" />
                                <label > {this.state.value} </label>
                        </form>
                );
        }
}