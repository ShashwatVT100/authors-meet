import {render,screen,fireEvent} from '@testing-library/react';
import Counter from './Counter';
test('renders counter with initial value of 0',()=>{
    render(<Counter/>);
    const countDisplay=screen.getByTestId('count-display');
    expect(countDisplay).toHaveTextContent('Count: 0');
});
test('increment count when increment button is clicked',()=>{
    render(<Counter/>);
    const incrementButton=screen.getByText('Increment');
    const countDisplay=screen.getByTestId('count-display');
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 1');
});
test('decrement count when decrement button is clicked',()=>{
    render(<Counter/>);
    const decrementButton=screen.getByText('Decrement');
    const countDisplay=screen.getByTestId('count-display');
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('Count: -1');
});
test('reset count to 0 when reset button is clicked',()=>{
    render(<Counter/>);
    const incrementButton=screen.getByText('Increment');
    const countDisplay=screen.getByTestId('count-display');
    const resetButton=screen.getByText('Reset');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 3');
    fireEvent.click(resetButton);
    expect(countDisplay).toHaveTextContent('Count: 0');
});
test('handles multiple increment clickes correctly',()=>{
    render(<Counter/>);
    const incrementButton=screen.getByText('Increment');
    const countDisplay=screen.getByTestId('count-display');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 5');
});