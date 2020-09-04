import React, { Component, createContext } from 'react'

const Context = createContext()

class Provider extends Component {
    state = {
        name : 'Mount Victoria',
        status : 'OPEN'
    }
    render() {
        return(
            <Context.Provider value= {{
              state:this.state,
              changeStatus: () => this.setState({
                status: 'CLOSED'
              })
            }}>
              {this.props.children}
            </Context.Provider>         
        ) 
    }
}

const Trail = props => (
     <div>
        <Context.Consumer>
            {(context) => (
            <div>
              <p>This is the context: {context.state.name}</p>
              <p>This resort is: {context.state.status}</p>
              <button onClick={context.changeStatus}>Close resort</button>
              </div>
              )
            }
        </Context.Consumer>
    </div>
)

const Lift = props => (
    <>
        <Trail />
    </>
)

class Resort extends Component {
    render() {
        return ( 
            <Provider>
                <div>
                    <Lift />
                </div>
            </Provider>
        )
    }
}

export default Resort;