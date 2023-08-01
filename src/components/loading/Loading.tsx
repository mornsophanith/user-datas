import React from "react";
import { Col, Row } from "react-bootstrap";
import './Style.css'

function LoadingCard(props) {
    return(
        <div key={props.item} id='productCategoryEffect'>
            <Row className="main-item">
                {
                [...Array(props.item)].map((e, key) => (
                <Col xs={6} sm={6} md={6} xl={3} lg={4} className="item-effect">
                    <div className="product addon-box">
                        <div className="pb-categorytab category-tab-right addon-tab">
                            <div id="product_list" className="product_list products-grid">
                                <div className="products row">
                                    <div className="card-loading">
                                        <div className="product-preview loading-wrapper">
                                            <div className="loading-effect-img skeleton-box"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                ))
                }
            </Row>
               
                    
        </div>
        )
}

export default LoadingCard;