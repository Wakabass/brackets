module.exports = function check(str, bracketsConfig) {
  // your solution
    let arr = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
      arr.push(str[i]);
    }
    else if(str[i] == ')' || str[i] == ']' || str[i] == '}'){
      arr.pop();
    }
  }
  if(arr.length == 0) {
    return true
  }
  else{
    return false;
  }

}
