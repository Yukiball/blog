import Head from "next/head";
import { Button, Layout, Menu ,Breadcrumb,Row,Col} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Myheader  from "../components/Header"
import Myfooter from "../components/Footer"
import "../styles/list.css"
export default (props)=>{
  return (
  <Layout>
    <Head>
      <title>My List title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Myheader />
    <Content style={{marginTop:'66px'}}>
      <Row>
        <Col xs={0} sm={24} md={24} lg={24} xl={24}>
          <div className="top">
            <span>个人文章</span>
          </div>
        </Col>
        <Col xs={24} sm={0} md={0} lg={0} xl={0}>
          <div className="topmini">
            <span>个人文章</span>
          </div>
        </Col>
        <Col xs={{span:22,offset: 1}} sm={{span:20,offset: 2}} md={{span:20,offset: 2}} lg={{span:20,offset: 2}} xl={{span:20,offset: 2}} >
          <div className="title">

          </div>
        </Col>
      </Row>
    </Content>
    <Myfooter />
  </Layout>
)}