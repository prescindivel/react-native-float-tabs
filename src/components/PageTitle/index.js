import React from 'react';
import { string } from 'prop-types';

import { Text } from './styles';

const PageTitle = ({ children }) => <Text>{children}</Text>;

PageTitle.propTypes = {
  children: string.isRequired,
};

export default PageTitle;
