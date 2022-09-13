import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {GetProduct} from "../../Services/ProductService";
import {CURRENTLINE, CYAN, PURPLE} from "../../Helps/colors";

const ShowProduct = () => {
    const { ProductId } = useParams();

    const [state, setState] = useState({
        product: {},
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: productData } = await GetProduct(ProductId);

                setState({
                    ...state,
                    product: productData,
                });
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    const { product } = state;

    return (
        <>
            <section className="view-contact-intro p3">
                <div className="container">
                    <div className="row my-2 text-center">
                        <p className="h3 fw-bold" style={{ color: CYAN }}>
                            اطلاعات محصول
                        </p>
                    </div>
                </div>
            </section>

            <hr style={{ backgroundColor: CYAN }} />

            {Object.keys(product).length > 0 && (
                <section className="view-contact mt-e">
                    <div
                        className="container p-2"
                        style={{ borderRadius: "1em", backgroundColor: CURRENTLINE }}
                    >
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src={product.photo}
                                    alt=""
                                    className="img-fluid rounded"
                                    style={{ border: `1px solid ${PURPLE}` }}
                                />
                            </div>
                            <div className="col-md-9">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">
                                        نام محصول :{" "}
                                        <span className="fw-bold">{product.productname}</span>
                                    </li>
                                    <li className="list-group-item list-group-item-dark">
                                        قیمت محصول :{" "}
                                        <span className="fw-bold">{product.productprice}</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <Link
                                    to={"/Products"}
                                    className="btn"
                                    style={{ backgroundColor: PURPLE }}
                                >
                                    برگشت به صفحه اصلی
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
export default ShowProduct;