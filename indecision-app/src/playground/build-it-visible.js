class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))



/*

let count = 0

const showDetails = () => {
    count += 1
    renderVis()
    return
}

const appRoot = document.getElementById("app")

const renderVis = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>
                {count % 2 === 1 ? "Hide Details" : "Show Details"}
            </button>
            {count % 2 === 1 ? <p>Hellow World</p> : <p></p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderVis()

*/