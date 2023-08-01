const spinner = function() {

  console.log('hello from spinner1.js... \rheyyy');
    
  let arr = ['\r|   ','\r/   ','\r-   ', '\r\\   '];
  let count = 0;
  
  while (count < 3000) {
    for (let i = 0; i < arr.length; i++) {
    

      setTimeout(() => {
        process.stdout.write(arr[i]);
      }, 100 + count);
              
      count += 100;

      
    }
 
  
  

  }

  setTimeout(() => {
    process.stdout.write('\n');  // add newline here
  }, 3200);

};

spinner();


  



    