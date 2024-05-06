import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import SarchProps from "../src/components/search";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import Head from "next/head"
import AliceCarousel from 'react-alice-carousel';
import Navigation from "../src/components/navigation-chantarelle";
import categoryStripe from "../public/pattern_chant.jpg"
import categoryRanfors from "../public/ranforse.jpg"
import categoryBiz from "../public/biz.jpg"
import categoryChildren from "../public/children.jpg"
import Telegram from "../public/vb.png"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ParentCategoryBlock from "../src/components/category/category-block/ParentCategoryBlock";
import ParentTagBlock from "../src/components/category/category-block/ParentTagBlock";
export default function Home (props) {
	
	const { isLoggedIn } = useAuth();
	
	
	<SarchProps isLoggedIn={isLoggedIn}/>
	const imageUrl = Telegram;

	const handleDownload = () => {
	  const link = document.createElement('a');
	  link.href = imageUrl;
	  link.download = 'telegram.png';
	  document.body.appendChild(link);
	  link.click();
	  document.body.removeChild(link);
	};
	
	
	const { products,  heroCarousel, posts,productCategories,featuredproducts,productTags} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	
	
	
	 

	return (
		<>
	<Head>
    <title>Постільна білизна від виробника LUXTEX</title>
	<meta name="description" content="Купуючи постільну білизну від виробника LUXTEX Ви отримаєтте гарантію якості!Відчуйте наші розкішні тканини!"/>
	<meta name="google-site-verification" content="LA_Al_18WMz2mdVTjsYF-niapRhXBYZuK3_sNMSzLK0" />
	</Head>

			<Layout productTags={productTags}>
	<div className="main ">
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
				
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
			
				    
			
			
			
			<div className="products container mx-auto px-4 my-10  ">
			





            <div class="single-entry-summary">                              
                                                        
                                                        <p className="text-xl">Оскільки Ви вже на цій сторінці, Вас напевно цікавить, як можна отримати або сплатити свій товар.</p>
                                                        
                                                        
                                                        
                                                   
                                                        
                                                        
                                                        
                                                        <p className="mt-3"><strong>Доставка</strong> <strong>по Україні платна – </strong>сплачує Покупець за тарифами перевізника&nbsp;(Нова пошта). </p>
                                                        
                                                        
                                                        
                                                        <p className="mt-3"><strong>Перший спосіб оплати:</strong></p>
                                                        
                                                        
                                                        
                                                        <p>Накладений платіж, якщо ви обираєте даний спосіб доставки, потрібно оплатити&nbsp;мінімальну передоплату у розмірі 200 грн, яка буде знята з вартості товару. А решту оплатите на відділенні при отриманні вашого замовлення. </p>
                                                        
                                                        
                                                        
                                                        <p className="mt-3"><strong>Другий спосіб оплати:</strong></p>
                                                        
                                                        
                                                        
                                                        <p>Розрахуватися за товар можна по передоплаті, сплативши суму замовлення на карту ПриватБанку або на Розрахунковий рахунок. (Карту та рахунок повідомляє наш менеджер після узгодження з вами деталей замовлення)</p>
                                                        
                                                        
                                                        
                                                        <p className="mt-3"><strong>Третій спосіб оплати:</strong></p>
                                                        
                                                        
                                                        
                                                        <p>Товар також можна забрати і оплатити у&nbsp;<strong>нашому магазині</strong>&nbsp;(Чернівці, вул.Головна 265, ТЦ Депот), при цьому час і дату завчасно потрібно узгодити з менеджерами. </p>
                                                        
                                                        
                                                        
                                                        <p>При отриманні посилок при собі мати посвідчення особи і номер ттн, який ми вам надішлемо після відправлення. Отримати посилку накладеним платижем вартістю більше 5 тис грн можна тільки за паспортом.</p>
                                                        
                                                        
                                                        
                                                        <p className="mt-3 text-xl">Гарних покупок!</p>
                                                                                                            </div>





                          
                                                        










                                                    
				</div>
				</div>
				
				
			</Layout>
			</>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			productTags: data?.productTags?.nodes ? data.productTags.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
