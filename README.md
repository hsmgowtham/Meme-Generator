# Meme Generator

This project generates random memes and allows you to add top and bottom text to them. It is built using React JS.

## Demo
https://hsmgowtham.github.io/Meme-Generator/

## Features

- Generate random memes
- Add top and bottom text to memes
- Learnings and implementations:
  - Event Listeners
  - State Management
  - Conditional Rendering
  - Form Handling
  - Managing Side Effects

## What I Have Used

### Event Listeners

Used to handle user interactions such as button clicks.

### State

Managed component-specific data using React's `useState` hook.

#### Props vs State

**Props**:
- Props are properties passed into a component, similar to function parameters.
- They are immutable and are used to pass data to components to control what is displayed.

**State**:
- State represents values managed by a component, similar to variables in a function.
- Used for data that changes over time and needs to be "remembered" by the component.

Examples:
- `React.useState()` returns an array `[currentState, setStateFunction]`.
- Using props: Pass data into a component for display.
- Using state: Maintain values within a component, even when it re-renders.

### State Management Techniques

- **useState Array Destructuring**:
  ```javascript
  const [someVal, setSomeVal] = React.useState("temp_val");
  console.log(someVal); // temp_val
  ```

- **Updating State**:
  ```javascript
  setSomeVal("temp_val_2");
  ```

- **Using State with a Callback Function**:
  ```javascript
  setSomeVal(oldValue => oldValue + "2");
  ```

- **Array Spread Operator**:
  ```javascript
  setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]);
  ```

- **Changing Parent Component State from Child Component**

- **Controlled Form Components**:
  Setting the value attribute in input tags to make form components controlled.

### Conditional Rendering

Render components or elements based on certain conditions.

### Forms

Handle user input and form submissions in React.

### Managing Side Effects

Operations that affect things outside the scope of the function being executed.

Examples of side effects:
- Data fetching
- Subscriptions
- Manual DOM manipulations
- Timers
- Logging

#### useEffect Hook

The `useEffect` hook handles side effects in functional components. It runs after the component renders and can be used for:
- Fetching data
- Setting up subscriptions
- Updating the DOM

## Installation Guide

Follow these steps to get the project up and running on your local machine.

### 1. Update Your System

Ensure your system is updated:

```sh
sudo apt update
sudo apt upgrade
```

### 2. Install Node.js

Install Node.js, which is required to run React applications:

```sh
sudo apt install nodejs
```

Verify the installation:

```sh
node -v
```

### 3. Install npm

Install npm, the Node.js package manager:

```sh
sudo apt install npm
```

Verify the installation:

```sh
npm -v
```

For more detailed instructions, refer to this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04).

### 4. Clone the Repository

Clone this repository to your local machine:

```sh
git clone https://github.com/your-username/meme-generator.git
```

### 5. Install Dependencies

Navigate into the project directory and install the required dependencies:

```sh
cd meme-generator
npm install
```

### 6. Start the React App

Start the development server:

```sh
npm start
```

Your React app should now be running on `http://localhost:3000`.

