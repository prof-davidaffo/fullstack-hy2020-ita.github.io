import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Element from '../Element/Element';
import { REPOSITORY_URL } from '../../courseConfig';
import './EditLink.scss';

const EditLink = ({ part, letter }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const link = lang === 'fi' ? `osa${part}` : `part${part}`;

  const url = `${REPOSITORY_URL}/edit/source/src/content/${part}/${lang}/${link}${letter}.md`;

  return (
    <Element flex className="container spacing" centered>
      <a className="edit-link" target="__BLANK" href={url}>
        <span>{t('proposeChanges')}</span>
      </a>
    </Element>
  );
};

EditLink.propTypes = {
  part: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
};

export default EditLink;
