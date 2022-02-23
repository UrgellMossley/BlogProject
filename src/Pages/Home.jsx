import Header from "../components/layout/Header";
import Showcase from "../components/Showcase"
import ArticleInfo from "../components/ArticleInfo";

import React from 'react'

function Home() {
  return ( 
          <>
            <Header />
            <Showcase />
            <ArticleInfo />
          </>
  )
}

export default Home