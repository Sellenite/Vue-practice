<script>
export default {
    data() {
        return {
            show: false
        }
    },
    render(h) {
        let childNode;
        if (this.show) {
            childNode = h('p', 'content 1');
        } else {
            childNode = h('p', 'content2');
        }

        return h('div', {
            attrs: {
                'data-type': 'render'
            },
            class: {
                'v-render': true
            },
            style: {
                color: 'red'
            }
        }, [
            this.$slots.default,
            this.$slots.default
        ])
    }
}
</script>

