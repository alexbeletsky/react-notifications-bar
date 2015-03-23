import React from 'react';

var NotificationsBar = React.createClass({
    getInitialState: function () {
        return {
            notifications: []
        };
    },

    componentDidMount: function() {

    },

    render: function () {
        return (
            <div className="notifications"></div>
        );
    }
});

export default NotificationsBar;
