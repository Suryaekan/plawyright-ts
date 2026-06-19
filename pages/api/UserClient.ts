import { APIRequestContext, APIResponse } from "@playwright/test";

export class UserAPI {
    readonly request: APIRequestContext;
    readonly baseUrl = "https://reqres.in";
    readonly apiKey = "free_user_3FLqwfTI3FTeV7QVWCTWjyyimgs";

    readonly users_endpoint = `${this.baseUrl}/api/users`;

    readonly headers = {
        "x-api-key": this.apiKey
    };

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get_users(page: number): Promise<APIResponse> {
        return this.request.get(this.users_endpoint, {
            headers: this.headers,
            params: { page }
        });
    }

    async create_user(name: string, job: string): Promise<APIResponse> {
        return this.request.post(this.users_endpoint, {
            headers: this.headers,
            data: { name, job }
        });
    }

    async verify_created_user(userId: string): Promise<APIResponse> {
        return this.request.get(`${this.users_endpoint}/${userId}`, {
            headers: this.headers
        });
    }
}