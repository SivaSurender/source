import { p as proxyCustomElement, H, format, getAssetPath, h } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return myComponentCss; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1],
        "image": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
//# sourceMappingURL=my-component.js.map

//# sourceMappingURL=my-component.js.map