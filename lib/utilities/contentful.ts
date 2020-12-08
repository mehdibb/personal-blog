import { createClient, Entry } from 'contentful';

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN,
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
  const result = await client.getEntries<{
    fullName: string;
    picture: Entry<{
      description: string;
      title: string;
      file: {
        url: string;
      };
    }>;
    shortDescription: string;
    socialLinks: SocialLink[];
  }>({
    content_type: 'authorProfile',
  });

  const author = result.items[0].fields;

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
