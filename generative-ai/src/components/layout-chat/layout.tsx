import { Aside } from "../aside/Aside"
import { Content } from "../content/Content"
import { Header } from "../header/Header"
import "./layout.css"

export const Layout = () => {
  return(
    <>
    <Header />
    <div className="container-aside-content">
      <Aside />
      <Content />
    </div>
    </>
  )
}