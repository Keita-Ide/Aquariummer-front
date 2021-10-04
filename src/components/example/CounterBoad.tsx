import React, { FC } from 'react';

const BULK_UNIT = 10;

type Props = {
    count?: number;
    add?: (amount: number) => void;
    decrement?: () => void;
    increment?: () => void;
};

const CounterBoard: FC<Props> = ({
    count = 0,
    add = () => undefined,
    decrement = () => undefined,
    increment = () => undefined,
})=>(
    <div>
        <span>{count}</span>
        <button color="red" onClick={decrement}>
            -1
        </button>
        <button color="green" onClick={increment}>
            +1
        </button>
        <button onClick={() => add(BULK_UNIT)}>
            +{BULK_UNIT}
        </button>
    </div>
);
export default CounterBoard;