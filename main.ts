function decode () {
    for (let værdi of kode) {
        if (værdi == "P") {
            basic.showString("L")
        }
        if (værdi == "R") {
            basic.showString("H")
        }
        if (værdi == "N") {
            basic.showString("G")
        }
        if (værdi == "X") {
            basic.showString("M")
        }
        if (værdi == "S") {
            basic.showString("I")
        }
        if (værdi == "Z") {
            basic.showString("E")
        }
        if (værdi == "W") {
            basic.showString("N")
        }
    }
}
radio.onReceivedString(function (receivedString) {
    datalogger.log(datalogger.createCV("kode", receivedString))
    kode = receivedString
    basic.showIcon(IconNames.Heart)
    decode()
})
let kode = ""
radio.setGroup(2)
kode = ""
datalogger.setColumnTitles("kode")
