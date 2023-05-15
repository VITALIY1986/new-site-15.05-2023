import Layout from "../../src/components/Layout";
import Post from "../../src/components/Post_article";
import client from '../../src/components/ApolloClient';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { AuthContextProvider } from '../../src/components/login-function/auth-context';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
export default function Home (props) {
    
	
    const [sittara, setPosts] = useState(props.sittara);
    const [hasMore, setHasMore] = useState(true);

	
    const getMorePost = () => {
       
        const newPosts = props.sittara;
        return(
            
        setPosts((post) => [...post, ...newPosts]))
      };
    
	

	return (
        <Layout>
       
	   <InfiniteScroll
          dataLength={sittara.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h3> Loading...</h3>}
          endMessage={<h4>Nothing more to show</h4>}
        >
         
          { 
							sittara.map( (post,index) => <Post key={ post.id } index={index} post={ post } /> )
					 }
        </InfiniteScroll>
        
      </Layout>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
	
			
			sittara: data?.sittara?.posts?.nodes ? data.sittara.posts.nodes : [],
		
		},
		revalidate: 1
	}

};
