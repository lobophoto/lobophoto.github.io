import React from 'react';
import LOGO from '../assets/lobo.png';
import styles from './Header.less';

class Header extends React.Component{
  render(){
    return (
      <header className={styles.header}>
        <div style={{ marginBottom: 30 }}>
          <img  style={{height: 40 }} src={LOGO} alt="logo" />
        </div>
        <span 
          style={{ fontSize: 18 , fontFamily: 'serif', display: 'block', marginBottom: 10, letterSpacing: 5 }}
        >
          萝卜摄影工作室
        </span>
        <span style={{
          letterSpacing: 8.6,
          fontFamily: 'cursive',
          fontSize: 15,
          opacity: 0.6
        }}>LOBO Photography</span>
      </header>
    )
  }
}

export default Header;