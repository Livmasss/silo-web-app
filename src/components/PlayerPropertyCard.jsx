import React from "react";

class PlayerPropertyCard extends React.Component{
    render() {
        return (
            <div className="card">
                {this.props.name}
                <div className="card_icon">
                    <img src={this.props.img} alt={this.props.alt}/>
                </div>
                {this.props.desc}
            </div>
        )
    }
}

export default PlayerPropertyCard