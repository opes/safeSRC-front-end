import React, { Component } from 'react';
import { getAllResources } from '../Utils.js';
import { Link } from 'react-router-dom';
import '../style/Resources.css';

export default class ListPage extends Component {
  state = {
    resource: [],
  };

  componentDidMount = async () => {
    const resourcelist = await getAllResources();

    this.setState({resource: resourcelist});
  };

  render() {
    return (
      <div className="resourcelist">
        {this.state.resource.map(resource => 
          <Link to={`/resource/${resource.id}`}>
            <div className="resource-info">
              <h2 className="name">{resource.src_name}</h2>
              <h3 className="category">{resource.category}</h3>
              <h4 className="tags">{resource.tags}</h4>
              <p className="description">{resource.src_description}</p>
              <section className="resource-address">
                <p className="street-add">{resource.st_address}</p>
                <p className="city">{resource.city}</p>
                <p className="zip">{resource.zip}</p>
                <p className="county">{resource.county}</p>
                <p className="usstate">{resource.usstate}</p>
              </section>
              <section className="contact-info">
                <p className="phone-numbers">
                  Phone numbers: <p className="number1">{resource.number}</p>,
                  <p className="altnumber">{resource.altnumber}</p>
                </p>
                <p className="email">Email: {resource.email}</p>
                <p className="website">Website: {resource.website}</p>
              </section>
            </div>
          </Link>
        )}
      </div>
    );
  }
}
