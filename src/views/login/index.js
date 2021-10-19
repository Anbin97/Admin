import "./index.less"
import { Form, Input, Icon } from 'ant-design-vue'
import { Button } from '@/components'
export const LoginForm = {
  name: 'login',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.form.validateFields({ force: true }, async (err, values) => {
        if (!err) {
          this.$router.push("home")
        }
      })
    }
  },
  render() {
    const {
      loading,
      form: { getFieldDecorator }
    } = this
    const labelCol = { span: 5 }
    const wrapperCol = { span: 18 }
    return (
      <div class="login-main">
        <div class="login-content">
          <Form>
            <Form.Item label="账号" labelCol={labelCol} wrapperCol={wrapperCol}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  size="large"
                  type="text"
                  placeholder="请输入用户名"
                />
              )}
            </Form.Item>
            <Form.Item label="密码" labelCol={labelCol} wrapperCol={wrapperCol}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  size="large"
                  type="password"
                  placeholder="请输入密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                loading={loading}
                disabled={loading}
                onClick={this.handleLogin}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(LoginForm)

