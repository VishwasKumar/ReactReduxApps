import { connect } from 'react-redux';
import {CommentList} from "./CommentList";
import { addComment } from "./action";

export const CommentsList = connect(
    function mapStateToProps(state) {
        return { comments: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addComment: (author, text) => dispatch(addComment(author, text)),
        };
    }
)(CommentList);