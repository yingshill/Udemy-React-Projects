//Higher order component: hoc -> A component(HOC) renders another component(regular)
//resue code
//render hijacking
//prop manipulation
//abstract state
import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {    //WrappedComponent is also a component, and will be a higher order component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}
//requireAuthentification 

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? ( <WrappedComponent {...props} /> ): (<p>This is a authtificated info. Please don't share.</p>)}
        </div>

    )
}

const AuthInfo = requireAuthentification(Info)

const AdminInfo = withAdminWarning(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById("app"))