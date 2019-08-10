import { Layout, Menu, Icon, Badge, Dropdown } from 'antd';
import styles from "./index.css";
import Link from 'umi/link';
import { connect } from 'dva';
const { Header, Footer, Content } = Layout;

export default connect(state => ({
  // 连接购物车状态
  count: state.cart.map(i => i.count).reduce((prev, item) => prev + item, 0),
  cart: state.cart
}))(function (props) {
  const { pathname } = props.location
  const menus = [
    { path: '/', name: '商品' },
    { path: '/users', name: '用户' },
    { path: '/about', name: '关于' }
  ]
  const selectedKeys = menus.filter(menu => {
    if (menu.path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(menu.path)
  }).map(menu => menu.path)
  // 构造购物车列表菜单 
  const menu = (
    <Menu>
      {props.cart.map((item, index) => (
        <Menu.Item key={index}>
          {item.name}×{item.count} <span>¥{item.count * item.price}</span>
        </Menu.Item>
      ))}
    </Menu>);
  return (
    <div className={styles.layout}>
      <Layout className={styles.layout}>
        {/* 页头 */}
        <Header className={styles.header}>
          <Icon type="menu" className={styles.icon} />
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={selectedKeys}
            style={{ lineHeight: "64px", float: "left" }}
          >
            <Menu.Item key="/">
              <Link to="/">商品</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">用户</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
          {/* 购物车信息放在Dropdown以便展示 */}
          <Dropdown overlay={menu} placement="bottomRight">
            <div style={{ float: 'right' }}>
              <Icon type="shopping-cart" style={{ fontSize: 18 }} /> <span>我的购物车</span>
              {/* 购物车项目数量 */}
              <Badge count={props.count} offset={[-4, -18]} />
            </div>
          </Dropdown>
        </Header> {/* 内容 */}
        <Content className={styles.content}>
          <div className={styles.box}>{props.children}</div>
        </Content>
        {/* 页脚 */}
        <Footer className={styles.footer}>开课吧</Footer>
      </Layout>
    </div>
  )
})
