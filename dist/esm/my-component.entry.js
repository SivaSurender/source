import { r as registerInstance, g as getAssetPath, h } from './index-D1fzevXQ.js';
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
        const imageSrc = getAssetPath(`./assets/${this.image}`);
        return (h("div", { key: '84378f1a544117073e528be070ed23c39c0ca48d' }, "Hello, Worcvld! I'm ", this.getText(), h("img", { key: 'c4d0e692fe8d1913d7425f2a15a59e41a668572d', style: { height: '20px', width: '20px' }, src: this.basePath || imageSrc, alt: "test" })));
    }
    static get assetsDirs() { return ["assets"]; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.js.map

//# sourceMappingURL=my-component.entry.js.map