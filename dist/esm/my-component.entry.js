import { r as registerInstance, g as getAssetPath, h } from './index-D1fzevXQ.js';
import { format } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return format(this.first, this.middle, this.last);
    }
    image = 'neww.jpg';
    render() {
        const imageSrc = getAssetPath(`./assets/${this.image}`);
        return (h("div", { key: 'a8ffabf4a3682ca1e8bb414fc68527c47c96427f' }, "Hello, Worcvld! I'm ", this.getText(), h("img", { key: '7c2c2ddba84f54280151c6e9e7b101bf45a663ab', style: { height: '20px', width: '20px' }, src: imageSrc, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.js.map

//# sourceMappingURL=my-component.entry.js.map