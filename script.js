const whoAreYou = () => {
    document.getElementsByClassName("what-are-you")[0].setAttribute('title', new URLSearchParams(window.location.search).get('whatAreYou') || 'Nothing');
};