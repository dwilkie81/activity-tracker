import * as React from 'react';
import Button from 'react-bootstrap/Button';

class LikeButton extends React.Component {

  state: { liked: boolean };

  constructor() {
      super({});
      this.state = { liked: false };
  }

  render(): React.ReactNode {
      if (this.state.liked) {
          return 'You liked this.';
      }

      return <Button onClick={() => this.setState({ liked: true})}>Like</Button>;
  }
}

export default LikeButton;