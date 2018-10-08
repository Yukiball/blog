import Head from "next/head";
import { Button, Layout, Menu, Breadcrumb, Row, Col, Carousel } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Myheader from "../components/Header";
import Myfooter from "../components/Footer";

export default () => (
  <Layout>
    <Head>
      <title>My About title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Myheader />
    <Content
      style={{
        marginTop: "64px",
      }}
    >
      <div className="pic-box">
        <Carousel autoplay >
          <div className="pic">
            <img src="../static/img/logo.png" />
            <div className="world">～欢迎来看雪球的demo展示～</div>
          </div>
          <div className="pic">
            <img src="../static/img/2048.png" />
            <div className="world">～欢迎来看雪球的demo展示～</div>
          </div>
          <div className="pic">
            <img src="../static/img/ice.png" />
            <div className="world">～欢迎来看雪球的demo展示～</div>
          </div>
          <div className="pic">
            <img src="../static/img/list.png" />
            <div className="world">～欢迎来看雪球的demo展示～</div>
          </div>
        </Carousel>
      </div>
    </Content>
    <Myfooter />
    <style jsx>
      {`
        .pic-box {
          margin: 0 auto;
          width: 70%;
          padding :20px;
        }
        .pic{
          padding:50px
        }
        .pic img, .pic div{
          margin: 0 auto;
        }
        .world {
          padding-top:20px;
          height :28px;
          font-size:20px;
          line-height:28px;
          vertical-align:middle;
          text-align:center;
        }
        div img {
          width: 580px;
        }
      `}
    </style>
  </Layout>
);
