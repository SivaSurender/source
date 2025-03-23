'use strict';

var index = require('./index-S5jlrhCi.js');
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
        return (index.h("div", { key: 'd8ac1017f32bff84699106354b377c650d7b18f5' }, "Hello, Worcvld! I'm ", this.getText(), index.h("img", { key: 'e11541f8a336ffde76672e58a1fcd87a41c1c029', style: { height: '20px', width: '20px' }, src: this.basePath, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
//# sourceMappingURL=my-component.entry.cjs.js.map

//# sourceMappingURL=my-component.cjs.entry.js.map