import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Header />
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
