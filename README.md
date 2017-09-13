# Welcome to the VITA at UCLA official website!
Originally created by Simon Zhou as part of the Community Service Commission.  
Current maintainer: Ardis Lu

# HTML
## index.html
To change the content on the main page, just modify index.html and push the changes.
## volunteers.html
The volunteer page is (weakly) password-protected. Since we can't modify any of the backend on GitHub Pages, we have to use a weaker solution.  

1. Create a static HTML file with the content you want to display to volunteers and keep it outside the public repository.
2. Use <a href="https://robinmoisson.github.io/staticrypt/">StatiCrypt</a> and follow the directions to create an encrypted HTML file. Necessary styles and scripts are all self-contained.
3. Modify the generated HTML to your desire (color scheme, footer, favicon, etc.) and create references normally.

Some notes:

1. Any changes you make to the content on volunteers.html has to be re-encrypted using StatiCrypt to be reflected on the site. 
2. This tool only supports static HTML pages to be encrypted.
3. The password is succeptible to bruteforcing. Do not put any really sensitive information on this page.

# Styling
Original stylesheet credits:

>Big Picture by HTML5 UP  
>html5up.net | @ajlkn  
>Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

To make modifications to the stylesheet, edit the _custom.scss file in assets/sass/. This file is injected at the end of main.scss and can be used to override any of the original styling in the template.

To save modifications, install SASS and use
```
scss -t compressed main.scss main.min.css
```
to minify and save to standard CSS. Then move main.min.css to assets/css/. The main.min.css.map file can be deleted.

To style the password splash page just modify the CSS in volunteers.html directly; there are not many elements involved so it shouldn't be too difficult to keep track of everything. The content after the splash screen should be styled by the main stylesheet however.

# Scripting
Scripts used for main theme:
> jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license  
> jquery.poptrox.js v2.5.2-dev | (c) @ajlkn | github.com/ajlkn/jquery.poptrox | MIT licensed  
> jquery.scrollex v0.2.1 | (c) @ajlkn | github.com/ajlkn/jquery.scrollex | MIT licensed  
> jquery.scrolly v1.0.0-dev | (c) @ajlkn | MIT licensed  
> skel.js v3.0.1 | (c) skel.io | MIT licensed  
> main.js, util.js | @ajlkn | html5up.net/license

To add custom scripts, edit custom.js in assets/js/ and import it at the end of any pages.