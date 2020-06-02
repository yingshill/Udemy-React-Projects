
//forms and inputs

console.log("App.js is running!")

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const numbers = [55, 101, 100]

const onFormSubmit = (e) => {
    e.preventDefault();  // to prevent the default behavior - stop the full page refresh - and run the function right here
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ""
        renderOptions()
    }
}

const removeAll = () => {
    app.options.length = 0  // app.options =[]
    renderOptions()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById("app")


const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
           <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {
                    app.options.map((element)=> <li key={element}>{element}</li>)
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderOptions()

/*
JSX does support array, numbers, strings by default but objects, and ignores boolean and undefined

*/
