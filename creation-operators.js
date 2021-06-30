import { from, of } from 'rxjs';

// of operator
// converts
of(1, 2, 3).subscribe(console.log);



// from operator
// 
// converts array to observable
from([1,2,3]).subscribe(console.log);


// 