export default {
  name: 'BadgeGroup',
  props: {
    badges: {
      required: true,
      type: Array
    },
    value: {
      type: String
    }
  },
  model: {
    event: 'click'
  },
  render(createElement) {
    const self = this;

    const $badges = this.badges.map(
      badge => createElement('p', {
        class: ['badge', 'badge-secondary'],
        attrs: {
          role: 'button',
          'aria-label': 'badge'
        },
        on: {
          click() {
            self.$emit('clicked', badge);
            self.$emit('click', badge);
          }
        }
      }, badge)
    );

    return createElement(
      'div',
      {
        class: 'badges',
        attrs: {
          role: 'list'
        }
      },
      $badges
    );
  }
}