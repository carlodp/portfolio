// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const onPreRouteUpdate = () => {
    setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
    }, 1000)
}