import React from 'react'
import styles from './menu.css'
import { Link, IndexLink } from 'react-router'
//import logo from './logo.png'
const logo = 'http://blobs.impractical.co/ducky/story-mode-about-160330-logo.png'

export default class Menu extends React.Component {
  render() {
    const { userId } = this.props
    const links = {
	    guest: [
	    {title: 'Pricing', path: '/pricing'},
	    {title: 'Story Mode', path: '/believe'},
	    {title: 'About', path: '/about'},
	    {title: 'Blog', path: 'http://blog.useducky.com', external: true},
	    {title: 'Register', path: '/register'}
	    ],
	    registered: [
	    {title: 'Links', path: '/links'},
	    {title: 'Devices', path: '/devices'},
	    {title: 'Account', path: '/account'},
	    {title: 'Blog', path: '//blog.useducky.com', external: true},
	    {title: 'Log out', path: '/logout'}
	    ]
    }
    let menuLinks = links.guest;
    if (userId) {
	    menuLinks = links.registered;
    }
    return (
      <div className={styles.header}>
    	<IndexLink to='/' title='Ducky'>
	  <img src={ logo } alt='Ducky Logo' className={styles.logo} />
	</IndexLink>
	<ul className={styles.links}>
		{menuLinks.map(function(link) {
			if (link.external) {
				return (<li key={link.title}><a href={link.path} title={link.title}>{link.title}</a></li>)
			}
			return (<li key={link.title}><Link to={link.path} title={link.title}>{link.title}</Link></li>)
						     })}
	</ul>
      </div>
    );
  }
}

Menu.propTypes = { userId: React.PropTypes.string };
Menu.defaultProps = { userId: '' };
