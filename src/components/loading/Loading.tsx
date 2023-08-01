import React from "react";
import { Grid } from "@mui/material";
import "./Style.css";

function LoadingCard(props) {
    return(
        <div id="productCategoryEffect">
            <Grid container spacing={2} className="gridEffect">
            {
                [...Array(props.item)].map((e, key) => (
                <Grid item xs={3} sm={6} md={6} xl={3} lg={4} className="itemEffect" key={key}>
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
                </Grid>
                ))
                }
            </Grid>
        </div>
        )
}

export default LoadingCard;