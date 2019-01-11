# scheda.js
Fork of @ravenjohn's [scheda.js](https://github.com/ravenjohn/scheda.js), rewritten in ES6 syntax. Create SystemOne-inspired schedule timetable!

### Usage
```html
<script src="./dist/scheda.min.js"></script>
<script>
  const scheda = new Scheda();
  scheda.init();

  scheda.add({
    day: 'M',
    time: '8:30-9:45',
    courseCode: 'CMSC 142',
    section: 'UV-4L',
    room: 'Physical Sciences Bldg.',
  });
</script>
```

Make sure to include the canvas element somewhere in your HTML code as `<canvas id="scheda" />`.

### Cases
#### `constructor(config?: Object)`
`Scheda` constructor can accept a configuration object.

```javascript
const config = {
  id: 'my-schedule',                // custom canvas ID
  colors: ['#000000', '#ff0000'],   // array of preset course colors
  theme: {
    background: '#FFFFFF',
    header: '#00838F',
    grid: {
      mini: '#DFE0D2',
      horizontal: '#00838F',
      vertical: '#00838F'
    },

    time: {
      color: '#FFFFFF',
      background: '#00838F',
      style: 'bold',
      font: 'Arial',
      size: 12,
    },
    day: {
      color: '#FFFFFF',
      style: 'bold',
      font: 'Arial',
      size: 12
    },
    sched: {
      color: '#FFFFFF',
      style: 'bold',
      font: 'Arial',
      size: 10
    },

    timeColumnWidth: 80,
  }
}

const scheda = new Scheda(config);
```

#### `scheda.init(canvasElement?: Node)`
Draws initial scheda elements.

```javascript
const scheda = new Scheda();

const canvas = document.querySelector('canvas#mySchedule');
scheda.init(canvas); // can accept a node element

/*
  The above code can be written as:
  const scheda = new Scheda({ id: 'mySchedule' });
  scheda.init();
*/
```

#### `scheda.add(course: Object)`
Adds a course to scheda canvas. Returns the course UUID.

#### `scheda.get(id: String)`
Returns course object from the scheda history given the course UUID.

#### `scheda.remove(id: String)`
Removes course from scheda canvas.

#### `scheda.update(id: String, course: Object)`
Updates course identified by UUID given.

#### `scheda.download(filename?: String)`
Generates a PNG file of the schedule.
