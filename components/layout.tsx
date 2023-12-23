import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import data from "../lib/data.js"
import Header from './header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="wrapper">
      <Header services={data.services} company={data.company} />
        {children}
      
      <Footer {...data} />
      </div>
    </>
  )
}
