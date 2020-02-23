// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. this.state is inside the constructor method which allows us to store and update this.state property values.
    // userInput is a key/value pair stored within this.state object and is currently set to an empty string, but can be updated anytime using setState().
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. setState() is updating the state of the userInput based on the value that's being passed through from the onChange event handler.
    // The onChange invokes this.robot() method in the input tag on line 33.
    // As the input value change, this.robot() runs and immediately updates the changes.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. userInput from this.state is destructured to make it easier/shorter to use within return.
    // Rather than having to write this.state.userInput each time it's used, after destructuring, we can just call it by writing userInput.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. this.robot method is invoked by the onChange event handler. Whatever code inside of this.robot will execute as long as there is a change (i.e., user input)*/}
          onChange={ this.robot }
          {/* 5. The current state of the userInput is added in as the value attribute's value. The value attribute specifies what value the input element has.*/}
          value={ userInput }
        />

        <div>
          {/* 6. This is where the each of the robot component is rendered. To render a component, the syntax used is similar to an html self-closing tag. */}
          <GoodRobot
            {/* 7. The userInput state is passed to each of the component as prop in the custom attribute called userInput; it could be named anything, but keeping it as "userInput" helps with consistency and an is easier to remember what the props is. It's important to note that whatever the custom name is, the same name must be used within each robot component when using the userInput prop.

            While each component may contain different JSX code, layout, etc., the userInput value that was passed through will be the same value for all components even when the state of the userInput changes later. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The JSX code will render here within the render method, but it will not compile multiple elements unless they are all encapsulated within a container. In this case it's the div tag, form tag for forms, the React.Fragment/empty brackets <></>, etc. The container must be returned using the return keyword followed by parenthesis just like line 64.
      <div>
        <h3>Good Robot</h3>
        {/* 9. The h4 tag here contains content and the userInput prop. The same content will always display, but as the state of userInput changes/updates, that value will change here as well. */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. This is how we can use the GoodRobot component within other components. We must export it and import it within the component(s) we want to use/render it in.
export default GoodRobot
