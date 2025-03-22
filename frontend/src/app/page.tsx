import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h2>Chào mừng đến với Fitness Platform</h2>
      <p>Vui lòng đăng nhập hoặc đăng ký để sử dụng dịch vụ.</p>
    </Layout>
  );
};

export default Home;
