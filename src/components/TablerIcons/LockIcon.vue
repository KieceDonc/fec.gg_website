<script>
import {
  mergeProps as _mergeProps,
  createTextVNode as _createTextVNode,
  createVNode as _createVNode,
} from 'vue';
export default {
  name: 'LockIcon',
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
          class: 'icon icon-tabler icon-tabler-lock',
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
            x: '5',
            y: '11',
            width: '14',
            height: '10',
            rx: '2',
          },
          null
        ),
        _createTextVNode('   '),
        _createVNode(
          'circle',
          {
            cx: '12',
            cy: '16',
            r: '1',
          },
          null
        ),
        _createTextVNode('   '),
        _createVNode(
          'path',
          {
            d: 'M8 11v-4a4 4 0 0 1 8 0v4',
          },
          null
        ),
        _createTextVNode(' '),
      ]
    );
  },
};
</script>
