export interface NFTCertificate {
    index: number;
    params: {
        clawback: string;
        creator: string;
        decimals: number;
        "default-frozen": string;
        freeze: string;
        manager: string;
        name: string;
        "name-b64": string;
        reserve: string;
        total: number;
        url: string;
        "url-b64": string;
    }
}