import React from 'react';

export default () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <input type="text" placeholder='Search for items' style={{ height: 40, minWidth: 500, textIndent: 8 }} />
    <button style={{ height: 40, padding: '8px 16px' }}>Search</button>
  </div>
)