import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`query {
  heroCarousel: productCategories(where: {slug: "offers"}) {
    nodes {
      id
      children {
        nodes {
          id
          name
          slug
          databaseId
          description
          image {
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  productCategories(first: 30) {
    nodes {
      id
      name
      slug
      image {
        id
        sourceUrl
        srcSet
      }
    }
  }
  productTags(first: 30) {
    nodes {
      id
      name
      slug
      
    }
  }
 news: category(id: "dGVybTox") {
    name
    posts(first: 30) {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      
      }
    }
  }
 arkana: category(id: "dGVybTozMjgw") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
  }
 chantarelle: category(id: "dGVybTozMjc4") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
  }
 norel: category(id: "dGVybTozMjgy") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
  }
mccm:  category(id: "dGVybTozMjg0") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
  }
  sittara: category(id: "dGVybTozMjg2") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
      }
    }
  }

 
  pages(where: {id: 11}) {
    nodes {
      content
    }
  }
  featuredproducts:  products(where: {featured: true}, first: 8) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      shortDescription
      sku
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        id
        featured
      }
      ... on VariableProduct {
        price
        id
        regularPrice
        salePrice
        featured
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
        regularPrice
        salePrice
        featured
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price(format: RAW)
              regularPrice(format: RAW)
              salePrice(format: RAW)
              featured
            }
          }
        }
      }
    }
  }


  products(where: { onSale: true}, first: 5) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      sku
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price(format: RAW)
        regularPrice(format: RAW)
        salePrice(format: RAW)
        id
      }
      ... on VariableProduct {
        price(format: RAW)
        id
        regularPrice(format: RAW)
        salePrice(format: RAW)
      }
      ... on ExternalProduct {
        price(format: RAW)
        id
        externalUrl
        regularPrice(format: RAW)
        salePrice(format: RAW)
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price(format: RAW)
              regularPrice(format: RAW)
              salePrice(format: RAW)
            }
          }
        }
      }
    }
  }







}
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
