const fs = require('fs');


// how to read from file 
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);

    }
    console.log(data.toString());
});

// how to write to file
fs.writeFile('./docs/blog2.txt', 'hello world',() => {
   
    console.log('file was written to.');
    
});


// how to create directory

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder removed');
    })
}