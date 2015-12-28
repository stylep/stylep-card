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
  @mixin card-solid #efefef, #444, 0 0 0 3px #000;
}
```

## Patterns
Placeholder selectors that contain common styles for structure.

#### `card-inline`
This draws a card that displays inline on the page.

##### Options

* `$card-margin: 0 0 1em` Space around the card

#### `card-block`
This draws a card that expands the width of the containing element.

##### Options

* `$card-margin: 0 0 1em` Space around the card
* `$card-min-width: 100px` The smallest width of a card allowed.

## Styles

#### `card-solid`
Paints your card as a solid object with colors, shadow and radius.

##### Options

* `$card-color: #f7f7f7` Background color of the card
* `$card-text-color: #444` Color of text inside the card
* `$card-shadow: 0 2px 2px rgba(0, 0, 0, .4)` Shadow around the card

#### `card-hollow`
Paints your card as a bordered object with colors and radius.

##### Options

* `$card-color: #444` Background and text color of the card
* `$card-border-width: 1px` The size of the stroke around the card
* `$card-border-style: solid` Style of border around the card

## License
This project is licensed under the MIT [license](LICENSE).
