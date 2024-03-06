// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
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
                id="content"
                type="checkbox"
                value={showContent}
                onClick={onClickContent}
              />
              <label htmlFor="content" className="content-style">
                Content
              </label>
            </li>
            <li className="li-styles">
              <input
                id="leftNavbar"
                type="checkbox"
                value={showLeftNavbar}
                onClick={onClickLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="content-style">
                Left Navbar
              </label>
            </li>
            <li className="li-styles">
              <input
                id="rightNavbar"
                type="checkbox"
                value={showRightNavbar}
                onClick={onClickRightNavbar}
              />
              <label htmlFor="rightNavbar" className="content-style">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
