
//let cssBool = CSS.supports('flex', true);

setTimeout(() => {
    //alert(bowser.name);
    if (bowser.name != "Chrome") {
        alert(`\nHi, your browser, ${bowser.name} v.${bowser.version}, may not be displaying this page correctly!\n\nThis site uses the latest responsive layout standards.\n\nPlease update your browser. I recommend the most recent version of Google Chrome at:\n\n www.google.com/chrome/\n`);
    }else{
        console.log("Yay, you are using Chrome!");
    }
}, 750);
