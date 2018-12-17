import React from "react";
import { connect, } from "react-redux";

class BlogForm extends React.Component {
  state = { name: "", };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, } = this.state;
    const blog = { name, id, complete: false, };
    dispatch({ type: "ADD_BLOG", blog, });
    dispatch({ type: "INC_ID"});
    this.setState({ name: "", });
  }

  render() {
    const { name, } = this.state;

    return (
      <div>
        <h3>Add a Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);
