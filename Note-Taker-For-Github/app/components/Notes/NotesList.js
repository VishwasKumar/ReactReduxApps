// var React = require('react');
import React from 'react';

class NotesList extends React.Component {
    render() {
    var notes = this.props.notes.map((note, index) => <li className="list-group-item default" key={index}>{note['.value']}</li>);
    return (
        <ul className="list-group">
            {notes}
        </ul>
        )
    }
}
module.exports = NotesList;
