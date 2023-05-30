import axios from 'axios';
import { useEffect } from 'react';

const GlobalInstance = () => {
  const productsUrl = 'https://course-api.com/react-store-products';
  const randomUserUrl = 'https://randomuser.me/api';

  const fetchData = async () => {
    try {
      const { data } = await axios(productsUrl);
      const { data: data2 } = await axios(randomUserUrl);
      console.log(data);
      console.log(data2);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
