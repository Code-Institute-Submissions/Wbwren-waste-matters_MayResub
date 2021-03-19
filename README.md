# Waste Matters

## Project purpose
Waste matters Ltd. offers waste and recycling solutions to Irish businesses. The interactive demo aims to advertise and sell polystyrene compactors. The demo will guide the user through a mini-game in which they will drag and drop polystyrene blocks into a compactor machine before turning it on. While interacting with the demo, the user will receive key facts about polystyrene recycling and waste matters. On completion of the demo, the user will have the option to ‘learn more’ which will lead them to the current waste matters website.

## UX

### User stories
* As a user, I would like the user experience on the website to be
intuitive.

* As a user, I want to learn about polystyrene compactors and how
they work.

* As a user, I want to learn about polystyrene recycling in an engaging manor.

* As a user, I want my experience on the website to be enjoyable.

### Strategy
__Goal__: To inform users about polystyrene recycling in an engaging manor and sell polystyrene compactors through waste matters Ltd.

### Scope
* An interactive demo utilizing Matter.js, a 2D rigid body JavaScript physics engine.

### Structure

### Skeleton

### Surface

#### Colour Scheme

#### Typography
Roboto Mono is the font used on the webpage with monospace as the fallback font in the case of the default font failing to load correctly.
The default font weight of 400 is used throughout the page.
#### Imagery

### Wireframes
* [Mobile View](https://github.com/Wbwren/waste-matters/blob/master/wireframes/mobile-wireframe.png)

* [Tablet View](https://github.com/Wbwren/waste-matters/blob/master/wireframes/tablet-wireframe.png)

* [Desktop View](https://github.com/Wbwren/waste-matters/blob/master/wireframes/desktop-wireframe.png)
## Technologies Used
### Languages used
* HTML5
* CSS3
* JavaScript
### Frameworks, Libraries & Programs Used
* [Matter.js](https://brm.io/matter-js/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
* [Balsamiq Wireframes](https://balsamiq.com/wireframes/)
* [Microsoft PowerPoint](https://office.live.com/start/powerpoint.aspx)
* [Microsoft Word](https://office.live.com/start/word.aspx)
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
* [jQuery](https://jquery.com/)
## Testing

### Code Validation
* HTML was validated using W3C Markup Validation Service.

* CSS was validated using W3C CSS Validation Service - Jigsaw

* JavaScript was passed through the linter jshint with no warnings
### Functionality test
Error: textures were not appearing on matter.js shapes
Fix: disable render wireframes


Problem: Couldn't get polystyrene blocks to appear behind the compactor image in
the canvas (3D effect)
Fix: The order in which you add objects to the world determines the z-index.
Adding the foreground image 
of the compactor after the polystyrene blocks allows the blocks to appear behind
the image, giving the desired 3D effect.

Problem: when user creates a polystyrene block, they appear in-front of the
images, giving no 3D effect.
Fix: use add to world method within the polystyrene creation function and re-add
the images on each call.

Problem: on-screen messages were interfering with the mouse drag function
* [Image of mouse drag bug](https://github.com/Wbwren/waste-matters/blob/master/assets/images/mouse-drag-bug.png)

Fix: add a style attribute of 'pointer-events: none;' to the message div
* [Image of mouse drag bug fix](https://github.com/Wbwren/waste-matters/blob/master/assets/images/mouse-drag-bug-fix.png)

bug: could not get vertices to work correctly on matter.js
* [Image of vertices bug](https://github.com/Wbwren/waste-matters/blob/master/assets/images/vertices-bug.png)


## Deployment to Github Pages

## Clone

## Credits
### Acknowledgments
styrofoam texture: https://3dtextures.me/2019/03/21/styrofoam-001/
speech bubble: http://clipart-library.com/clipart/6TroXbg6c.html
p button image: https://www.pngkey.com/detail/u2w7q8e6y3e6a9a9_pow-button-mario-pixel-art-mario-christmas-pixel/
floor block: <a href='https://webstockreview.net'>https://webstockreview.net</a>
https://webstockreview.net/image/brick-clipart-super-mario/125781.html
lever https://www.kissclipart.com/cartoon-lever-png-clipart-computer-icons-clip-art-1f8vxo/s
refresh-arrow: http://clipart-library.com/clipart/8T68KdEGc.htm