
import Footer from './footer'

import data from "../lib/data.js"
import Header from './header'

 

export default function Layout({ preview, children }) {
  return (
    <>
      
      <div className="wrapper">
      <Header services={data.services} company={data.company} />
        {children}
      
      <Footer {...data} />
      </div>
    </>
  )
}
