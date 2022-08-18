function mess_with_the_string(string="") {
    let array = []
    for (let index = 0; index < string.length; index++) {
        if(index > 500) break

        let letter = string[index];
        
        if (letter == "<") {
            letter = "&lt"
        }
        
        if (letter == ">") {
            letter = "&gt"
        }

        array.push(letter)
    }
    
    return array.join("")
}