import React from "react";

class Timer extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            count: 20
        }
    }

    render() {
        const{count} = this.state
        return (
            <div className="timer">
                {count}
            </div>
        )
    }


    componentDidMount(){
        this.myInterval = setInterval(() =>{
            this.setState(prevState => ({
                count: prevState.count -1
            }))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
}
export default Timer