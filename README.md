# v0
Instead of starting new projects from the ground up, v0 takes commonly re-used frameworks, plugins, and design patterns and makes makes it easy to start new projects with these dependencies pre-included. It also speeds up development time and code consistency within and between projects by re-using common classes, naming conventions, and patterns. It's meant to be completely visually agnostic, meaning there are no styles pre-included.

Sit down and write code.

###### Small disclaimer
This is made and maintained by a designer, and is intended for designers and front-end developers. Take that as you will.

## Run it locally
1. [Download](https://github.com/jheftmann/new_site/archive/master.zip) a .zip of the project. Unpackage it, move it, rename it, etc. This is where your new project will live.
1. There's some PHP but it's only for templating. That means you'll need something like [MAMP](http://www.mamp.info/en/index.html) to run the code locally. Go grab a copy and install it.
2. Open up [http://localhost:8888/](http://localhost:8888/) in a browser (the address might change depending on your MAMP set-up) and navigate to the directory containing the project code.
3. You'll also need to compile the LESS into CSS, and combine-and-minify the JS. It's already set up for [Codekit](http://incident57.com/codekit/). Grab a copy, install it, boot it up. Drag the directory containing all the code into the Projects sidebar, and it should do all that good stuff automatically when you save files.
4. Compiling LESS to CSS:
	- `main.less` imports all the other LESS files to be compiled into `assets/styles/css/main.css`
5. Combining and minifying JS:
	- `main.js` will be minified to `main.min.js`. Note: You may also have to set the output path in Codekit.
	- `lib.js` uses Codekit's Javascript import functionality and syntax to import scripts in `assets/_lib/js` into `lib.js`. Put them in the order you want them combined. Note: You may also have to set the output path in Codekit.
	- Both of these are linked in `footer.php`. For development, it's easiest to use the un-minified version of `main.js`.

## Structure
     ├── README.md
     ├── index.php (Table of Contents)
     ├── home-logged-in.php (Logged-in Homepage)
		 ├── material-detail.php	(Material Detail Page)
     ├── favicon.ico
		 ├── includes/
				├── header.php
				├── footer.php
				└── includes for modules and components
     ├── assets/
				├── _lib/
						├── js/
								├── lib.js (jQuery and other plugins. This should be recompiled with your own JS dependencies)
								├── lib.min.js (minified for production)
								└── scripts and plugins
						├── styles/
								├── bootstrap/ (LESS files for Bootstrap)
								├── crossbrowser-fixes.css
								└── formatting.css (styles index.php and styles.php, not necessary in production)
				├── fonts/
						└── font files in various formats
				├── img/
						└── icons and non-content images
				├── js/
						├── helpers.js (re-usable JS tools)
						├── main.js
						└── main.min.js
				└── styles/
						├── css/
								└── main.css
						└── less/
								├── _config.less (configure the project)
								├── _main.less (import all _lib/styles and LESS files)
								├── helpers.less (re-usable classes)
								├── variables.less (global variables)
								├── fonts.less (mixins/classes for type variants)
								├── global.less (global block-level element styles)
								├── typography.less (typography styles)
								├── layout.less (reusable layout patterns)
								├── buttons.less (button styles)
								├── forms.less (resets and global styles for form elements)
								├── icons.less (all icons and non-content images)
								├── js.less (helper styles for scripts)
								└── LESS files for specific modules, patterns, or pages

     ├── content/
				└── sample JPEGs

## Grid and layout
The grid is based on the Bootstrap scaffolding. To avoid extra, non-semantic markup in the HTML, it is preferable to use the mixin classes.

The basic structure of a page `<section>` is set up like this:

				<section> <!-- section class and full-bleed background color/image -->
					<container> <!-- everything within this will be on the grid -->
						<row> <!-- .make-row() mixin -->
							<contents> <!-- section contents with column/offset widths -->
						<row>
					<container>
				<section>

[Refer to the documentation for specific usage.](http://getbootstrap.com/css/#grid)

## LESS
In `header.php` you'll see links to both `main.css` and `main.less`.
- For development, it's often easier to use the LESS files because you don't need to wait for it to compile to see the changes in the browser (it comes after `main.css` so that the LESS changes override the CSS).
- For production, you only need the compiled CSS.
- Never write styles in the CSS file, only in the LESS files. If you write styles in the CSS, you'll lose these changes when the LESS files get recompiled. Plus, LESS is faster, easier, and you can take advantage of mixins and variables!

## Image sizes
All images are responsive so in most instances, the specific size is not as important as the minimum pixel dimensions, file size, and aspect ratio. Very few, if any, of the images will break the layout if they are uploaded at the wrong size.

#### General min. size
For mobile screens, all images should be *at least* 640px wide so they are sharp on retina screens.

#### General max. size
For large screens hero and other images might scale to be very large. There is no max. size, so instead find a balance between the smallest file size that still allows for sharp images on large screens. This is probably between 1600px-2000px.

## Browser Compatibility
There are some JS and CSS cross-browser compatibility fixes included in `_lib`. See [Bootstrap documentation](http://getbootstrap.com/getting-started/#support) for more info, as well as documentation on individual scripts (above).

## Changelog
For specific changes, see commit history.

#### v0.1 - Deprecated

#### v0.2 - Deprecated

#### V0.3 - Current
V0.3 will be much more configurable. When starting a new project, you'll be able to set some basic parameters in a `_config.less` file. Per-component configuration will be handled at the top of that component's LESS/SCSS file (see `nav.less` for a preview).

#### v0.4 - Forthcoming
- move all uncompiled code from `/assets` to `src`
- remove a lot unused styles and scripts
- create `gh-pages` branch


## License
MIT, yo. Credit appreciated.

All `_lib` code is subject to their individual licenses and the rights of their authors. They are included here but you should review the individual licenses before using them in your own projects.
