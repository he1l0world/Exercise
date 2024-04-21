// import React from 'react';
// import { useState } from 'react';
// const Exercise = () => {
//     const [count, setCount] = useState<number>(0);
//     const onClick = () => setCount(count+1);
//     return (<button onClick={onClick}> "hello world {count}" </button>);
// };




import React from 'react';
class Exercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    onClick = () => this.setState({count: this.state.count+1});

    render() {
        return (<button onClick={this.onClick}> {this.state.count}</button>);
    }
}

export default Exercise;