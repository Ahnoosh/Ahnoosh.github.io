for (i = 1; i <= 7; i++) {
    for (j = 1; j <= i; j++) {
        console.log("#");
    }

}

// Solution js triangle
var temp;
for (i = 1; i <= 7; i++) {
    temp = "";
    for (j = 1; j <= i; j++) {
        temp += "#"; // equivalent to temp = temp + "3"
    }
    console.log(temp);
}