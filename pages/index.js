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
import profilePic from "../public/pattern_chant.png"
import 'react-alice-carousel/lib/alice-carousel.css';



export default function Home (props) {

	const { isLoggedIn } = useAuth();
	
	
	<SarchProps isLoggedIn={isLoggedIn}/>

	const questionsAnswers = [
	
        {
          id: 2,
            title: "CHANTARELLE",
            description: "Професійна і домашня косметика, косметологічні апарати (Франція, Польща)",
            linkarticle:"/chantarelle"
      
        },
        {
          id: 3,
            title: "ARKANA",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/arkana"
        },
        {
          id: 4,
            title: "NOREL Dr. Wilsz",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/norel"
           
        },
		{
			id: 2,
			  title: "MCCM",
			  description: "Одна з провідних компаній в індустрії краси",
			  linkarticle:"/mccm"
		
		  },
		  {
			id: 3,
			  title: "DERMAOXY",
			  description: "апарат кисневої Безін'єкційної мезотерапії (Данія)",
			  linkarticle:"/dermaoxy"
		  },
		  {
			id: 4,
			  title: "SITTARA",
			  description: "Професійні косметологічні апарати",
			  linkarticle:"/posts/chantarelle"
			 
		  }
	]
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts,news ,ret} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	
	
	
	 

	return (
	

			<Layout>
	<div className="main">
				{/*Hero Carousel*/}
				{/*<div class="marquee text-sm text-3 text-s lg:text-3xl font-thin"><span>Сайт в процесі розробки, можливі помилки в інформації та роботі. Приносимо вибачення за тимчасові незручності! </span></div>*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
			
				{/*<a href="myfile.pdf"  download>Download</a>*/}
			
				{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }
			
			
			
			<div className="px-4">
				<div className="products container mx-auto mt-32  ">
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">НОВИНИ</span></h2>
				
				
			
			
				 <AliceCarousel
        
        items={items}
        responsive={responsive}
		disableDotsControls={true}
		disableButtonsControls={true}
	
    />
							
			
		
			</div>
					{/*Post
					<div className="products container mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
				
					
				{/*Products*/ }
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Новинки</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				{/*Prodduts*/ }
	
				</div>
				</div>
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Наші Марки</span></h2>
			<div className="w-full lg:mb-20">
				<div className="products container mx-auto ">
			
					<Navigation profilePic={profilePic} questionsAnswers={questionsAnswers}/>
				</div>
				</div>
				
			</Layout>
		
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
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
