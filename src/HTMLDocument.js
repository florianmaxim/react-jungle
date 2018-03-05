
export default class HTMLDocument {

    constructor(props){
     
        this.document  = `<!doctype html>`;
        this.document  = `<html>`;
        this.document += `<head>`;
        this.document += `<meta charset="utf-8"/>`;
        this.document += `<title>${props.head.title}</title>`;
        this.document += `${props.head.styles}`;
        this.document += `</head>`;        
        this.document += `<body>`;
        this.document += `<div id="root">${props.body.root}</div>`;
        this.document += `<script src="/bundle.js"></script>`;
        this.document += `</body>`;
        this.document += `</html>`;
        
        return this;        
    }

    getDocument(){return this.document}
}