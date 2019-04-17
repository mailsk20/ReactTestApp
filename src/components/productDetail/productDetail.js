import React from 'react';
import {connect} from 'react-redux';


import { FetchList } from '../../actions/product.actions';

import SimilarItem from '../SimilarItems/similarItems';

class ProductDetail extends  React.Component{

    constructor(props){
        super();

        //get param Id.
        const { match: { params } } = props;
        this.params = params;
    }

    componentDidMount(){
        this.props.FetchList();
    }


    renderList(){
            const product = this.props.products.filter(x=>x.id == this.params.id)[0];
            if(product == null && product == undefined ){
                return ;
            }
            console.log('product',product);
            return(
                <div className="row">
                <div className="col-md-8">
                    <h3 className="product_title">{product.attributes.title}</h3>
                </div>
                <div className="col-md-8">
                    <div className="prod_img text-center">
                            {/*<img src={`/${product.attributes.links.image}`} className="img-fluid" alt="..." />*/}
                            <img src="/images/product-img.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className="prod_description">
                        <h3 className="desc_title">Description</h3>
                            <p>
                                {product.attributes.description}
                            </p>
                        <ul>
                            <li>1 x Nintendo Switch console</li>
                            <li>1 x Nintendo Switch dock</li>
                            <li>1 x Joy-Con (L) and Joy-Con (R)(Blue and red)</li>
                            <li>1 x Two Joy-Con strap accessories</li>
                            <li>1 x One Joy-Con grip</li>
                            <li>1 x HDMI cable</li>
                            <li>1 x Nintendo Switch AC adapter Console is 1 year warranty by Maxsoft Malaysia </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="product_detail">
                        <i className="far fa-heart"></i> Wishlist
                        <i className="fas fa-share-alt-square"></i> Share
                        <p>Price</p>
                        <h5 className="price">{product.attributes.price}</h5>
                        <p>Item condition</p>
                        <h6>{product.attributes.condition}</h6>
                        <p>Item location</p>
                        <h6>{product.attributes.location}</h6>
                        <p>Seller info</p>
                        <i className="fas fa-user-circle"></i> {product.attributes.seller_name}
                    </div>
                    <div className="contact_info">
                        <p>Interested with the ad? Contact the seller</p>
                        <button type="button" className="btn btn-outline-danger cont-btn"><i className="fas fa-phone"></i> <span className="cont_detail">{product.attributes.phone}</span></button>
                        <button type="button" className="btn btn-outline-danger cont-btn"><i className="fas fa-envelope"></i> <span className="cont_detail">EMAIL</span></button>
                        <button type="button" className="btn btn-danger cont-btn"><i className="far fa-comment-alt"></i><span className="cont_detail">CHAT</span></button>
                    </div>
                </div>
            </div>
            )
    }


    render(){
        return(
            <div className="container-fluid page">
            <div className="container inner_bg">
                {this.renderList()}
                <h3>Similar Items</h3>
                <SimilarItem></SimilarItem>
            </div>
        </div>
        )
    }
}




const mapStatetoProps =(state)=>{
    console.log(state);
    return {products: state.products};
}



export default connect(mapStatetoProps,{
    FetchList
})(ProductDetail);