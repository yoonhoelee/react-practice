import './App.css';
import React from "react";
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";
function App() {
    let adam = 'Adam';

    return (
        <Container>
            <div className="App">
                <MyHeader/>
                <Counter initialValue={5}/>
            </div>
        </Container>

    );
}

export default App;
