export class SeasideAPI {
    constructor() {}

    public getTwitchAuthUrl(): string {
        return "";
    }

    public async getApiHealth(): Promise<boolean> {
        const res: { data: string[]; error: string | null; message: string } =
            await fetch("https://api.seaside.fm/health", {
                method: "GET",
            }).then((res) => res.json());
        console.log(res.data);

        return res.data[0] === "OK";
    }
}
