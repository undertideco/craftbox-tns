import { storiesOf } from '@storybook/react';
import React from 'react';

import CatalogItem from '../CatalogItem/catalog_item';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('CatalogItem', CatalogItem).add('Simple Item', () =>
//   <CatalogItem
//     item={{
//       id: 1,
//       title: "Notebook",
//       image: "http://via.placeholder.com/400x400",
//       price: 999.99,
//       materials: [
//         {
//           title: "Paper",
//           quantity: 200
//         },
//       ],
//     }}
//   ></CatalogItem>
// );
