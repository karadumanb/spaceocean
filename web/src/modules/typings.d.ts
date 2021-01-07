declare interface IArticle {
  title: string;
  image_url: string;
  description: string;
  author: string;
}

declare interface IUserTalent extends ITalent{
  description: string;
}

declare interface IUser {
  name: string;
  first_name: string;
  last_name: string;
  user_name: string;
  talents: IUserTalent[];
  image_url: string;
  description: string;
  description_short: string;
  cv_url?: string;
  seniority_level: 'senior' | 'mid senior' | 'junior';
  github_url: string;
  facebook_url: string;
  twitter_url: string;
  linkedin_url: string;
}

declare interface IExperience {
  title: string;
  description: string;
  categories: string[];
  image_url: string;
  user: string;
  technologies: string[];
}

declare interface ITalent {
  title: string;
  primary?: string;
  secondary?: string;
  title_short?: string;
}
