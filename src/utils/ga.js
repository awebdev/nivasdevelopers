const openLink = props => {
    window.ga('send', {
        hitType: 'click',
        eventCategory: 'click',
        eventAction: props.action,
        eventLabel: props.evt.target.textContent,
        eventValue: props.href
    });

    window.open(props.href);
};

export { openLink };
