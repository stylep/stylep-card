# stylep-card

<img src=giticon.png title=stylep-card align=right height=95>

A simple card pattern for your next project.

## Install
You can install using the [spm](https://github.com/stylep/stylep) command or install using npm and the project name.

``` shell
spm install card
```

## Usage
``` css
/* card.css */

@import “stylep-card”;

.card {

  /* Card Design Pattern */
  @extend %card-block;

  /* Customize your card */
  @mixin card-solid #efefef, #444, 2px, 0 0 0 3px #000;
}
```

## Patterns
Placeholder selectors that contain common styles for structure.

### `@extend %card-inline;`
This draws a card that displays inline on the page.

### `@extend %card-block;`
This draws a card that expands the width of the containing element.

## Styles

### card-solid
Paints your card as a solid object with colors, shadow and radius.

##### Options

* `$color-passive: #f7f7f7` Background color of the card
* `$color-text: #444` Color of text inside the card
* `$radius-size: 0` Border radius of the card
* `$border: none` Adds a border to the card
* `$shadow: 0 2px 2px rgba(0, 0, 0, .4)` Shadow around the card

### card-hollow
Paints your card as a bordered object with colors and radius.

##### Options

* `$color-passive: #444` Background color of the card
* `$color-text: #444` Color of text inside the card
* `$color-background: transparent` The fill color of the card
* `$radius-size: 0` Border radius of the card
* `$border-width: 1px` The size of the stroke around the card
* `$shadow: none` Shadow around the card


##### Example
```css
/* a card that has a light grey background, slightly rounded, and a fancy shadow */
@mixin card-solid #efefef, #000, 2px, 0 0 0 3px #000;
```

## License
This project is licensed under the MIT [license](LICENSE).
