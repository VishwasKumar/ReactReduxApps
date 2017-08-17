export function addComment(author, text) {
    return({
      type:'ADD_COMMENT',
      payload: {
          author:author,
          text:text
      }
    });
}