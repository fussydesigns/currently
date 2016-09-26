# Currently

Currently `.full` returns `new Date()` - with simplified extensions of `.year`, `.month`, `.date` and `.day`.

## Notes

 * normally, JavaScript's `.getMonth()` returns a zero-indexed integer (i.e. January = 0, February = 1, December = 11), whereas Currently's `.month` returns the "regular" integer for simplicity's sake (January = 1, December = 12)

## Usage

```
<p>Copyright 2012
<script>
var year = require('currently').year;
if (year != 2012) {
  document.write('-', year); // ' - 2016'
}
</script>
</p>
```
