export class User {
  login: string;
  avatar_url: string;
  bio: string;
  created_at: any;
  followers: number;
  following: number;
  html_url: string;
  updated_at: any;
  public_repos: number;

  constructor(
    login: string,
    avatar_url: string,
    bio: string,
    created_at: any,
    followers: number,
    following: number,
    html_url: string,   
    updated_at: any,
    public_repos: number
  ) {
    this.login = login;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.created_at =created_at;
    this.followers = followers;
    this.following = following;
    this.html_url = html_url;
    this.updated_at = updated_at;
    this.public_repos = public_repos;

  }
}
