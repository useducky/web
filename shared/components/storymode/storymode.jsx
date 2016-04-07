import React from 'react'
import styles from './storymode.css'

export default class StoryModeView extends React.Component {
  render() {
    return (
      <div id="story-mode-view">
        <h1>Clap your hands if you believe in us.</h1>
	<p>Ducky can be more than an app you download on your phone, or an extension you install on your browser, or a website you visit. If you want it to be. It can be a community pitching in, together, to make something they believe should exist, because they can.</p>
	<p>We make this community optional, because not everyone wants a relationship with the people that make their software. Not everyone cares what goes on behind the curtain. And that’s ok, they shouldn’t have to.</p>
	<p>We make it cost <em>more</em> to be involved in Story Mode because it’s an investment. It’s taking some of your limited time and attention and care, and pouring it into something. That’s the real cost, not the dollar amount. The dollar amount is just our way of trying to make it obvious that this will encourage you to give more of yourself than the average app user.</p>
	<p>We don’t enable special features for Story Mode customers. We use them as our feedback group, we test new ideas on them, we talk to them more. They have more ways to get in touch, and we make more of an effort to communicate the little things with them, because we assume they care.</p>
	<p>But at the heart of this relationship are three truths: we believe in them, they believe in us, and they are as much Ducky’s creators and maintainers as we are.</p>
	<p>If you wish to be on Story Mode but can’t afford it, please just <a href="mailto:quack@useducky.com" title="email quack@useducky.com">get in touch</a>. We’ll take care of it.</p>
      </div>
    );
  }
}
