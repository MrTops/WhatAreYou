document.onload( () => {
    document.getElementsByClassName("whatAreYou")[0].setAttribute('title', new URLSearchParams(window.location.search).get('whatAreYou') || 'Nothing');
});