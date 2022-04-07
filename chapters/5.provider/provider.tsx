import { createSignal, createContext, useContext } from 'solid-js'

const CounterContext = createContext()

const CounterProvider = (props) => {
    const [count, setCount] = createSignal<number>(props.count || 0)
    const store = [
        count,
        {
            increment: () => setCount(count() + 1),
            decrement: () => setCount(count() - 1),
        },

    ]
    return (
        <CounterContext.Provider value={store}>
            {props.children}
        </CounterContext.Provider>
    )
}
const useCounter = () => useContext(CounterContext)

const ChildCounter = () => {
    const [count, { increment, decrement }] = useCounter()
    return (
        <>
        <div>{count()}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </>
    )
}

export { CounterProvider, ChildCounter }