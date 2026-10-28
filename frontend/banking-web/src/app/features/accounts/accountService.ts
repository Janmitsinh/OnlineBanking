@Injectable({
    providedIn: ' root'
})
export class AccountService {
    private api = 'http://localhost:3000/api/accounts';

    constructor(
    private http: HttpClient
    ) { }

    getAccounts() {
        return this.htpp.get(this.api);
    }
}