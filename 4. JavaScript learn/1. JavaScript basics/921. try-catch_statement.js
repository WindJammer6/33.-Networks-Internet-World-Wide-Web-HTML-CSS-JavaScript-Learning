try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log('Result is:', result);

    // Now force an error
    let x = y + 1;  // ❌ 'y' is not defined
    
} catch (error) {
    // This block runs if an error occurred in the try block
    console.error('Caught an error:', error.message);
}