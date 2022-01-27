import React from "react";
import './Modal.css'

export default class Modal extends React.Component{
    state = {
        isO: false
    }

    render() {
        return(
            <React.Fragment>
                <button onClick={() => this.setState({isO: true})}>Open modal</button>

                {this.state.isO && <div className="modal">
                    <div className="container modal-body">
                        <p>Modal page!</p>
                        <button onClick={() => this.setState({isO: false})}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}