# Welcome to the VITA at UCLA official website!
Current developer: Ardis Lu  
Originally created by Simon Zhou as part of the Community Service Commission.  

# HTML
## index.html
To change the content on the main page, just modify index.html and push the changes.
## volunteers.html
The volunteer page is (weakly) password-protected. Since we can't modify any of the backend on GitHub Pages, we have to use a weaker solution.  

1. Create a static HTML file with the content you want to display to volunteers and keep it outside the public repository.
2. Use <a href="https://robinmoisson.github.io/staticrypt/">StatiCrypt</a> and follow the directions to create an encrypted HTML file. For a full page including password splash screen, click "Download html file with password prompt". Necessary styles and scripts are all self-contained.
3. Encrypted contents are on line 172 of the generated HTML in the variable "encryptedMsg". If you don't want to keep redoing custom styling every time you regenerate the page, just copy that content only.

Some notes:

1. Any changes you make to the content on volunteers.html has to be re-encrypted using StatiCrypt to update the page.
2. This tool only supports static HTML pages to be encrypted.
3. The password is succeptible to bruteforcing. Do not put any really sensitive information on this page.  

# Styling
Original stylesheet credits:

>Big Picture by HTML5 UP  
>html5up.net | @ajlkn  
>Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

FAQ stylesheet credits:  
> CSS FAQ Template  
> codyhouse.co | Sebastiano Guerriero  
> https://codyhouse.co/gem/css-faq-template/  
> Note: some customizations made to _faq.scss and faq.js to make it compatible with 2 FAQ sections and main theme.

To make custom modifications to the stylesheet, edit the _custom.scss file in assets/sass/. This file is injected at the end of main.scss and can be used to override any of the original styling in the template.

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
> main.js, util.js | (c) @ajlkn | html5up.net/license

Scripts used for FAQ sections:
> jQuery Mobile v1.4.4 | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license  
> Modernizr v2.8.3 | (c) Faruk Ates, Paul Irish, Alex Sexton | www.modernizr.com/license/  

To add custom scripts, edit custom.js in assets/js/ and import it at the end of any pages.