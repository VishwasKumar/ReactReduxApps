import React from 'react';

export function Comment(props) {
    const { id, author, children } = props;
    return (
      <div>
          <div>
            {author}
          </div>
          <p>{children}</p>
      </div>
    );
}