const account1 = '000256784';
const account2 = '000986056';
const account3 = '001546238';
const account4 = '030987456';

let balance1 = 790;
let balance2 = 5600;
let balance3 = 78065;
let balance4 = 120910;

let userAccount = prompt('Your account number:');
let userAction = prompt('Youe action:')

if(userAction === 'balance') {
  let userBalance = null;

  if(userAccount === account1) {
    userBalance = balance1; 
  } else if(userAccount === account2) {
    userBalance = balance2;
  } else if(userAccount === account3) {
    userBalance = balance3;
  } else if(userAccount === account4) {
    userBalance = balance4;
  }

  if(userBalance === null) {
    alert('Incorrect account number');
  } else {
    alert('Your balance is: ' + userBalance);
  }
} else if(userAction === 'withdraw') {
  let amount = parseInt(prompt('Amount to withdraw:'));
  
  if(userAccount === account1) {
    balance1 -= amount; 
  } else if(userAccount === account2) {
    balance2 -= amount;
  } else if(userAccount === account3) {
    balance3 -= amount;
  } else if(userAccount === account4) {
    balance4 -= amount;
  }
} else {
  alert('Uknown action. Are you stupid?')
}


