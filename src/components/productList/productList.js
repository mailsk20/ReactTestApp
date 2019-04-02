import React from 'react';
import { connect } from 'react-redux';

import Product from '../product/product';

import { FetchList } from '../../actions/product.actions'; 

export  class ProductList extends React.Component {



    componentDidMount(){
        this.props.FetchList();
    }


    renderProducts(){
        return this.props.products.map((data,index) => {
            return(
                <Product key = {index} product ={data} ></Product>
            );
        });
    }
    render() {
        
        
        return (
            <div className="container-fluid page">
                <div className="container inner_bg">
                    <h3>LISTING</h3>
                    <div className="row">
                        {this.renderProducts()}      
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {products: state.products};
    
}


export default connect(mapStateToProps, {
    FetchList
})(ProductList);