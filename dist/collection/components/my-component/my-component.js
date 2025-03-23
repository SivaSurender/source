import { getAssetPath, h } from "@stencil/core";
import { format } from "../../utils/utils";
export class MyComponent {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "first": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The first name"
                },
                "getter": false,
                "setter": false,
                "attribute": "first",
                "reflect": false
            },
            "middle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The middle name"
                },
                "getter": false,
                "setter": false,
                "attribute": "middle",
                "reflect": false
            },
            "last": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The last name"
                },
                "getter": false,
                "setter": false,
                "attribute": "last",
                "reflect": false
            },
            "image": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "image",
                "reflect": false,
                "defaultValue": "'neww.jpg'"
            }
        };
    }
}
//# sourceMappingURL=my-component.js.map
