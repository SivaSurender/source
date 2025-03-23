'use strict';

var index = require('./index-okwTPS5J.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
        return (index.h("div", { key: 'a8ffabf4a3682ca1e8bb414fc68527c47c96427f' }, "Hello, Worcvld! I'm ", this.getText(), index.h("img", { key: '7c2c2ddba84f54280151c6e9e7b101bf45a663ab', style: { height: '20px', width: '20px' }, src: imageSrc, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
//# sourceMappingURL=my-component.entry.cjs.js.map

//# sourceMappingURL=my-component.cjs.entry.js.map