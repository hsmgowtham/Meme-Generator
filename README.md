# Draft README
### What I have used
What I have used in this meme project
1. Event Listeners
2. State
    Props Vs State:
    **Props**:
        refers to the properties being passed into a component in order for it to work correctly, similarly to how a function receives a parameters.
        A Component receving props is not allowed to modify those props(I.e they are immutable)
    **State**:
        refers to values that are managed by a component, similar to variables declared inside a function. Any time you have challenging values
        that should be saved/displayed, you'll likely be using state.
        Ex: React.useState() returns array [undefined, f()]

    1. When would you want to use props instead of state?
    Anytime you want to pass data into a component so that component can determine what will get displayed on the
    2. When would you want to use state instead of props?
    Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component).
screen.
3. useState array destructuring
    Ex: const [someval, setSomeVal] = React.useState("temp_val")
    console.log(someval) => temp_val
5. Updating state
    Ex: setSomeVal("temp_val_2")
4. using state with a callback function
    if we want to use the old value
    setSomeVal(function(oldValue) {
            return oldValue + "2"
        })
5. Array Spread Operator
    Ex: setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
6. Changing the parent component state from child component    
7. controlled Form Components by setting the value to input tags    
3. Conditional Rendering
4. Forms
5. Managing Side Effects
    Side Effects: operations that affect something outside the scope of the function being executed.
    what can't react handle on it's own?
    - (Out)side effects
        - Data Fetching: Making API calls to retrieve or submit data.
        - Subscriptions: Setting up subscriptions to data sources or external services (like WebSockets).
        - Manual DOM Manipulations: Directly manipulating the DOM outside of the React rendering cycle.
        - Timers: Setting up and clearing timers using setTimeout or setInterval.
        - Logging: Sending logs to an external logging service.
    React provides several tools to manage these side effects efficiently:

    useEffect Hook:
    The useEffect hook is the primary way to handle side effects in functional components. It runs after the component renders and can be used for various side effects like fetching data, setting up subscriptions, and updating the DOM.


