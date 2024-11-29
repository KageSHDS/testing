import { expect } from "chai"
import {fetchPrint, fetchUser} from "../fetchUsers.mjs"



describe("Тестируем данные пользователей", () => {
    it("Проверяем наличие определенных полей",  async ()=>{
        const users =  await fetchUser();
        expect(users).to.be.an("Array");
        users.forEach(user => {
            expect(user).to.have.all.keys("id", "name", "username", "email", "address", "phone", "website", "company")
        });
    });
    it("Проверяем, что у нас всего 10 пользователей", async() => {
        const users =  await fetchUser();
        expect(users).to.have.lengthOf(10);
    });
    it("Проверяем, что поле Email содержит корректную почту ", async() => {
        const users =  await fetchUser();
        const checkEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(biz|io|me|info|ca|org|net|tv)$/;
        //* Регулярное выражение,  [a-zA-Z0-9._%+-] соответствует 
        //* имени пользователя в email, она допускает буквы(верхнего и нижнего регистра)
        //* цифры, а также символы: ., _, %, +, -.
        //* [a-zA-Z0-9.-] эта часть соответствует доменному имени,  
        //* + означает, что символы используются как минимум 1 раз,
        //* \. указывает что перед доменном должна быть точка,
        //* (biz|io|me|info|ca|org|net|tv) указывает допустимые домены,
        //* $ указывает на конец строки
        users.forEach(user => {
            expect(user.email).to.match(checkEmail);
        });
    });
    it("Проверяем, что поля не пустые", async() => {
        const users = await fetchUser();
        users.forEach(user => {
            expect(user.id).to.not.be.undefined;
            expect(user.name).to.not.be.empty;
            expect(user.username).to.not.be.empty;
            expect(user.email).to.not.be.empty;
            expect(user.address).to.not.be.empty;
            expect(user.phone).to.not.be.empty;
            expect(user.website).to.not.be.empty;
            expect(user.company).to.not.be.empty;
        });
    });
    it("Проверяем корректность поля website", async() => {
        const users = await fetchUser()
        const checkWeb = /^[a-zA0-9._%+-]+\.(net|org|info|biz|io|com)$/
        users.forEach(user => {
            expect(user.website).to.match(checkWeb);
        });
    });
    it("Проверяем, что поля в company не пустые", async() => {
        const users = await fetchUser();
        users.forEach(user => {
            expect(user.company.name).to.not.be.empty;
            expect(user.company.catchPhrase).to.not.be.empty
            expect(user.company.bs).to.not.be.empty
        });
    });
})

describe("Выводим имена пользователей в консоль", () => {
    it("Выводим имена", async () => {
        await fetchPrint();
    });
})