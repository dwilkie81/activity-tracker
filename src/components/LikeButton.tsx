import * as React from 'react';
import Button from 'react-bootstrap/Button';

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

    return <Button onClick={() => this.setState({ liked: true})}>Like</Button>;
  }
}

export default LikeButton;