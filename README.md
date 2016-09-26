# Currently

Currently `.full` returns `new Date()` - with simplified extensions of `.year`, `.month` and `.date`.

## Notes

 * normally, JavaScript's `.getMonth()` returns a zero-indexed integer (i.e. January = 0, February = 1, December = 11), whereas currently's `.month` returns the "regular" integer for simplicity's sake (January = 1, December = 12)
 * currently is designed to go with the [onezero](onezero) package, which converts individual digits (0 - 9) into double digits (00 - 09)
   * install via `npm install onezero --save`

## Usage

```
var now = require('currently');
// now.full, now.year, now.month, now.date
```

#### Footer Copyright

```
<p>Copyright 2012
<script>
if (now.year != 2012) {
  document.write('-', now.year); // ' - 2016'
}
</script>
</p>
```

#### Today's date

```
<script>
var zero = require('onezero');
// print 'DD/MM/YYYY':
document.write(zero(now.date) +'/'+ zero(now.month) +'.'+ now.year);
</script>
```

## Roadmap

 * `.name('month', 12) // = 'December'`
 * `.name('day', 4) // = 'Thursday'`
 * `.short('month', 4) // = 'Apr'`
 * `.short('day', 5) // = 'Fri'`
 * `.display('mm/dd/yy')` formatting
