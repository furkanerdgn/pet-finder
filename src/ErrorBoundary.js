import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component{
    state ={
        hasError:false,
        redirect:false
    }

    static getDerivedStateFromError(){
        return {hasError:true}
    }

    componentDidCatch(error,info){
        console.error(error,info)
    }
    componentDidUpdate(){
        if(this.state.hasError){
            setTimeout(()=>this.setState({redirect:true}),5000);
        }
    }
    render(){
        if(this.state.redirect){
            return  <Navigate to="/"/>   
        }
        else if(this.state.hasError){
            return(
                <h2>we have error<Link to="/">Click Here!</Link></h2>
            )
        }
        return this.props.children;

    }

}

export default ErrorBoundary;