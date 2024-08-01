import Products from '@/data/products.json'
import Link from 'next/link';

export default function Product(){
    console.log(Products);
    return(
        <div className='productsCards'>
            {Products.map(urun => (
                <div className='productCards' key={urun.id}>
                    <img className='productImg' src={urun.img}></img>
                    <div className='productTexts'>
                        <h3>{urun.name}</h3>
                        <p>{urun.description}</p>
                        <h3>{urun.price}₺</h3>              
                        <button className='detayBtn'>
                        <Link href={`urunler/${urun.id}`}>Detay</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}