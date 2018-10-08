import Head from "next/head";
import Link from "next/link";
import { Button, Layout, Menu ,Breadcrumb,Row,Col,Timeline} from "antd";
const { Header, Footer, Sider, Content } = Layout;
import "antd/dist/antd.css";
import "../styles/index.css";
import Myheader  from "../components/Header"
import Myfooter from "../components/Footer"

export default () => (
  <Layout>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Myheader />
    <Content style={{marginTop:'64px'}}>
      <div className="content-top">
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </div>
    </Content>
    <Myfooter />
  </Layout>
);
