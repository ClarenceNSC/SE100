
function WelcomeHeader() { 
    return ( 
        <>
           <h1>Weclome Messages </h1>
        </>
    )
}


function WelcomeMessages () { 
    return (
        <ul>
                <li>Welcome Tom from Singapore</li>
                <li>Welcome Jerry from Malaysia</li>
                <li>Welcome Sarah from Indonesia</li>
        </ul>
    )
}


function App () {
    return (
        <>
        {/* Insert all your content here*/} 
        <WelcomeHeader/>
        <WelcomeMessages/>

        </>

)

}


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
root.render(<App />)