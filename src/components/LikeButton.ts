import * as React from 'react';

const e = React.createElement;

class LikeButton extends React.Component {

  state: any = null;

  constructor(props: {}) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

export default LikeButton;