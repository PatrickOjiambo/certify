export class TeachingInstitution {
    name: string;
    wallet_address: string;

    constructor(institution_name: string, wallet_address: string) {
        this.name = institution_name;
        this.wallet_address = wallet_address
    }
}