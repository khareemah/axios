import axios from 'axios';
import { useEffect } from 'react';

const FirstRequest = () => {
  const url = 'https://course-api.com/react-store-products';
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchProducts();
  });
  return <h2 className='text-center'>First Request</h2>;
};

export default FirstRequest;
