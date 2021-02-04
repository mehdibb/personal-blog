import { createClient, Entry } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';
import { EntryProps } from 'contentful-management/types';

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN,
});

const managementClient = createManagementClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
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
  const result = await client.getEntry<{
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
  }>('4H2AcYu3t9QLf6R28hS833');

  const author = result.fields;

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

export const updateAuthorField = async (
  fieldName: string,
  fieldValue: string,
// eslint-disable-next-line consistent-return
): Promise<EntryProps<{shortDescription: {'en-US': string}}>> => {
  try {
    const space = await managementClient.getSpace('des3cp1ojg7g');
    const environment = await space.getEnvironment('master');
    const entry = await environment.getEntry('4H2AcYu3t9QLf6R28hS833');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-param-reassign
    entry.fields[fieldName]['en-US'] = fieldValue;
    return await entry.update() as unknown as EntryProps<{shortDescription: {'en-US': string}}>;
  } catch {
    // TODO: handle later
  }
};
