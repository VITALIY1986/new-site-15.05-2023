import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Product = ( props ) => {
	const { product,isLoggedIn } = props;
	
	



// @TODO CHANGE regularPrice by registe users.



	return (
		// @TODO Need to hndle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5  hover:shadow relative">

{ product.featured  ? <div className="bg-blue rounded absolute right-2 top-2 z-10 text-white p-2">NEW</div>: ''}
{/* product?.salePrice  ? <div className={`${ isLoggedIn ? 'block bg-red-200 rounded absolute left-2 top-2 z-10 text-white p-2' : 'block bg-red-200 rounded absolute left-2 top-2 z-10 text-white p-2' }`}>{ result.toFixed(0)}%OFF</div> : ''*/}
				<Link href={ `/product/${ product?.slug }`} >
					<a>
						<Image
							className="object-cover bg-gray-100"
							width="500"
							height="500"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</a>
					
				</Link>
				<div className="text-center  ">{product.sku}</div>
				<div className="product-info text-center p-2 md:p-5">
					<h3 className="product-title mt-3 font-medium text-gray-800 overflow-hidden ">
						{ product.name ? product.name : '' }
					</h3>
				
					{/*{product?.regularPrice }/////{product?.salePrice }/////{product?.price}*/}
                 {/*}   {product?.salePrice ?  <div className="">  <strike className="mr-1 text-red-200">₴{par.toFixed(2)}</strike>₴{product?.price}</div> :   <div className="">₴{par.toFixed(2)}</div>}*/}
				 <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
				{/*	{product?.salePrice  ?  <div className={`${ isLoggedIn ? 'block' : 'hidden ' }`}> ₴{par.toFixed(4)}</div> :   ''}*/}
				{/*	<div className="product-description text-sm text-gray-700 " dangerouslySetInnerHTML={{ __html: (product?.description)}}/>*/}
			{/*	<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>*/}
					<AddToCartButton product={ product } />
				</div>

			</div>
		) : (
			''
		)
	);
};

export default Product;