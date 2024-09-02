import {Component} from 'react'
import './index.css'


class ClickCounter extends Component {
    state = {count:0}

    click = () =>{
        this.setState((perv)=>({count:perv.count+1}))
    }

    render() {
        return(
            <div className='bg'>
                <h1 className='head'>The Button has been clicked 
                 <span className='count'> {this.state.count}</span> times</h1>
                <p className='para'>Click the button to increase the count!</p>
                <button className='btn' onClick={this.click}>Click Me!</button>
            </div>

        )
    }
}


export default ClickCounter