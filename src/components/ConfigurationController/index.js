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
                type="checkbox"
                value={showContent}
                onClick={onClickContent}
              />
              <p className="content-style">Content</p>
            </li>
            <li className="li-styles">
              <input
                type="checkbox"
                value={showLeftNavbar}
                onClick={onClickLeftNavbar}
              />
              <p className="content-style">Left Navbar</p>
            </li>
            <li className="li-styles">
              <input
                type="checkbox"
                value={showRightNavbar}
                onClick={onClickRightNavbar}
              />
              <p className="content-style">Right Navbar</p>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
