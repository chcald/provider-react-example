import React, {Component} from 'react'

//a higth order component is a function that takes a component and return a new component
const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props){
            super(props)
            this.state = {
                data:[],
                loading: false,
                loaded: false
            }
        }
         
        // with new async behavior, it's best to load data here in componentDidMount
        // in older react's version we would have used componentWillMount
        componentDidMount(){
            this.setState({loading: true})
            fetch(url)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        loaded: true,
                        loading: false,
                        data
                    })
                    )
                }

        render(){
            return(
                <div>
                    {this.state.loaded 
                        ? <ComposedComponent {...this.state} {...this.props}/>
                        : <div>Loading</div>}
                </div>
            )
        }
    }

const PeopleList = ({data}) => 
    <ol>
        {data.results.map((person, i) => {
        const { first, last } = person.name
        return (<li key={i}>
            { first } { last }
        </li>)
    })}
    </ol>

const RandomMeUsers = DataComponent(PeopleList, 'https://randomuser.me/api?results=10')

export default RandomMeUsers