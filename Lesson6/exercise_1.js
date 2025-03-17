const Header = () => {
    return (
        <div>
            <h1>Welcome Messages</h1>
            <ul>
                <li>Welcome Tom from Singapore</li>
                <li>Welcome Jerry from Malaysia</li>
                <li>Welcome Sarah from Indonesia</li>
            </ul>
        </div>
    )
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
// method 1: use div to wrap multiple html elements
root.render(
    <div>
        <h1>Welcome Messages</h1>
        <ul>
            <li>Welcome Tom from Singapore</li>
            <li>Welcome Jerry from Malaysia</li>
            <li>Welcome Sarah from Indonesia</li>
        </ul>
    </div>
)
// method 2: function call
// root.render(Header());
// method 3: React components
// root.render(<Header />)