import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import React from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { getAuthor, Author, iconsMap } from '_/utilities';
import Link from 'next/link';
import styles from './index.module.scss';
import { IconButton } from '#';

interface Props {
  author: Author;
}

export default function Home({ author }: Props): React.ReactElement {
  return (
    <>
      <Row>
        <Col sm="9">
          <h2>Blog</h2>
          <p className="mb-5">
            Our everyday thoughts are presented here Music, video presentations, photo-shootings and
            more.
            Our everyday thoughts are presented here Music, video presentations, photo-shootings and
            more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="9">Posts</Col>
        <Col sm="3" className="px-4">
          <Row>
            <img
              alt={author.picture.description}
              src={author.picture.url}
              className="mb-3"
              style={{ width: '100%', height: 'auto' }}
            />
          </Row>
          <Row><h4>About me</h4></Row>
          <Row className="mb-3"><p className={styles.author_description}>{author.shortDescription}</p></Row>
          <Row className="mb-2"><h4>Follow Me</h4></Row>
          <Row className="mb-5">
            {author.socialLinks.map(({ link, title, type }) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <a href={link} target="_blank" rel="noreferrer" key={title}><IconButton Icon={iconsMap(type)} title={title} /></a>
            ))}
          </Row>
          <Row><h4>Twitter</h4></Row>
          <Row><p>coming soon...</p></Row>
          <Row>
            <Form className={styles.form}>
              <Form.Group controlId="aboutMe.search">
                <Form.Label />
                <div className={styles.search_bar_wrapper}>
                  <Form.Control placeholder="Search site..." className={styles.search_bar} />
                  <Button className={styles.search_bar_button}>GO</Button>
                </div>
              </Form.Group>
            </Form>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<
GetStaticPropsResult<{author: Author}>
> {
  const author = await getAuthor();

  return {
    props: {
      author,
    },
  };
}
