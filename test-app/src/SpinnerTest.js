import React from "react";
import { PushSpinner } from "react-spinners-kit";
 
class SpinnerTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    render() {
        const { loading } = this.state;
        return <PushSpinner size={30} color="blue" loading={loading} />;
    }
}

export default SpinnerTest;