class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidUpdate(prevState) {
        if (this.state.count !== prevState.count) {
            localStorage.setItem("Count", this.state.count)
        }
    }

    componentDidMount() {
        try {
            const strCount = parseInt(localStorage.getItem("Count"))
            if (!isNaN(strCount)) {
                this.setState(()=>({count}))
            }
        } catch (e) {

        }
    }
    handleAdd() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })

    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }

        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

/*
let count = 0;
const addOne = () => {
    count += 1
    renderCounterApp()

}
const resetFun = () => {
    renderCounterApp()

}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={resetFun}>Reset</button>
    </div>
)

const appRoot = document.getElementById("app")

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={resetFun}>Reset</button>
        </div>
    )

}

renderCounterApp()
*/