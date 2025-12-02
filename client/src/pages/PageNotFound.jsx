import React from 'react'
import Layout from '../components/layout/Layout'
import { IoMdArrowRoundBack } from "react-icons/io";

const PageNotFound = () => {
  return (
    <Layout title={"Page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">
          404
        </h1>
        <h3 className="pnf-message">
          Oops ! Page not found.
        </h3>
        <button className="pnf-btn">
          Back <IoMdArrowRoundBack/>
        </button>
      </div>
    </Layout>
  )
}

export default PageNotFound