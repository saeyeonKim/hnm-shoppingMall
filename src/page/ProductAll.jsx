import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('---', searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container className="product-container">
        <Row>
          {productList.map((menu, el) => (
            <Col
              lg={3}
              key={el}
            >
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
