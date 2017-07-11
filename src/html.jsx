import React, { Component } from 'react';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
  try {
    inlinedStyles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

const style = {
  margin: '0',
  padding: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '#F7F7F7',
  fontFamily: ['Avenir Next', 'Segoe UI', 'sans-serif'],
};

export default class HTML extends Component {
  render() {
    return (
      <html lang="en" style={style}>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={'favicon'} />
          <title>CraftBox</title>
          <style
            id="gatsby-inlined-css"
            dangerouslySetInnerHTML={{ __html: inlinedStyles }}
          />
        </head>
        <body style={style}>
          <div
            id="___gatsby"
            style={{
              width: '100%',
              height: '100%',
            }}
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
