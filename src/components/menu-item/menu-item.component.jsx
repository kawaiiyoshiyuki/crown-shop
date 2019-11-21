import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl }) => {
  return (
    <div style={{
        backgroundImage: `url(${imageUrl})`
      }}
       className={`${size} menu-item`}>
      {console.log(size)}
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>
          SHOP NOW</span>
      </div>
    </div>
  )
};

export default MenuItem;