import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Counter App</h1>
            <p data-testid='count-display' style={styles.display}>Count: {count}</p>
            <div style={styles.buttonGroup}>
                <button onClick={increment} style={styles.button}>Increment</button>
                <button onClick={decrement} style={styles.button}>Decrement</button>
                <button onClick={reset} style={{...styles.button, backgroundColor: '#6c757d'}}>Reset</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '20px auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    title: { color: '#333' },
    display: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#007bff',
        margin: '20px 0'
    },
    buttonGroup: { display: 'flex', gap: '10px', justifyContent: 'center' },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
    }
};

export default Counter;