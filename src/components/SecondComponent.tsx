import * as React from "react";

interface IState {
        data: object,
        error: any,
        isLoaded: boolean,
        items: object,
        message: any
        name: any,
        value: any
        
}

export default class SecondComponent extends React.Component <{}, IState> {

        constructor(props: any) {
                super(props);
                this.state = {
                        data: {},
                        error: null,
                        isLoaded: false,
                        items: {},
                        message: 'Enter a CryptoCoin to find its current value.',
                        name: '',
                        value: ''
                };
            
                this.handleSubmit = this.handleSubmit.bind(this);
        }

        public handleSubmit(event: any) {
                
                const url = "https://min-api.cryptocompare.com/data/all/coinlist"
                fetch(url)
                         .then(res => res.json())
                        .then(
                                (res) => {
                                        this.setState({
                                                isLoaded: true,
                                                items: res
                                        });
                                },
                                (error) => {
                                        this.setState({
                                                error,
                                                isLoaded: true
                                                
                                         });
                                }
                        )
                event.preventDefault();
        }


        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>༼ つ  ͡° ͜ʖ ͡° ༽つ</h1>
                        </div>
                );
        }

        
}