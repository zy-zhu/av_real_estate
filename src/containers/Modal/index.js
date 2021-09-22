import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Article from "../Article";

class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }
  componentDidMount() {
    const { isModal } = this.props;

    if (isModal) {
      disableBodyScroll(this.modalRef.current);
    }
  }
  componentWillUnmount() {
    enableBodyScroll(this.modalRef.current);
  }
  render() {
    const { id } = this.props.match.params;

    if (this.props.isModal) {
      return (


        <div
          ref={this.modalRef}
          className="box-container"
          onClick={() => this.props.history.goBack()}
        >


          <div className="modal" onClick={e => e.stopPropagation()}>
            <h1>{id}</h1>
        
          </div>
        </div>
        
      ); 
    } 
    
    
    else {
      return (
        <div className="no-modal-wrapper">
          <h1>{id}</h1>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            
          </p>


        </div>
      );
    }
  }
}

export default withRouter(Modal);
