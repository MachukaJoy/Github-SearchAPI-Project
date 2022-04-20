export class Repo {
  constructor(
    public full_name: string,
    public description: string,
    public fork:number,
    public stargazers_count: number,
    public clone_url: string,
    public language: string

  ) {}

}
