import { Component } from "react";

export class ListItem extends Component {
    render() {
        const { item: {
            title,
            text,
            description,
            photo,
            author,
            id
        }, onRemove } = this.props;
        return (
            <li>
                <h3>{title}</h3>
                <span>{author}</span>
                <button onClick={() => onRemove(id)}>Remove news</button>
                <p>{text}</p>
                <img src={photo} alt={description} />
                <p>{description}</p>
            </li>
        )
    }
}