import React from 'react';
import {Link} from "react-router-dom";
import Product from "./Product";

const Products = ({products  }) => {

    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <Link
                                    to={"/Products/add"}
                                    className="btn mx-2"
                                    style={{ backgroundColor: "Pink" }}
                                >
                                    ساخت محصول جدید
                                    <i className="fa fa-plus-circle mx-2" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"container"} >
                <div className={"row"}>
                    {products.length>0?(
                        products.map(c=><Product key={c.id} product={c}/>)
                    ) : (
                        <div>محصولی یافت نشد </div>
                    )}
                </div>
            </section>


        </>
    );
};

export default Products;