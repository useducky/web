import React from 'react'
import styles from './about.css'
import {Link} from 'react-router'

export default class AboutView extends React.Component {
  render() {
    return (
      <div id="about-view">
      	<h1>What Is Ducky?</h1>
	<p className={styles.elevatorPitch}>Ducky is a tool. It makes it really easy to move webpages between your devices. That makes it sound really abstract, so let’s make it a bit clearer:</p>

	<h2 className={styles.bigPicture}>Ducky allows you to use one device to pop open a browser window on a different device.</h2>

	<section className={styles.row}>
	<div><img src='http://blobs.impractical.co/ducky/story-mode-about-160330-logo.png' /></div>
	<div>
		<p>Are you busy during the day? Of course you’re busy during the day. Have you ever met anyone who says “yeah, no, totally not busy during the day, I have pretty much nothing to do”? Of course not, that’d be silly. We’re all busy.</p>
		<p>A lot of people use Ducky as a way to queue up things during the day that they want to come back to later, when they have time. Ducky lets you stumble across the link on your phone, tap a few times, and it’ll be open and waiting on your computer when you get home and can finally give those cat pics the attention they deserve. No need to even remember there was something you wanted to look at.</p>
	</div>
	</section>

	<section className={styles.rowReverse}>
	<div><img src='http://blobs.impractical.co/ducky/story-mode-about-160330-logo.png' /></div>
	<div>
		<p>As much as we’d like to pretend it is, the internet isn’t fully accessible from a phone or tablet. You still stumble across Flash sites (for some reason), and sometimes things just don’t work the way they should.</p>
		<p>Ducky lets you pop the link open on your computer with just a couple of taps, avoiding an annoying session of typing out that long URL by hand, then getting foiled by a 0 that looks like a O or an l that looks like an I.</p>
	</div>
	</section>

	<section className={styles.row}>
	<div><img src='http://blobs.impractical.co/ducky/story-mode-about-160330-logo.png' /></div>
	<div>
		<p>Have you ever been browsing the internet with a friend, and wanted to show them something super adorable that you stumbled across? If you said no, you must be a real adult, and you need to teach us that trick.</p>
		<p>Ducky helps in this situation by allowing you to grant friends the ability to send stuff to your devices. Now instead of tossing your phone across the room for them to enjoy the cute thing on your Tumblr dashboard, you can just pop it open on their laptop.</p>
	</div>
	</section>

	<h3 className={styles.bigPicture}>What do you have to lose? Try it for a month, our treat.</h3>
	<p><Link to='/register' title='Sign up'>Link disguised as a button or something goes here.</Link></p>
      </div>
    );
  }
}
