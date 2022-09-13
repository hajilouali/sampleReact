import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {GetProduct, UpdateProduct} from "../../Services/ProductService";
import {COMMENT, ORANGE, PURPLE} from "../../Helps/colors";

const ProductEdit = ({ forceRender, setForceRender }) => {
    const { ProductId } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        product: {
            productname: "",
            photo: "",
            productprice: "",
        }

    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: ProductData } = await GetProduct(ProductId);
                setState({
                    ...state,
                    product: ProductData,
                });
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const setProductInfo = (event) => {
        setState({
            ...state,
            product: {
                ...state.product,
                [event.target.name]: [event.target.value],
            },
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const { data } = await UpdateProduct(state.product, ProductId);
            if (data) {
                setForceRender(!forceRender);
                navigate("/Products");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const {  product } = state;

    return (
        <>
            <section className="p-3">
                <div className="container">
                    <div className="row my-2">
                        <div className="col text-center">
                            <p className="h4 fw-bold" style={{ color: ORANGE }}>
                                ویرایش مخاطب
                            </p>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: ORANGE }} />
                    <div
                        className="row p-2 w-75 mx-auto align-items-center"
                        style={{ backgroundColor: "#44475a", borderRadius: "1em" }}
                    >
                        <div className="col-md-8">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        name="productname"
                                        type="text"
                                        className="form-control"
                                        value={product.productname}
                                        onChange={setProductInfo}
                                        required={true}
                                        placeholder="نام محصول"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        name="photo"
                                        type="text"
                                        value={product.photo}
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
                                        className="form-control"
                                        value={product.productprice}
                                        onChange={setProductInfo}
                                        required={true}
                                        placeholder="قیمت محصول"
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        type="submit"
                                        className="btn"
                                        style={{ backgroundColor: PURPLE }}
                                        value="ویرایش محصول"
                                    />
                                    <Link
                                        to={"/Products"}
                                        className="btn mx-2"
                                        style={{ backgroundColor: COMMENT }}
                                    >
                                        انصراف
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={product.photo}
                                className="img-fluid rounded"
                                style={{ border: `1px solid ${PURPLE}` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-1">
                    <img
                        src={require("../../assets/man-taking-note.png")}
                        height="300px"
                        style={{ opacity: "60%" }}
                    />
                </div>
            </section>
        </>
    );
};

export default ProductEdit;