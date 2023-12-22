import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams(); //url의 id를 param으로 받는다.
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/saeyeonKim/hnm-shoppingMall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('--', data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="detail-container">
      <Row>
        <Col className="product-img">
          <img
            src={product?.img}
            alt="상품 사진"
          />
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice === true ? 'Conscious choice' : ''}</div>
          <button className="add-button">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
