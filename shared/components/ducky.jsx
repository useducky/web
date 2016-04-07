import React from 'react'
import styles from './ducky.css'
import Menu from './menu/menu.jsx'

export default class DuckyView extends React.Component {
  render() {
    return (
      <div id="ducky-view" className={styles.wrapper}>
        <Menu />
	{this.props.children}
      </div>
    );
  }
}
