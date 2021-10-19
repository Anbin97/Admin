import { Button as AntButton } from 'ant-design-vue'
import _ from 'lodash'

const Button = {
  created () {
    this.handleClick = _.debounce(this.handleClick, 300)
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  },
  render () {
    const props = this.$attrs
    const slots = this.$slots.default
    return (
      <AntButton {...{ props }} onClick={this.handleClick}>
        {slots || ''}
      </AntButton>
    )
  }
}

export default Button
