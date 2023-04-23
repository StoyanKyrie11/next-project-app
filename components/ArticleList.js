import React from "react";
import aricleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={aricleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
