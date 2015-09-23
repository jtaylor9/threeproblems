/**
 * Solves the first three problems in five problems every SE should solve
 * https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour
 * Created by jtayl_000 on 9/23/2015.
 */

var testNums = [1, 2, 3, 4];
function sumFor(nums) {
  var total = 0;
  for(var i = 0; i<nums.length; i++) {
    total += nums[i];
  }

  return total;
}

function sumWhile(nums){
  var total = 0;
  var count = 0;
  while(count < nums.length) {
    total += nums[count];
    count++;
  }

  return total;
}

function sumRecursion(nums) {
  if(nums.length === 0){
    return 0;
  }
  else
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){return memo+num;}, 0);
}

var tlist1 = ["a","b","c"];
var tlist2 = [1,2,3];

function zipList(list1, list2) {
  var newList = [];

  for(var i = 0; i < list1.length; i++){
    newList.push(list1[i], list2[i]);
  }

  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}

function fib() {
  var first = 0;
  var last = 1;
  var flist = [last];

  for(var i =0; i<99; i++) {
    var tfirst = first;
    first = first + last;
    last = tfirst;
    flist.push(first);
  }
  return flist;
}
console.log("sumFor: " + sumFor(testNums));
console.log("sumWhile: " + sumWhile(testNums));
console.log("sumRecursion: " + sumRecursion(testNums));
console.log("sumTheSimpleWay: " + sumTheSimpleWay(testNums));
console.log("zipList: " + zipList(tlist1,tlist2));
console.log("zipListTheSimpleWay: " + zipListTheSimpleWay(tlist1, tlist2));
console.log("fib: " + fib());