import React, {Component} from 'react';
import './App.css';
import Header from "./components/header-component/Header";
import Main from "./components/main-component/Main";
import Footer from './components/footer-component/Footer'
import promisifySetState from './PromisifySetState'

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    };

    updateCounter = (data = 'nothing') => {
        /* this.setState({
             counter: ++this.state.counter,
             data: data + " " + this.state.counter
         }, () => {
             console.log(`Set state is a async function, so we can use this callback for some tasks after the new set has been set. ${this.state.counter}`);
         });*/

        promisifySetState(
            this,
            {
                counter: this.state.counter + 1,
                data: data + " " + this.state.counter
            },
            'something',
            'something else'
        ).then(args => {
            console.log(`Set state is a async function, so we can use this callback for some tasks after the new set has been set. ${this.state.counter}`, args);

        })

    };

    /* updateCounter = () => new Promise((resolve, reject) => {
         resolve(this);
     });*/

    render() {
        console.log(this.state.counter);

        return (
            <div className="App">
                <Header counter={this.state.counter} data={this.state.data}/>
                <Main updateCounter={this.updateCounter}/>
                {/*<Main countPromise={this.updateCounter()}/>*/}
                <Footer/>
            </div>
        );
    }

}

export default App;
