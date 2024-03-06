// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const leftNavbarStatus = showLeftNavbar ? 'show-left-navbar' : 'hide'
      const contentStatus = showContent ? 'show-content' : 'hide'
      const rightNavbarStatus = showRightNavbar ? 'show-right-navbar' : 'hide'
      console.log(showContent, showLeftNavbar, showRightNavbar)

      return (
        <div className="body-container">
          <div className={leftNavbarStatus}>
            <h1 className="heading">Left Navbar Menu</h1>
            <ul className="left-navbar-ul">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div className={contentStatus}>
            <h1 className="heading">Content</h1>
            <p className="content-para">Lorem ipsum dolor</p>
          </div>
          <div className={rightNavbarStatus}>
            <h1 className="heading">Right Navbar</h1>
            <div className="ad-boxes-container">
              <div className="ad-box">
                <p className="ad-text">Ad 1</p>
              </div>
              <div className="ad-box">
                <p className="ad-text">Ad 2</p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
