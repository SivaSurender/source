import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyComponent {
  private basePath = 'https://sivasurender.github.io/source/dist/components/assets/neww.jpg';
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
    return (
      <div>
        Hello, Worcvld! I'm {this.getText()}
        <img style={{ height: '20px', width: '20px' }} src={this.basePath} alt="test" />
      </div>
    );
  }
}
