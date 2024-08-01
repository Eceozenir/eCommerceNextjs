import { notFound } from "next/navigation";
import Products from '@/data/products.json';
import Categories from '@/data/categories.json';

export default function ProductDetailPage({ params }) {
    const { id } = params;
    const searchedProduct = Products.find((urun => urun.id == id))
    if(!searchedProduct){

        return notFound()
    }
    const productCategory = Categories.find((category => category.id == searchedProduct.category))
    console.log(productCategory);
    console.log(searchedProduct.img);
    return (
        <div className="detailPage"> 
            <img src={searchedProduct.img} />
            <div className="detailTexts">
                <h1>{searchedProduct.name}</h1>
                <h2>{searchedProduct.price}</h2>
                <p>{searchedProduct.description}</p>
            </div>
        </div>
    );
}