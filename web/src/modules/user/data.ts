import { TALENTS_DATA } from "src/modules/talent/data";

export const USERS_DATA: Array<IUser> = [{
  name: 'Baturay Karaduman',
  first_name: 'Baturay',
  last_name: 'Karaduman',
  image_url: 'assets/images/user/baturay-serhat-karaduman.jpg',
  seniority_level: 'mid senior',
  description: 'I am full-stack developer who leans more to front-end side. I have been working with React and React Native projects for over 3 years now. I also have experience with Angular, coffeescript, jquery and similar javascript frameworks. ',
  description_short: 'Full-Stack Developer',
  cv_url: 'https://karadumanb.github.io/cv/',
  user_name: 'karadumanbaturay',
  github_url: 'https://github.com/karadumanb',
  facebook_url: 'https://www.facebook.com/baturay.karaduman',
  twitter_url: 'https://twitter.com/baturaykaraduma',
  linkedin_url: 'https://www.linkedin.com/in/baturay-serhat-karaduman-635a35131/',
  talents: [{
    ...TALENTS_DATA.find(t => t.title === 'React'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'React-Native'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'Ruby on Rails'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'Javascript'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }]
}, {
  name: 'Furkan Tanyol',
  first_name: 'Furkan',
  last_name: 'Tanyol',
  image_url: 'assets/images/user/tanyolfurkan.jpeg',
  seniority_level: 'senior',
  description: 'I am full-stack developer who leans more to front-end side. I have been working with React and React Native projects for over 3 years now. I also have experience with Angular, coffeescript, jquery and similar javascript frameworks. ',
  description_short: 'Full-Stack Developer',
  cv_url: 'https://tanyol.co/resume',
  user_name: 'tanyolfurkan',
  github_url: 'https://github.com/furkantanyol',
  facebook_url: 'https://www.facebook.com/furkan.tanyol',
  twitter_url: 'https://twitter.com/FurkanTanyol',
  linkedin_url: 'https://au.linkedin.com/in/furkan-tanyol',
  talents: [{
    ...TALENTS_DATA.find(t => t.title === 'React'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'React-Native'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'Angular'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }, {
    ...TALENTS_DATA.find(t => t.title === 'Python'),
    description: 'I have involved with react more than 3 years. Before that, I used to be Angular developer. However, I do enjoy using its features. I would like to keep my knowledge up to date with this technology.',
  }]
}]
