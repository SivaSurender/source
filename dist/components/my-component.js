import { p as proxyCustomElement, H, format, h } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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