
import PropTypes from 'prop-types';
import Button from './Button';
import CardList from './CardList';
import './NavBar.scss'
import { Logo, CreatorsList, MenuIcon, BrandsList, LearnMoreList, PopUpList } from '../staticData'
import { useState } from 'react';
import { useEffect } from 'react';

export default function NavBar({ props: { theme }, children }) {
  const [showPopUp, setShowPopUp] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    let timer
    const onScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollHeight > 0) {
          setIsScroll(true)
        } else {
          setIsScroll(false)
        }
      }, 50);
    }
    window.addEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`navbar-item navbar-item-${theme} ${isScroll ? `scroll-${theme}` : ''}`}>
      <div className='nav-top-container'>
        <div className='left'>
          <a href='/'><img alt='logo' src={Logo} /></a>
          {children}
        </div>
        <div className='right'>
          <div className='nav-tabs'>
            <div className='nav-tab-group'>
              <div className='nav-tab-item'>
                <Button props={{ id: 1, variant: 'text', afterIcon: ArrowIcon, theme }}>For Creators</Button>
                <div className='nav-tab-popup'>
                  <CardList props={{ list: CreatorsList }} />
                </div>
              </div>
              <div className='column-divider'/>
              <div className='nav-tab-item'>
                <Button props={{ id: 2, variant: 'default', afterIcon: ArrowIcon, theme }}>For Brands</Button>
                <div className='nav-tab-popup'>
                  <CardList props={{ list: BrandsList }} />
                </div>
              </div>
            </div>
            <div className='operation-group'>
              <Button props={{ id: 3, className: 'login-btn', theme }}>Login</Button>
              <Button props={{ id: 4, variant: 'outline', theme }}>Apply</Button>
              <div className='menu-container'>
                <div className='menu-icon-click' onClick={() => { setShowPopUp(!showPopUp) }}><img className={`menu ${showPopUp ? 'trans-scale' : ''}`} src={MenuIcon} alt='menu' /></div>
                <div className={`menu-mask ${showPopUp ? 'menu-mask-active' : ''}`} onClick={() => setShowPopUp(false)}></div>
                <div className={`menu-popup ${showPopUp ? 'popup-active' : ''}`}>
                  <div className='menu-popup-wrapper'>
                    <div className='menu-popup-content'>
                      <div className='close-icon' onClick={() => setShowPopUp(false)}>
                        {CloseIcon}
                      </div>
                      {
                        PopUpList.map(item => {
                          return <div key={item.href}>
                            <a href={item.href} className='menu-popup-title'>{item.title}</a>
                            <div className='menu-popup-list-container'>
                              {
                                item.list.map(list => {
                                  return <a className='menu-popup-subTitle sub-indent' href={list.href} key={list.href}>{list.title}</a>
                                })
                              }
                            </div>
                          </div>
                        })
                      }
                      <div className='divider' />
                      <div className='menu-popup-list-container button-margin'>
                        {
                          LearnMoreList.map(list => {
                            return <a className='menu-popup-subTitle' href={list.href} key={list.href}>{list.title}</a>
                          })
                        }
                      </div>
                      <Button props={{variant: 'outline', theme: 'dark', className: 'operation-btn', style: {margin: '0 0 8px 0', width: '100%'}}}>Sign Up</Button>
                      <Button props={{variant: 'outline', theme: 'dark', className: 'operation-btn', style: {margin: '0 0 8px 0', width: '100%'}}}>Log In</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
NavBar.propTypes = {
  /** Composition of the task */
  props: PropTypes.shape({
    theme: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

var CloseIcon = <svg aria-hidden="true" className="svg-inline--fa fa-times fa-w-10" data-icon="times" data-prefix="far" focusable="false" role="img" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" fill="currentColor"></path></svg>
var ArrowIcon = <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" className={`svg-inline--fa fa-chevron-down fa-w-14 chevron`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>