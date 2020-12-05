import { createClient, Entry } from 'contentful';

// TODO: remove these hard-coded tokens
const client = createClient({
  accessToken: 'OocUly3YBg8K1L1bDTs0LXWzhG0giYozxxdoS0dmX7c',
  space: 'des3cp1ojg7g',
});

export interface SocialLink {
  type: 'instagram' | 'twitter' | 'facebook';
  title: string;
  link: string;
}

export interface Author {
  fullName: string;
  shortDescription: string;
  picture: {
    title: string;
    url: string;
    description: string;
  };
  socialLinks: SocialLink[];
}

export async function getAuthor(): Promise<Author> {
  const { items } = await client.getEntries<{
    fullName: string;
    shortDescription: string;
    picture: Entry<{title: string; description: string; file: {url: string}}>;
    socialLinks: SocialLink[];
  }>('authorProfile');
  const author = items[0].fields;
  return {
    fullName: author.fullName,
    picture: {
      description: author.picture.fields.description,
      title: author.picture.fields.title,
      url: author.picture.fields.file.url,
    },
    shortDescription: author.shortDescription,
    socialLinks: author.socialLinks,
  };
}
