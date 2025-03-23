import { r as registerInstance, h } from './index-BaBJivJQ.js';
import { format } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return format(this.first, this.middle, this.last);
    }
    image = 'neww.jpg';
    render() {
        return (h("div", { key: 'd8ac1017f32bff84699106354b377c650d7b18f5' }, "Hello, Worcvld! I'm ", this.getText(), h("img", { key: 'e11541f8a336ffde76672e58a1fcd87a41c1c029', style: { height: '20px', width: '20px' }, src: this.basePath, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.js.map

//# sourceMappingURL=my-component.entry.js.map