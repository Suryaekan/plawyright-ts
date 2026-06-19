import { test, expect, request } from '@playwright/test';
import { UserAPI } from "../../pages/api/UserClient"

test('ReqRes API Automation via Page Object Model', () => {
    let userApi: UserAPI;

    test('GET /api/users?page=2 ', async ({request}) => {

        let user_api = new  UserAPI(request)
        const response = await user_api.get_users(2);
        expect(response.status()).toBe(200);
        
        const body = await response.json();
        expect(Array.isArray(body.data)).toBeTruthy();

        expect(body.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect(Number),
                    email: expect(String),
                    first_name: expect(String),
                    last_name: expect(String)
                })
            ])
        );
    });

    test('POST /api/users validate creation and verify flow structure', async ({request}) => {


        let user_api = new  UserAPI(request)
        const testUserData = { name: 'morpheus', job: 'leader' };
        
        const response = await user_api.create_user(testUserData.name, testUserData.job);
        expect(response.status()).toBe(201);
        
        const body = await response.json();
        expect(body.name).toBe(testUserData.name);
        expect(body.job).toBe(testUserData.job);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('createdAt');
    });
});