import React from 'react';

import './directory.component.scss';
import { sections as data } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const [state] = React.useState({sections: data});

  return (
      <div className='directory-menu'>
        {state.sections.map(({id, ...otherSectionProps }) =>
          <MenuItem key={id} { ...otherSectionProps } />
        )}
      </div>
  )
};

export default Directory;