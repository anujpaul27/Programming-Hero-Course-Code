// ekti function er vitore arekti function return korle ebg er function a tar higher/parent function er value ke use korle take CLOSURE bole.
function func() {
  let value = 0;
  return function () {
    value++;
    console.log("Closure value is:", value);
  };
}

let ans = func();
ans(); // 1
ans(); // 2

let an = function ()
{
    
}

// lexical scope
// function abc  ()
// {
//     let a = 10;
//     return function ()
//     {
//         a = 20;
//         let b = 20;
//         return function ()
//         {
//             let c = 20;
//         }
//     }
// }

let a = 10;
function func() {
  console.log(a);
}

function ans() {
  let a = 20;
  func();
}
ans();
