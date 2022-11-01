array1 = ["A", "B", "C", "a", "b", "c"];
array2 = [0, 1, 2];
array3 = ['!', '@', '$'];

passLength = 10;

// array1Char = 6;
// array2Char = 2;
// array3Char = 2;

generatedPassword = '';

function randomValues(data) {
    let value = [];
    for (let i = 0; i < data.length; i++) { 
        let itemIndex = Math.floor(Math.random() * data.length);
        value.push(data[itemIndex])
    }
    return value;
}

(function generatePassword() {
    let x= randomValues(array1);
    let y= randomValues(array2);
    let z = randomValues(array3);
    let newPassword = [x, y, z];
    generatedPassword = randomValues(newPassword.flat());
    return generatedPassword;
})()

function newPasswordLength(requestedLength) {

    let requestedLengthPass = [];

    for (let x = 0; x < requestedLength; x++){
        requestedLengthPass.push(generatedPassword[x])
    }

    console.log(requestedLengthPass.join(''))
    return requestedLengthPass.join('');
}

newPasswordLength(8)