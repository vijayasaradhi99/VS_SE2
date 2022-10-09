import React from 'react';

export class AdditionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null,
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //This is the way to set state for a variable
    };
    // To be called after user clicks on submit.
    mySubmitHandler = (event) => {
        event.preventDefault(); // prevent default behaviour
        //Constructing URL to send to the server.
        const url = `http://localhost:9000/add/${this.state.firstNumber}/and/${this.state.secondNumber}`;
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                debugger;
                this.setState({ queryResult: result.Addition });
            });
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.mySubmitHandler}>
                            <div className="form-group">
                               <strong> <label htmlFor="firstNumber">
                                    Enter First Number:
                                
                                <input
                                    type="number"
                                    name="firstNumber"
                                    id="firstNumber"
                                    className="form-control"
                                    onChange={this.myChangeHandler}
                                /></label></strong>
                            </div>
                            <div className="form-group">
                               <strong> <label htmlFor="secondNumber">
                                    Enter Second Number:
                               
                                <input
                                    type="number"
                                    name="secondNumber"
                                    id="secondNumber"
                                    className="form-control"
                                    onChange={this.myChangeHandler}
                                /> </label></strong>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>
                            Your Addition Result (from server) is:{' '}
                            {this.state.queryResult}{' '}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <h3>
                            Your Addition Result (from ReactJS) is:{' '}
                            {Number(this.state.firstNumber) +
                                Number(this.state.secondNumber)}{' '}
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}
