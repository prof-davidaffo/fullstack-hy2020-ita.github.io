import './Some.scss';

import React from 'react';
import { REPOSITORY_URL } from '../../courseConfig';

const urls = {
  github: REPOSITORY_URL,
  x: 'https://x.com/moocfi',
  facebook: 'https://www.facebook.com/Moocfi',
  youtube:
    'https://www.youtube.com/watch?v=BZexOyQZMMc&list=PLumQiZ25uijis31zaRL7rhzLalSwLqUtm',
};

export const Some = ({ iconName }) => (
  <a target="__blank" href={urls[iconName]} className="some-logo__link">
    <img
      className="some-logo__image"
      alt={iconName}
      src={require(`../../images/some-logo__${iconName}.svg`)}
    />
  </a>
);
