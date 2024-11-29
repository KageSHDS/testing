import { describe } from "mocha";
import { fetchUser, fetchPrint } from "../fetchUsers.mjs";
import { expect } from "chai";
import sinon from "sinon";

describe('Имитируем ответ от сервера', () => {
	it("Создаём заглушку", async() => {
        let fetchSub = sinon.stub(global, "fetch");
        try {
            const testUsers =[
                {
                id: 1,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                address: {
                    street: 'Dayna Park',
                    suite: 'Suite 449',
                    city: 'Bartholomebury',
                    zipcode: '76495-3109',
                    geo: [Object]
                },
                phone: '(775)976-6794 x41206',
                website: 'conrad.com',
                company: {
                    name: 'Yost and Sons',
                    catchPhrase: 'Switchable contextually-based project',
                    bs: 'aggregate real-time technologies'
                }
                },
                {
                id: 2,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxi me_Nienow',
                email: 'Sherwood@rosamond.me',
                address: {
                    street: 'Ellsworth Summit',
                    suite: 'Suite 729',
                    city: 'Aliyaview',
                    zipcode: '45169',
                    geo: [Object]
                    },
                phone: '586.493.6943 x140',
                website: 'jacynthe.com',
                company: {
                    name: 'Abernathy Group',
                    catchPhrase: 'Implemented secondary concept',
                    bs: 'e-enable extensible e-tailers'
                    }
                },
            ];
            fetchSub.resolves({
                ok: true,
                json: async () => testUsers
            });
            const users = await fetchUser();
            console.log(users);
            expect(users).to.have.lengthOf(2);
            expect(users).to.deep.equal(testUsers);
        }finally{
            fetchSub.restore();
        }
        
    });
})
