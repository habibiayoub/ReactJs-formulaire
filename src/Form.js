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
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}> 
                            {
                                this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComments} />
                    </div>
                    <button>Valider</button>
                </form>
            </>
        )
    }
}

export default Form;