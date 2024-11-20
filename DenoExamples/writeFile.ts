//Writing File
const encoder=new TextEncoder();
await Deno.writeFile('information.txt',encoder.encode("My name is yash"));


//another easy way for writing in text file
await Deno.writeTextFile('information.txt','I am Deno');
//For Renaming File 

// await Deno.rename('info.txt','information.txt');