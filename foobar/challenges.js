function removeNonDigits(str) {
    return str.replace(/\D/g, "")
}

function cleansePhoneNumber(phone) {
    // remove parenthesis, hyphens, periods, etc
    var cleansedPhone = removeNonDigits(phone)
    /*
    **From**: You
    **To**: Sandy
    **CC**: Leslie
    **Subject**: re: File upload broken - help!

    I noticed that there are phone numbers missing area codes. To remedy this problem:
    1. We could manually insert the correct area codes for all phone numbers that are missing them, but with the time constraints this might not be tangible at the moment.
    2. We could provide a generic area code, such as 000, to be used in the code as needed, but the client would need to approve this first as it could be seen as falsifying the data.
    3. We could alter our code to overlook the phone number completely if  it does not contain an area code.
    4. I believe that our fastest option at the moment, without altering the data, would be to alter some our code to allow phone numbers to be either 10 digits(with area code) or 7 digits(without area code) long.

    Hope this helps,
    Casey Spears
    */
    // empty is OK
    if (cleansedPhone !== "" && cleansedPhone.length !== 10 && cleansedPhone.length !== 7) {
      console.log(cleansedPhone)
      throw new Error("Invalid phone number!")
    }

    return cleansedPhone
}

  // NOTE: Feel free to test other phone numbers to figure out what's happening
function main() {
    console.log(cleansePhoneNumber("(123) 456-7890"))
    console.log(cleansePhoneNumber("123-456-7890"))
    console.log(cleansePhoneNumber("456-7890"))
}
