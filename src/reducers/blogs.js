const blogs = (state = [], action) => {
  switch(action.type) {
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [action.blog, ...state];
    case "TOGGLE_BLOG":
      return state.map( blog => {
        if (blog.id === action.id)
          return { ...blog, complete: !blog.complete, };
        return blog;
      })
    default:
      return state;
  }
}

export default blogs;
