"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assigningGrade(score) {
    if (score >= 80) {
        return 'A';
    }
    else if (score >= 70) {
        return 'B';
    }
    else if (score >= 60) {
        return 'C';
    }
    else if (score >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
console.log(assigningGrade(85)); // Outputs: B
