import './App.css';
import { AdditionForm } from './components/AdditionForm';
import Home from './components/Home';
import { NewsApi } from './components/NewsApi';
import './components/Home.css';

function App() {
    return (
        <div className="App">
            <Home />
            <hr />
            <hr />
            <div className="wrapper">
                <div className="row">
                    <center>
                        <h2 className='mb-2'>Newspaper</h2> <br></br>
                    </center>

                    <NewsApi />
                </div>
                <div className="row">
                    <center>
                        <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Addition of Two Numbers: </h2>
                    </center>

                    <AdditionForm />
                </div>
            </div>
        </div>
    );
}

export default App;
