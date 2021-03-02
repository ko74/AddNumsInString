str=prompt("Enter a sentence or word");
function addStr(str) {
  let nums = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      nums.push(Number(str[i]));
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return console.log("The sum is:"+ sum);
}
addStr(str);