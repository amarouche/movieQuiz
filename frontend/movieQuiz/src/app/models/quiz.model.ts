export class Question {
  constructor(
    public movie_id: number,
    public movie_titel:string,
    public poster_path: string,
    public acting_id: number,
    public acting_name: string,
    public response: boolean,
    public acting_profile_path?: string,
  ) {}
}