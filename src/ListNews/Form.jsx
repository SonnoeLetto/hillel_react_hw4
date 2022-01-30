import { Component } from "react";
import faker from '@faker-js/faker'
import { getBase64 } from "./utils";

export class Form extends Component {
    state = {
        id: faker.datatype.uuid,
        title: '',
        author: '',
        description: '',
        photo: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const news = this.state;
        const ListItem = {
            ...news,
        }
        this.props.onAddListItem(ListItem);
        this.setState({
            title: '',
            author: '',
            description: '',
            photo: ''
        })
    }

    handleChangePhoto= (e) => {
        const file = e.currentTarget.files[0];
        getBase64(file, (base64) => {
            this.setState({
                photo: base64
            })
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="" >
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input value={this.state.title} onChange={(e) => this.setState({title: e.currentTarget.value})} id="title" name="title"/>
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input type="text" value={this.state.author} onChange={(e) => this.setState({author: e.currentTarget.value})} id="author" name="author"/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea type="text" value={this.state.description} onChange={(e) => this.setState({description: e.currentTarget.value})} id="description" name="description"/>
                    </div>
                    <div>
                        <label htmlFor="photo">Photo: </label>
                        {this.state.photo.length > 0 && 
                            <img width={350} src={this.state.photo} alt="" />
                            }
                        <input type="file" accept=".jpeg,.png" onChange={this.handleChangePhoto} id="description" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}