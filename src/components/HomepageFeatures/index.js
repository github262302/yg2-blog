import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "简单方便",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: <>Docusaurus从头开始设计，易于阅读.</>,
    },
    {
        title: "简单阅读",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                Docusaurus
                让你专注于你的文档，并且做得很好家务活。继续，将您的文档移动到
                <code>docs</code> 文件夹.
            </>
        ),
    },
    {
        title: "由React构建",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                通过重用React扩展或自定义网站布局。
                Docusaurus可以扩展相同的头部和页脚.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
