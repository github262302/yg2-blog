import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";
function ExploreLayout(props): React.ReactElement {
    return <div className={styles.main}>{props.children}</div>;
}
type CardType<T> = {
    title: string;
    describe: string;
    img: string;
    to: string;
    user?: T;
};
function Card<T>(props: CardType<T>): React.ReactElement {
    return (
        <a
            className={clsx("hero", styles.card)}
            href={props.to}
            target="_blank">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <div style={{ fontSize: "12px" }}>
                <div>
                    <svg
                        height="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        style={{ background: "white", borderRadius: "50%" }}>
                        <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>
                <div>Star 1432</div>
            </div>
            <p>{props.describe}</p>
        </a>
    );
}
// class Card extends React.Component {
//     render() {
//         return <div className={styles.card}>Hello, {this.props.title}</div>;
//     }
// }
const DATA = [
    {
        title: "Webpack",
        describe:
            "webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。",
        img: "https://t8.baidu.com/it/u=782949885,597946881&fm=74&app=80&size=f256,256&n=0&f=JPEG&fmt=auto?sec=1658682000&t=d14bf907cd6cca2ec28e3c74926783be",
        to: "https://webpack.docschina.org/",
    },

    {
        title: "React",
        describe: "用于构建用户界面的 JavaScript 库",
        img: "https://www.docusaurus.cn/img/undraw_react.svg",
        to: "https://react.docschina.org/",
    },
    {
        title: "AntDesign",
        describe:
            "是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。",
        img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        to: "https://ant.design/",
    },
    {
        title: "Vue",
        describe: "一个用于构建 Web 用户界面的平易近人、高性能且通用的框架。",
        img: "/img/pages/vue3_logo.svg",
        to: "https://vuejs.org/",
    },
];
export default () => {
    return (
        <Layout>
            <ExploreLayout>
                {DATA.map(e => (
                    <Card<any> {...e} />
                ))}
            </ExploreLayout>
        </Layout>
    );
};
