it('should calculate the high tax bracket', function() {
   expect(calculateTaxes(50000)).toEqual(12500);
   expect(calculateTaxes(100000)).toEqual(25000);
})

it('should calculate the low tax bracket', function() {
   expect(calculateTaxes(10000)).toEqual(1500);
   expect(calculateTaxes(1000)).toEqual(150);
})

// Below will error out because toBe is only a === comparison
// it('should remove duplicates from an array', function(){
//    expect(removeDupes([1,1,2,2,3,4])).toBe([1,2,3,4])
// })



// toEqual on the other hand is a deep comparison
it('should remove duplicates from an array', function(){
   expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
   expect(removeDupes([1,2,3])).toEqual([1,2,3])
})

// Remove duplicates from a string
it('should remove duplicates from a string', function(){
   expect(removeDupes('hello')).toEqual('helo')
   expect(removeDupes('hello')).toBeInstanceOf(String);
   expect(removeDupes([1,1,2,2,3,4])).toBeInstanceOf(Array);
})

it('should remove value from array', function(){
   expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
})