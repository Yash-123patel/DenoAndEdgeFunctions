
//Reading File
const decoder=new TextDecoder('utf-8');
const data=await Deno.readFile('information.txt');


//we have one more option to read an text file
const text=await Deno.readTextFile('information.txt');
console.log(decoder.decode(data));
console.log(text);

//For Removing/Deleting File

//await Deno.remove('information.txt');


