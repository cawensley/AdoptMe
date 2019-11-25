import React, {Component} from "react";
import {Link,Redirect} from '@reach/router';

class ErrorBoundary extends Component {
    state = {hasError: false, reDirect: false};
    static getDerivedStateFromError() {return {hasError: true};}

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error",error,errorInfo);
    }

    componentDidUpdate () {
        if (this.state.hasError) {setTimeout(() => this.setState({reDirect: true}),5000);}
    }

    render () {
        if (this.state.reDirect) {return (<Redirect to="/" />);}
        if (this.state.hasError) {
            return( <h1>There was an error with this listing.
                    <Link to="/">Click here</Link>
                    {" "}
                    to go back to the home page or wait five seconds</h1>
            )}
        return this.props.children
    }
}

export default ErrorBoundary;