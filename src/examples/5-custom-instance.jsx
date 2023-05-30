import { useEffect } from 'react';
import authFetch from '../axios/custom';

const CustomInstance = () => {
  const randomUserUrl = 'https://randomuser.me/api';
  const fetchData = async () => {
    try {
      const { data } = await authFetch('/react-store-products');
      const { data: data2 } = await authFetch(randomUserUrl);
      console.log(data, data2);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className='text-center'>Custom Instance</h2>;
};

export default CustomInstance;
