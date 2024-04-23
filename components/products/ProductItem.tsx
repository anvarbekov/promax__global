"use client"
import { Product } from '@/lib/models/ProductModel'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { Rating } from './Rating';

export default function ProductItem({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="md:block product__card flex items-center gap-x-1.5 bg-white border-2 border-solid border-teal-600">
      <div className='product__img-box'>
        <div className='product__img-box-inner'>
          <Link href={`/product/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className={`product__img ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              }`}
            />
          </Link>
        </div>
      </div>
      <div className="card__info">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <p className="mb-2">{product.brand}</p>
        <p className="text-2xl">${product.price}</p>
      </div>
    </div>
  )
}
