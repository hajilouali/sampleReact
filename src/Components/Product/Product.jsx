import React from 'react';
import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from "../../Helps/colors";
import {Link} from "react-router-dom";
const Product = ({product}) => {
    return (
        <div className="col-md-6">
            <div style={{ backgroundColor: "CURRENTLINE" }} className="card my-2">
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img
                                src={product.photo}
                                alt={product.productname}
                                style={{ border: `1px solid ${PURPLE}` }}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    نام محصول :{"  "}
                                    <span className="fw-bold">{product.productname}</span>
                                </li>

                                <li className="list-group-item list-group-item-dark">
                                    قیمت  :{"  "}
                                    <span className="fw-bold">{product.productprice}</span>
                                </li>


                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <Link
                                to={`/Products/${product.id}`}
                                className="btn my-1"
                                style={{ backgroundColor: ORANGE }}
                            >
                                <i className="fa fa-eye" />
                            </Link>

                            <Link
                                to={`/Products/Edit/${product.id}`}
                                className="btn my-1"
                                style={{ backgroundColor: CYAN }}
                            >
                                <i className="fa fa-pen" />
                            </Link>
                            <button className="btn my-1" style={{ backgroundColor: RED }}>
                                <i className="fa fa-trash" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;