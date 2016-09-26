# Currently

Currently `.full` returns `new Date()` - with simplified extensions of `.year`, `.month`, `.date`.

## Notes

 * normally, JavaScript's `.getMonth()` returns a zero-indexed integer (i.e. January = 0, February = 1, December = 11), whereas currently's `.month` returns the "regular" integer for simplicity's sake (January = 1, December = 12)
 * currently is designed to go with the [onezero](onezero) package, which converts individual digits (0 - 9) into double digits (00 - 09)

## Usage

```
<p>Copyright 2012
<script>
var year = require('currently').year;
if (year != 2012) {
  document.write('-', year); // ' - 2016'
}
/* // print 'DD/MM/YYYY':
var zero = require('onezero');
var now  = require('currently');
document.write(zero(now.date) +'/'+ zero(now.month) +'.'+ now.year);
// */
</script>
</p>
```

## Roadmap

 * `.name('month', 12) // = 'December'`
 * `.name('day', 4) // = 'Thursday'`
 * `.short('month', 4) // = 'Apr'`
 * `.short('day', 5) // = 'Fri'`
 * `.display('mm/dd/yy')` formatting
