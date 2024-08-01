
import Category from '@/data/categories.json';
import { filterProducts } from '@/actions';
import Products from '@/data/products.json';

export default function Form({ searchParams = {} }) { // Varsayılan değer olarak boş bir nesne
    console.log(searchParams);
    let filteredProducts = Products;

    if (searchParams.productName) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchParams.productName.toLowerCase())
        );
    }

    return (
        <>
            <form action={filterProducts}>
                <input placeholder="Ürün arayın" name="productName" type="text" />
                <select name="category">
                    {Category.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button type='submit'>Ara</button>
            </form>
        </>
    );
}