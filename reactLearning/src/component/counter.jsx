import React, {
    Component
} from 'react';
export default class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value} 123</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}