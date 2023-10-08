import { Component } from 'react'

export default class Blogitems extends Component {
   
  render() {
   let {title ,description,image,link} = this.props;
   
    return (
        <div className="card" >
        <img src={image} className="card-img-top" alt="..."  height="30%" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    )
  }
}
