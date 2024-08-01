import Products from '@/data/products.json';
import Categories from '@/data/categories.json';
import Link from 'next/link';

export default function ErkekPage() {
  const erkekCategory = Categories.find(category => category.name.toLowerCase() === "erkek");
  
  const erkekProducts = Products.filter(product => product.category === erkekCategory.id);

  return (
    <div>
    <div className='productsCards'>
      {erkekProducts.map((product) => (
        <div className='productCards' key={product.id}>
          <img className='productImg' src={`/images/${product.img}`} alt={product.name} />
          <div className='productTexts'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h3> {product.price}₺</h3>
              <button className='detayBtn'>
                  <Link href={`urunler/${product.id}`}>Detay</Link>
              </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}