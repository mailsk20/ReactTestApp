import React from 'react';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        console.log('props', this.products);
    }

    renderList() {
        console.log('dd', this.props.product);
        return (
            <div className="col-sm-2 product">
                <div className="card">
                    <img src="/images/product.png" className="card-img img-fluid" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link to={`/details/${this.props.product.id}`} className="item">
                                {this.props.product.attributes.title}
                            </Link>
                        </p>
                        <p className="price">{this.props.product.attributes.price}</p>
                    </div>
                </div>
            </div>


        )
    }

    render() {
        return (
            this.renderList()
        );
    }
}