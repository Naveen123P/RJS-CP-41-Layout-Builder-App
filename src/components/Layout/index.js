// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickContent = () => {
        onToggleShowContent()
      }
      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="ul-styles">
            <li className="li-styles">
              <input
                type="checkbox"
                id="content"
                value={showContent}
                onClick={onClickContent}
              />
              <lable className="content-style" htmlFor="content">
                Content
              </lable>
            </li>
            <li className="li-styles">
              <input
                type="checkbox"
                id="content"
                value={showLeftNavbar}
                onClick={onClickLeftNavbar}
              />
              <lable className="content-style" htmlFor="content">
                Left Navbar
              </lable>
            </li>
            <li className="li-styles">
              <input
                type="checkbox"
                id="content"
                value={showRightNavbar}
                onClick={onClickRightNavbar}
              />
              <lable className="content-style" htmlFor="content">
                Right Navbar
              </lable>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
