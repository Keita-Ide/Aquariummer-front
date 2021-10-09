import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { add, decrement, increment } from 'actions';
// import { CounterState } from 'reducer';
import { CounterState, counterSlice } from "../../features/counter";
import CounterBoad from "../../components/example/CounterBoad";

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoad
      count={count}
      add={(amount: number) => dispatch(counterSlice.actions.added(amount))}
      decrement={() => dispatch(counterSlice.actions.decremented())}
      increment={() => dispatch(counterSlice.actions.incremented())}
    />
  );
};

export default EnhancedCounterBoard;
