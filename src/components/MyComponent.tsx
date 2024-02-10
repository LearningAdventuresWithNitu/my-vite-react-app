
function MyComponent() {

    const handleClick = () => alert('Hello, React!');

    return (
    <>
        <h1>Hello, React!</h1>
        <button onClick={handleClick}>Click Me</button>
    </>
    );
}

export default MyComponent;