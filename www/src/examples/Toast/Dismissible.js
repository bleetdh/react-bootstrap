class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showA: true,
      showB: true,
    };
  }

  render() {
    const { showA, showB } = this.state;
    const toggleShowA = () => this.setState({ showA: !showA });
    const toggleShowB = () => this.setState({ showB: !showB });
    return (
      <Row>
        <Col xs={6}>
          <Toast show={showA}>
            <Toast.Header onClose={toggleShowA}>
              <img
                src="https://via.placeholder.com/20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowA}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
        <Col xs={6} className="my-1">
          <Toast show={showB} animation={false}>
            <Toast.Header onClose={toggleShowB}>
              <img
                src="https://via.placeholder.com/20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShowB}>
            Toggle Toast <strong>without</strong> Animation
          </Button>
        </Col>
      </Row>
    );
  }
}

render(<Example />);
