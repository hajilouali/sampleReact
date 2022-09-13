import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react";
import Products from "./Components/Product/Products";
import ProductAdd from "./Components/Product/ProductAdd";
import ProductEdit from "./Components/Product/ProductEdit";
import ProductDelete from "./Components/Product/ProductDelete";
import Navbar from "./Components/Layout/Navbar";
import {CreatProduct, GetAllProducts} from "./Services/ProductService";
import ShowProduct from "./Components/Product/ShowProduct";

function App() {
    const [AllProducts, SetProducts] = useState([]);
    const [getProduct, setProduct] = useState({
        productname: "",
        photo: "",
        productprice: "",

    });
    const [forceRender, setForceRender] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: productData } = await GetAllProducts();
                SetProducts(productData);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: productData } = await GetAllProducts();
                SetProducts(productData);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, [AllProducts]);
    const createProductForm = async (event) => {
        event.preventDefault();
        try {
            const { status } = await CreatProduct(getProduct);

            if (status === 201) {
                setProduct({});
                setForceRender(!forceRender);
                navigate("/Products");
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    const setProductInfo = (event) => {
        setProduct({
            ...getProduct,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Navigate to={"/Products"}/>}></Route>
                <Route path="/Products" element={<Products products={AllProducts}/>}/>
                <Route path="/Products/Add" element={<ProductAdd
                    setProductInfo={setProductInfo}
                    Product={getProduct}
                    createProductForm={createProductForm}
                />}/>
                <Route path="/Products/Edit/:ProductId" element={<ProductEdit
                    forceRender={forceRender}
                    setForceRender={setForceRender}
                />}/>
                <Route path="/Products/Delete/:ProductId" element={<ProductDelete/>}/>
                <Route path="/Products/:ProductId" element={<ShowProduct/>}/>

            </Routes>
        </div>

    );
}

export default App;
