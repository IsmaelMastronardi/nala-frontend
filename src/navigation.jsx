import { Link } from "@mui/material"
import { NavUl, NavigationDiv } from "./styled_components/nav"

export const Navigation = ({toggleView, view}) => {
  return (
      <NavigationDiv>
        <NavUl>
          <li>
            <Link
              underline="hover"
              href="/login">Login</Link>
          </li>
          <li>
            <Link
              underline="hover"
              href="/signup">Signup</Link>
          </li>
          <li>
            <Link
              onClick={() => toggleView()}
              underline="hover"
              style={{ display: 'block', cursor: 'pointer'}} 
            >
              {view === "employees" ? "Absence Requests" : "Employees"}
            </Link>
          </li>
        </NavUl>
      </NavigationDiv>
  )
}