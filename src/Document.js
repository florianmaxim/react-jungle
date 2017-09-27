import * as config from '../config.json';

const _DEFAULT = {
  TITLE: config.title,
  HTML: 'No html.',
  CSS: '/style.css',
  VENDOR: '/vendor.js',
  BUNDLE: '/bundle.js',
  SCRIPTS: config.scripts
};

export default class Document {

  constructor(props){

    const _title   = props!==undefined&&props.title!==undefined?props.title:_DEFAULT.TITLE;
    const _html    = props!==undefined&&props.html!==undefined?props.html:_DEFAULT.HTML;

    const _css     = props!==undefined&&props.css!==undefined?props.css:_DEFAULT.CSS;
    const _vendor  = props!==undefined&&props.vendor!==undefined?props.vendor:_DEFAULT.VENDOR;
    const _bundle  = props!==undefined&&props.bundle!==undefined?props.bundle:_DEFAULT.BUNDLE;

    let   _scripts = props!==undefined&&props.scripts!==undefined?props.scripts:_DEFAULT.SCRIPTS;
    let   _scriptsString = '';

          _scripts.map((script) => _scriptsString += script);

    this.doc =

      `<!doctype html>
      <html>
      <head>
      <meta charset="utf-8"/>
      <link rel="stylesheet" type="text/css" href="${_css}"/>
      <script>
      ${_scriptsString}
      </script>
      </head>
      <body>
      <div id="app">${_html}</div>
      <script src="${_vendor}"></script>
      <script src="${_bundle}"></script>
      </body>
      </html>`;

    return this;
  }

  get(){
    return this.doc;
  }

}
