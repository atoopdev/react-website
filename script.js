

// make nav bar in JSX
// JSX returns plain js objects
// use Pascal case
function Page(){
    return <div>
        <Header /> 
        <ListContent />
    <Footer />
</div>
} 

function Header(){
    return <header>
        <nav className="nav">
        <img className="nav-logo" src="./react-logo.png"></img>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
}

function ListContent(){
    return <div className="listContent">
                <h1>Fun facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
    </ul>
    </div>
}

function Footer(){
    return <footer className="footer">&copy; 2022 Toop development. All rights reserved.</footer>
}

// functionmust be wrapped in </>
ReactDOM.render(<div>
    <Page />
    </div>, document.getElementById("root"))

