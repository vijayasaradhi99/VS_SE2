import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AdditionForm } from './AdditionForm';
import { NewsApi } from './NewsApi';

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hello,
                    <small className="text-muted">
                        With faded secondary world!
                    </small>
                </h1>
                <div className="container">
                    <div className="row">
                       <right> <AdditionForm /> </right>
                    </div>
                    <div className="row">
                        <NewsApi/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('root'));
