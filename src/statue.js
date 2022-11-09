"use strict";
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    kiir() {
        console.log(this.load());
    }
    load() {
        let myContainer = document.querySelector(".tbody");
        myContainer.innerHTML += `
        <tr draggable="true">
                <td>${this.title}</td>
                <td>${this.year}</td>
                <td>${this.price}</td>
                <td>${this.height}</td>
            </tr>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let op = 0;
    let dab = 0;
    (_a = document.querySelector(".add")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let v_title = document.querySelector('.title').value;
        let v_year = document.querySelector('.year').value;
        let v_price = parseInt(document.querySelector('.price').value);
        let v_height = parseInt(document.querySelector('.height').value);
        let titlePattern = /[a-zA-Z]\s,/;
        let min1Pattern = /[a-zA-Z0-9]{1,}/;
        if (v_title.length < 1 && titlePattern.test(v_title) == false) {
            alert("Wrong name!");
        }
        else if (v_year.length < 1) {
            alert("Wrong year!");
        }
        else if (v_price < 1) {
            alert("Wrong price!");
        }
        else if (v_height < 10) {
            alert("Wrong height!");
        }
        else {
            let uj = new Statue(v_title, v_year, v_price, v_height);
            uj.load();
            op += v_price;
            dab++;
            let alp = document.querySelector('.alp');
            if (alp) {
                alp.textContent = `${op}`;
            }
            let db = document.querySelector('.ammount');
            if (db) {
                db.textContent = `${dab}`;
            }
        }
    });
});
