import React ,{Component}from 'react'
import { add as addition } from './utility'
import"../css/Menu.css"
// function Menu() {
//     console.log(addition(3,4))
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         <li>Sports</li>
//         <li>Entertainment</li>
//         <li>Polititcs</li>

//       </ul>
//     </div>
//   )
// }

// export default Menu

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            age:0,
            name:''
        }
    
    
    }
    
    componentDidMount() {
        console.log("Component Mounted")

    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.count===1){
            return false
        }
        console.log("Should Component Update")
        return true

    }
    componentDidUpdate(){
        console.log("Component didUpdate")

    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Polititcs</li>
                    <li>World</li>
                </ul>
                <h2>{this.state.count}</h2>
                <button style={{backgroundColor:"blue",color:"white",width:"100px",height:"30px"}} onclick={this.handleIncrement}>Increment  </button>
            </div>
        )
    }
}

export default Menu