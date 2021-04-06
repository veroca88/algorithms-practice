// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact checkRegister.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

let currencyUnit = {
    "One-hundred Dollars": 100.0,
    "Twenty Dollars": 20.0,
    "Ten Dollars": 10.0,
    "Five Dollars": 5.0,
    "Dollar": 1.0,
    "Quarter": 0.25,
    "Dime": 0.1,
    "Nickel": 0.05,
    "Penny": 0.01
}

function checkCashRegister(price, cash, cid) {
    let checkRegister = { status: "", change: cid };
    // Calculate the change I need
    let changeNeeded = parseFloat(cash - price).toFixed(2)
    // Sum all the money I have in the drawer
    const totalInDrawerAvailable = getTotalInDrawer(cid)
    // Update the status
    checkRegister.status = getStatusOfRegister(changeNeeded, totalInDrawerAvailable)

    // If the status is INSUFFICIENT_FUNDS end function
    if (checkRegister.status === "INSUFFICIENT_FUNDS") {
        checkRegister.change = []
        return checkRegister
    }

    // To get the change for the costumer
    checkRegister.change = getCustomerChange(changeNeeded, cid)
}

function getCustomerChange(changeNeeded, cid) {

}

function getTotalInDrawer(cashInDrawer) {
    let total = 0;
    cashInDrawer.map(element => total += element[1])
    return total.toFixed(2)
}

function getStatusOfRegister(changeNeeded, totalInDrawerAvailable) {

    // Handle insufficient funds
    if (Number(changeNeeded) > Number(totalInDrawerAvailable)) return "INSUFFICIENT_FUNDS"

    // Handle enough funds
    if (Number(changeNeeded) < Number(totalInDrawerAvailable)) return "OPEN"

    // Handle exact change
    return "CLOSED"
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);