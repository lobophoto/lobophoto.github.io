import React from 'react';
import styles from './IndexPage.less';
import Header from '../components/Header';
import _ from 'lodash';

class List extends React.Component{
  render(){
    const { match } = this.props;
    const folder = _.get(match, 'params.folder');
    return (
      <div className={styles.normal}>
        <Header subtitle={folder}/>

        ... to be continued
      </div>
    )
  }
}

export default List;