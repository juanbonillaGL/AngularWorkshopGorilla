# AngularWorkshopGorilla


el link de los ejemplos: https://stackblitz.com/edit/rxjs-uyhxmm?file=index.ts




import { from, of, Observable } from 'rxjs'; 
import { map, filter, distinct, count, flatMap, reduce } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

let urlUsers = 'https://jsonplaceholder.typicode.com/users';

const httpRequestObservable = ajax.get(urlUsers);

console.log("************* example2 *************");
const example2 = httpRequestObservable.subscribe(data => {
  const source = from(data.response);
  const example21 = source.pipe( distinct(data => data.website),
      filter(data => data.website!=""));
  const subscribe = example21.subscribe(val => console.log(`website #2: ${val.website}`));
});

console.log("************* example3 *************");
const example3 = httpRequestObservable.subscribe(data => {
  const source = from(data.response);
  const example31 = source.pipe( map(user => user.website),
      filter(website => website.endsWith(".org") || website.endsWith(".net")));
  const subscribe = example31.subscribe(val => {
    console.log(`website #3: ${val}`);
  });
});

console.log(" ************* example4 *************");
const example4 = httpRequestObservable.subscribe(data => {
  const source = from(data.response);
  const example41 = source.pipe( count());
  const subscribe = example41.subscribe(val => {
    console.log(`Count #4: ${val}`);
  });
});

console.log("************* example5 *************");
const example5 = httpRequestObservable.subscribe(data => {
  const source = from(data.response);
  const example51 = source.pipe( map(user => user.website),
    filter(website => website.endsWith(".org") || website.endsWith(".net")),
    reduce((data, website) => {
      return {
        count: data.count += 1,
        name: data.name += website
      }
    }, {
      count: 0,
      name: ""
    })
  );

  const subscribe = example51.subscribe(val => {
    console.log(val);
  });
});


