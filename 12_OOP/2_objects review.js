const color = 'teal';

const obj = {};
obj.color = '#3723FF';
obj[color] = '#3723FF';

Object.keys(obj);

Object.values(obj);

Object.entries(obj);

for(let [k,v] of Object.entries(obj)) {
    console.log(k,v);
}