import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Welcome } from '@storybook/react/demo';
import AppMineCssMod from "./AppMineCssMod";


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('AppMineCssMod', module).add('default', () => (
    <AppMineCssMod />
));
