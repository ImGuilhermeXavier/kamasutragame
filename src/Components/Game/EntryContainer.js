import React from 'react';
import { CSSTransition } from 'react-transition-group';

const EntryContainer = ({ children, ...props }) => {
    const nodeRef = React.useRef(null);
    return (
        <CSSTransition
            nodeRef={nodeRef}
            timeout={300}
            classNames='tourImg'
            {...props}
        >
            <div ref={nodeRef}>{children}</div>
        </CSSTransition>
    );
};

export default EntryContainer;
