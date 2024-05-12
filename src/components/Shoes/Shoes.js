import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 12;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>This result is : {result}</p>
            <p>This sum is : {sum}</p>
        </div>
    );
};

export default Shoes;