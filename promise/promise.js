// [ECMAScript 5 Syntax]

const isNetworkOK = true;

// This function return a Promise
function downloadFile(url) {
    console.log("Start downloading file ..."); // ***

    // A Promise
    const promise = new Promise(function (resolve, reject) {
        if (isNetworkOK) {
            console.log("Complete the download process!"); // ***
            const file = {
                fileName: "file.mp3",
                fileContent: "...",
                fileSize: "3 MB",
            };
            resolve(file); // fulfilled
        } else {
            console.log("File download process failed!"); // ***
            const error = new Error("There is a problem with the network.");
            reject(error); // reject
        }
    });
    return promise; // Return a Promise.
}

// Call downloadFile(..) function:
// Returns a Promise object:
const willIGetAFile = downloadFile("http://example.com/file.mp3");

async function test(value) {
    try {
        console.log(value);
        const fulfilled = await willIGetAFile;
        console.log(fulfilled);
    } catch (error) {
        console.log(error.message);
    }
}
test();

console.log("cai nay chay truoc");

// (executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
