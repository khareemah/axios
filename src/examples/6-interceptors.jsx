import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const { data } = await authFetch.get('/react-store-products');
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className='text-center'>Interceptors</h2>;
};
export default Interceptors;
