import React from 'react';
import './title.scss'

export const Title = (
  {
    title,
    subtitle,
  }
) => {
  return (
    <div className="section_title">
      <h2 className="title">
        {title}
      </h2>
      <p className="sub_title">
        {subtitle}
      </p>
    </div>
  );
}; 