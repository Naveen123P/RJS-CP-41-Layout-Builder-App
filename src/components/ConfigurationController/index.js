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
        <div className="layout-container ul-styles">
          <h1 className="layout-heading">Layout</h1>

          <div className="li-styles">
            <input
              id="content"
              type="checkbox"
              key={showContent}
              checked={showContent}
              onClick={onClickContent}
            />
            <label htmlFor="content" className="content-style">
              Content
            </label>
          </div>
          <div className="li-styles">
            <input
              id="leftNavbar"
              type="checkbox"
              checked={showLeftNavbar}
              key={showLeftNavbar}
              onClick={onClickLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="content-style">
              Left Navbar
            </label>
          </div>
          <div className="li-styles">
            <input
              id="rightNavbar"
              type="checkbox"
              key={showRightNavbar}
              checked={showRightNavbar}
              onClick={onClickRightNavbar}
            />
            <label htmlFor="rightNavbar" className="content-style">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
