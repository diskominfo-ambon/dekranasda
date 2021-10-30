export default {
  name: 'Badge',
  props: ['text'],
  render(createElement) {
    return createElement('li', this.text);
  }
}