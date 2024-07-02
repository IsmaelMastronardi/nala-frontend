import { useState } from "react"
import { Home } from "./home"
import { Navigation } from "./navigation"
import { MainDiv } from "./styled_components/divs"

export const Main = () => {

  const [view, setView] = useState("employees")
  const toggleView = () => {
    setView(view === "employees" ? "absence_requests" : "employees")
  }

  return(
    <MainDiv>
      <Navigation toggleView={toggleView} view={view}/>
      <Home  view={view} />
    </MainDiv>
  )
}