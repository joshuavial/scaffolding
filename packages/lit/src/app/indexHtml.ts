import { ScFile, ScNodeType } from '@source-craft/types';
import camelCase from 'lodash-es/camelCase';
import kebabCase from 'lodash-es/kebabCase';
import upperFirst from 'lodash-es/upperFirst';
import snakeCase from 'lodash-es/snakeCase';

export const indexHtml = (): ScFile => ({
  type: ScNodeType.File,
  content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, viewport-fit=cover"
    />
    <meta name="Description" content="Put your description here." />
    <base href="/" />

    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #ededed;
      }
    </style>
    <title>lit-element</title>
  </head>

  <body>
    <holochain-app></holochain-app>

    <script type="module" src="./out-tsc/holochain-app.js"></script>
  </body>
</html>
`
});
    