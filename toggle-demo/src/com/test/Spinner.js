import React from "react";
import { ClassicSpinner } from "react-spinners-kit";

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return (
           <div className='ttt'>
               <div className='divetest'>
                    <ClassicSpinner size={70} color="#686769" backColor="#4b4c56" loading={loading} />
                </div>
            </div>
        )
    }
}

export default Spinner;