import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Figure from 'react-bootstrap/Figure';

import './Home.css';

const Home = () => {
    const [name, setName] = useState('Vijaya Saradhi Ponnaluri');
    const [desc, setDesc] = useState(
        'Hello Ambigos!!!, This is the SE Lab Assignment Where in which create some sample React project. If you want to edit the name and description, you can use the below inputboxes.'
    );
    return (
        <>
            <div className="cv
            ">
                <div className="left">
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="300x300"
                            src="./albany.png"
                        />
                        
                    </Figure>
                </div>
                <div className=" right">
                    <h2> {name}</h2>
                    <p>{desc}</p>
                </div>
            </div>

            <div className="align">
                <div>
                   <strong> <label>SET NAME</label></strong>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="margin"
                    />
                </div>
                <div>
                   <strong> <label>SET BIOGRAPHY</label>&nbsp; &nbsp;</strong>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                
            </div>
        </>
    );
};

export default Home;
