import React, { Component } from 'react';
import { connect } from 'react-redux'

class CertificateContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    render() {
        return (
            <>
                <div class="certificatie__container bd-grid">
                    <div class="certificate__content">
                        <h3 class="certificate__title">{this.props.certificateName}</h3>
                        <p class="certificate__description">{this.props.certificateDescription}</p>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) =>{
    const {certificateName,certificateDescription} = state.certificateReducer;
	return {
		certificateName,
        certificateDescription
	}
}

export default connect(mapStateToProps,null)(CertificateContainer);
