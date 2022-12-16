import React, {Component} from 'react';
import './TodoCounter.css';
export default class TodoCounter extends Component {
    render() {
        return (
            <div className="todostat-wrapper">
                <p>Count: {this.props.count}</p>
                <p>Completed: {this.props.done}</p>
                <p>Left: {this.props.count - this.props.done}</p>
            </div>
        );
    }
}
