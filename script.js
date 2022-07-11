


// what time render, where to render
// ReactDOM.render(
// <ul>
//     <li>Item1</li>
//     <li>Item2</li>
//     </ul>, 
//     document.getElementById("root")
//     )

// example nav bar
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return(
//         <div>
//         <h1>I'm learning React!</h1>
//         </div>
//     )
//     }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//         </div>,
//     document.getElementById("root")
// )

// render ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root")) using vanilla js
// imperative programing - say how everything should happen
// const rootNode = document.getElementById("root")
// const header = document.createElement("h1")
// header.className = "header"
// header.textContent = "Hello, Vanilla JS!"
// rootNode.appendChild(header)

// JSX
// const element = <h1 className="header">This is JSX</h1>
// // outputs a js object
// // react makes objects, dom elements are described
// console.log(element)
// // can only return one parent element - if need >1 elements, be sure to wrap in a div
// ReactDOM.render(element, document.getElementById("root"))

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
    return <div>
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

