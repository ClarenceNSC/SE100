// root.js

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
}
  
function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList(props) {
    return props.users.map((user) => {
        return (
            <WelcomeMessage 
                key={user.name}
                name={user.name}
                country={user.country}
            />
        )
    })
}

function WelcomeMessagesSection() {
    const users = [
        { name: 'Tom', country: 'Singapore' },
        { name: 'Jerry', country: 'Malaysia' },
        { name: 'Sarah', country: 'Indonesia' }
    ]

    return <div>
        <WelcomeMessagesTitle />
        <WelcomeMessagesList 
        users={users}
        />
    </div>
}

function App() {
    return <div>
        <WelcomeMessagesSection />
    </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)