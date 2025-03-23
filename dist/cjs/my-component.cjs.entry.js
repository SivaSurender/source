'use strict';

var index = require('./index-okwTPS5J.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    basePath = 'https://sivasurender.github.io/source/dist/components/assets/neww.jpg';
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return index$1.format(this.first, this.middle, this.last);
    }
    image = 'neww.jpg';
    render() {
        const imageSrc = index.getAssetPath(`./assets/${this.image}`);
        return (index.h("div", { key: '84378f1a544117073e528be070ed23c39c0ca48d' }, "Hello, Worcvld! I'm ", this.getText(), index.h("img", { key: 'c4d0e692fe8d1913d7425f2a15a59e41a668572d', style: { height: '20px', width: '20px' }, src: this.basePath || imageSrc, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
//# sourceMappingURL=my-component.entry.cjs.js.map

//# sourceMappingURL=my-component.cjs.entry.js.map