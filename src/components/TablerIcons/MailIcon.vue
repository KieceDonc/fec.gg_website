<script>
import {
  mergeProps as _mergeProps,
  createTextVNode as _createTextVNode,
  createVNode as _createVNode,
} from 'vue';
export default {
  name: 'MailIcon',
  props: {
    size: {
      type: String,
      default: '24',
    },
  },

  render() {
    const size = this.size + 'px';
    const allAttrs = {
      width: size,
      height: size,
    };
    return _createVNode(
      'svg',
      _mergeProps(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'icon icon-tabler icon-tabler-mail',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          'stroke-width': '2',
          stroke: 'currentColor',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        allAttrs
      ),
      [
        _createTextVNode('   '),
        _createVNode(
          'path',
          {
            stroke: 'none',
            d: 'M0 0h24v24H0z',
            fill: 'none',
          },
          null
        ),
        _createTextVNode('   '),
        _createVNode(
          'rect',
          {
            x: '3',
            y: '5',
            width: '18',
            height: '14',
            rx: '2',
          },
          null
        ),
        _createTextVNode('   '),
        _createVNode(
          'polyline',
          {
            points: '3 7 12 13 21 7',
          },
          null
        ),
        _createTextVNode(' '),
      ]
    );
  },
};
</script>
