import { useState } from 'react';
import axios from 'axios';

const PostRequest = () => {
  const url = 'https://course-api.com/axios-tutorial-post';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email);
      const { data } = await axios.post(url, { name, email });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          register
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
