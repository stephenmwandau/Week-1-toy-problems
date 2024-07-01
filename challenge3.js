const ps = require("prompt-sync");
const prompt = ps({sigint: true});

const basicSalary = parseInt(prompt("What is your basic salary? "), 10);
const benefits = parseInt(prompt("What are your total benefits? "), 10);

const grossSalary = basicSalary + benefits;
console.log(`Gross Salary: ${grossSalary}`);

function nhifDeduction(gross) {
    if (gross <= 5999) {
        return 150;
    }
    if (gross >= 6000 && gross <= 7999) {
        return 300;
    }
    if (gross >= 8000 && gross <= 11999) {
        return 400;
    }
    if (gross >= 12000 && gross <= 14999) {
        return 500;
    }
    if (gross >= 15000 && gross <= 19999) {
        return 600;
    }
    if (gross >= 20000 && gross <= 24999) {
        return 750;
    }
    if (gross >= 25000 && gross <= 29999) {
        return 850;
    }
    if (gross >= 30000 && gross <= 34999) {
        return 900;
    }
    if (gross >= 35000 && gross <= 39999) {
        return 950;
    }
    if (gross >= 40000 && gross <= 44999) {
        return 1000;
    }
    if (gross >= 45000 && gross <= 49999) {
        return 1100;
    }
    if (gross >= 50000 && gross <= 59999) {
        return 1200;
    }
    if (gross >= 60000 && gross <= 69999) {
        return 1300;
    }
    if (gross >= 70000 && gross <= 79999) {
        return 1400;
    }
    if (gross >= 80000 && gross <= 89999) {
        return 1500;
    }
    if (gross >= 90000 && gross <= 99999) {
        return 1600;
    }
    if (gross >= 100000) {
        return 1700;
    }
}

function payee(gross) {
    if (gross <= 24000) {
        return 0.1 * gross;
    }
    if (gross > 24000 && gross <= 32333) {
        return 0.25 * gross;
    }
    if (gross > 32333 && gross <= 500000) {
        return 0.3 * gross;
    }
    if (gross > 500000 && gross <= 800000) {
        return 0.325 * gross;
    }
    if (gross > 800000) {
        return 0.35 * gross;
    }
}

function nssfDeduction(gross) {
    return gross * 0.06;
}

const payAsYouEarn = payee(grossSalary);
console.log(`PAYEE: ${payAsYouEarn}`);

const nhifDeducted = nhifDeduction(grossSalary);
console.log(`NHIF Deduction: ${nhifDeducted}`);

const nssfDeducted = nssfDeduction(grossSalary);
console.log(`NSSF Deduction: ${nssfDeducted}`);

const netSalary = grossSalary - (payAsYouEarn + nhifDeducted + nssfDeducted);
console.log(`Net Salary: ${netSalary}`);
