const Pet = (props)=> {
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("h2",{},props.animal),
        React.createElement("h1",{},props.breed),
    ])
}

const App = () => {
    return React.createElement("div", {}, [
    React.createElement('h1', {} , "Adopt Me"),
    React.createElement(Pet , {
        name: "Jake",
        animal: "Dog",
        breed: "GSD"
    }),
    React.createElement(Pet , {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
    }),
    React.createElement(Pet , {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
    })
    
    ])
}
ReactDOM.render(React.createElement(App),document.getElementById('root'))
