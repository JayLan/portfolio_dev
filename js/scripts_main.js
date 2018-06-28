let cssBool = CSS.supports('flex', true);

setTimeout(() => {
    if (cssBool == false) {
        alert("\nHi, your browser may not be displaying this page correctly!\n\nThis site uses the latest responsive layout standards.\n\nPlease update your browser. I recommend the most recent version of Google Chrome at:\n\n www.google.com/chrome/\n");
    }
}, 1000);
