// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact checkRegister.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

let currencyUnit = [
    { name: "One-hundred Dollars", value: 100.0 },
    { name: "Twenty Dollars", value: 20.0 },
    { name: "Ten Dollars", value: 10.0 },
    { name: "Five Dollars", value: 5.0 },
    { name: "Dollar", value: 1.0 },
    { name: "Quarter", value: 0.25 },
    { name: "Dime", value: 0.1 },
    { name: "Nickel", value: 0.05 },
    { name: "Penny", value: 0.01 }
]
function checkCashRegister(price, cash, cid) {
    let checkRegister = { status: "", change: [] };
    let totalCid = 0;
    let newCid = []
    let operationPrice = cash - price

    // Put the input cid in correct format and sum all the money

    cid.map((element, index) => {
        totalCid += element[1];
        newCid.push({ name: element[0], value: element[1] })
        if (index === 8) { newCid.push({ total: totalCid }) }
    }
    )

    //If the client cash is not enough

    if (cash < price) {
        checkRegister.status = "IN NOT ENOUGH MONEY";
    }
    // Handle exact change

    if (newCid[9].total == operationPrice) {
        checkRegister.status = "CLOSED"
        checkRegister.change = newCid
        return checkRegister
    }

    // Handle insufficient funds

    if (sumCashRegister < operationPrice) {
        checkRegister.status = "INSUFFICIENT_FUNDS"
        return checkRegister
    }
    else {
        checkRegister.status = "OPEN"
        checkRegister.change = operationPrice
    }

    return change;
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);