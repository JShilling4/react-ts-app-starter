import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';
import { AppDispatch, RootState } from '../redux/store';
import Button from './Button';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrementClick = () => dispatch(increment());
  const handleDecrementClick = () => dispatch(decrement());

  return (
    <div>
      <div>
        <Button
          ariaLabel="Increment value"
          onClick={handleIncrementClick}
          className="rounded-lg p-4 mr-2 text-white"
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={handleDecrementClick}
          className="rounded-lg p-4 ml-2 text-white"
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};
