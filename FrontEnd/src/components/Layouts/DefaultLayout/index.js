import classNames from 'classnames/bind';
import Header from '~/components/Layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import { Layout } from 'antd';
import CustomFooter from '../components/Footer/CustomFooter';

function DefaultLayout({ children }) {
    const { Content } = Layout;

    const cx = classNames.bind(styles);
    return (
        <Layout className={cx('wrapper')}>
                <Header className={cx('header')} />
                <div className={cx('content')}>
                    {children}  
                </div>
                <CustomFooter />
        </Layout>
    );
}

export default DefaultLayout;
