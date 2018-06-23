import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <div style={{ bottom: 0, textAlign: 'left', color: 'white', width: '90%', margin: '20px auto', fontWeight: 'lighter' }}>
        <div style={{ padding: '30px 0'}}>
          <p style={{
            fontSize: 12,
            fontFamily: 'serif'
          }}>联系方式</p>
          <span style={{ fontSize: 12 }}>13212109806</span>
        </div>
      </div>
    )
  }
}

export default Footer;