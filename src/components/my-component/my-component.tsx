import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  @Prop() image = 'neww.jpg';
  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    return (
      <div>
        Hello, Worcvld! I'm {this.getText()}
        <img style={{ height: '20px', width: '20px' }} src={imageSrc} alt="test" />
      </div>
    );
  }
}
