import React from 'react';
import {Link} from "react-router-dom";

const ProductAdd = ({setProductInfo , Product , createProductForm}) => {
    return(
        <>
            <section className="p-3">
                <img
                    src={require("../../assets/man-taking-note.png")}
                    height="400px"
                    style={{
                        position: "absolute",
                        zIndex: "-1",
                        top: "130px",
                        left: "100px",
                        opacity: "50%",
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p
                                className="h4 fw-bold text-center"
                                style={{ color: "Green" }}
                            >
                                ساخت محصول جدید
                            </p>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: "green" }} />
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <form onSubmit={createProductForm}>
                                <div className="mb-2">
                                    <input
                                        name="productname"
                                        type="text"
                                        value={Product.productname}
                                        onChange={setProductInfo}
                                        className="form-control"
                                        placeholder="نام محصول"
                                        required={true}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        name="photo"
                                        type="text"
                                        value={Product.photo}
                                        onChange={setProductInfo}
                                        className="form-control"
                                        required={true}
                                        placeholder="آدرس تصویر"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        name="productprice"
                                        type="number"
                                        value={Product.productprice}
                                        onChange={setProductInfo}
                                        className="form-control"
                                        required={true}
                                        placeholder="قیمت محصول"
                                    />
                                </div>


                                <div className="mx-2">
                                    <input
                                        type="submit"
                                        className="btn btn-info"
                                        value="ساخت محصول"
                                    />
                                    <Link
                                        to={"/Products"}
                                        className="btn btn-warring mx-2"
                                    >
                                        انصراف
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ProductAdd;