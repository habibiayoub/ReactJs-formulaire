import React, {Component} from 'react';
import Cars from './Cars';

class Form extends Component {

    state= {
        username: '',
        color: '',
        colors: ["", "black", "red", "blue", "green", "pink"],
        comment: ''
    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleComments = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(`username: ${this.state.username} color: ${this.state.color} comment: ${this.state.comment}`)
    }

    render() {
        return( 
            <>
                <Cars color={this.state.color}/>
                <h1>Commentaire</h1>
                <form className="container" onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <label>Pseudo</label>
                        <input className="form-control" type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div className="form-group">
                        <label>Couleur</label>
                        <select className="custom-select mr-sm-2" value={this.state.color} onChange={this.handleColor}> 
                            {
                                this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Commentaire</label>
                        <textarea className="form-control" value={this.state.comment} onChange={this.handleComments} />
                    </div>
                    <button className="btn btn-outline-primary">Valider</button>
                </form>
            </>
        )
    }
}

export default Form;