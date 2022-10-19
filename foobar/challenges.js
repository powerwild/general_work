// function removeNonDigits(str) {
//     return str.replace(/\D/g, "")
// }

// function cleansePhoneNumber(phone) {
//     // remove parenthesis, hyphens, periods, etc
//     var cleansedPhone = removeNonDigits(phone)
//     /*
//     **From**: You
//     **To**: Sandy
//     **CC**: Leslie
//     **Subject**: re: File upload broken - help!

//     I noticed that there are phone numbers missing area codes. To remedy this problem:
//     1. We could manually insert the correct area codes for all phone numbers that are missing them, but with the time constraints this might not be tangible at the moment.
//     2. We could provide a generic area code, such as 000, to be used in the code as needed, but the client would need to approve this first as it could be seen as falsifying the data.
//     3. We could alter our code to overlook the phone number completely if  it does not contain an area code.
//     4. I believe that our fastest option at the moment, without altering the data, would be to alter some our code to allow phone numbers to be either 10 digits(with area code) or 7 digits(without area code) long.

//     Hope this helps,
//     Casey Spears
//     */
//     // empty is OK
//     if (cleansedPhone !== "" && cleansedPhone.length !== 10 && cleansedPhone.length !== 7) {
//       console.log(cleansedPhone)
//       throw new Error("Invalid phone number!")
//     }

//     return cleansedPhone
// }

//   // NOTE: Feel free to test other phone numbers to figure out what's happening
// function main() {
//     console.log(cleansePhoneNumber("(123) 456-7890"))
//     console.log(cleansePhoneNumber("123-456-7890"))
//     console.log(cleansePhoneNumber("456-7890"))
// }


// const commonHosts = [
//     "aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "google.com", "hotmail.com", "hotmail.co.uk", "live.com","mac.com", "me.com", "mail.com", "msn.com", "outlook.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"
// ]

// function hostForEmail(email) {
//     var emailArray = email.split("@");
//     return emailArray[emailArray.length - 1];
// }

// function isCommonEmailHost(email) {
//     var host = hostForEmail(email);

//     /*
//     During the iteration of the commonHosts array the else statement was causing the match to
//     be false for every provider that was not the one being searched for.
//     This was causing the function to return false unless the provider being matched was the last one of the array.
//     I removed the match variable and set the loop to return true as soon as a match is found to reduce the time spent traversing
//     the array otherwise the function will return false if the entire array is traversed without a match being found.
//     */
//     let i = 0;
//     while (i < commonHosts.length) {
//       if (commonHosts[i] === host) {
//         return true;
//       }
//       i++;
//     }
//     return false;
// }


// function removePunctuation(str) {
//     return str.replace(/[^\w\s-]/g, '')
//   }
//   function isSuffix(str) {
//     const suffix = ['Sr', 'Jr', 'II', 'III', 'IV'];
//     for (let s of suffix) {
//       if (s.toLowerCase() === str.toLowerCase()) return true;
//     }
//     return false;
//   }
//   function nameToParts(name) {
//     const results = [];
//     const names = name.split(' ');
//     let i = 0;
//     let j = 0;
//     while (j < 5) {
//       let char = '';
//       if (i === 0 || i === 2) {
//         char = removePunctuation(names[i]);
//         ++j;
//       }
//       if (i === 1) {
//         if ((names[i].length < 2 || names[i][1] === '.')) {
//           char = removePunctuation(names[i]);
//           ++j;
//         }
//       }
//       if (i === 3) {
//         if (i < names.length && isSuffix(names[i])) {
//           char = removePunctuation(names[i]);
//         }
//         j = 5;
//       }
//       results.push(char);
//       ++i;
//     }
//     return results;
//   }


async function finestFoodOutlet(city, votes) {

}
