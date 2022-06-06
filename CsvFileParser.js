let csvFile = '56453,John,Doe,4,BCBS\n85632,Jane,Doe,4,BCBS\n56453,John,Doe,5,BCBS\n85632,Jill,Doe,6,Humana'
let lines = csvFile.split(/(?:\r\n|\n)+/);
let files = [];
// for each line of data create a new file
for (let i = 0; i < lines.length; i++) {
    let data = lines[i].split(',');
    let newFile = {
        userId: data[0],
        firstName: data[1],
        lastName: data[2],
        version: data[3],
        insuranceCompany: data[4]
    }
    // with duplicate files check for the version # and update to the latest file
    if (!files.some(file => file.userId === newFile.userId && file.insuranceCompany === newFile.insuranceCompany)) {
        files.push(newFile);
    } else {
        const userIndex = files.findIndex(object => { return object.userId === newFile.userId });
        if (files[userIndex].version < newFile.version) {
            files[userIndex] = newFile;
        }
    }
}
console.log(files);