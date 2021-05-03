import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import DefaultErrorPage from "next/error";

import { getOfferBySlug } from "../../../../server";

type Props = {
  offer: { slug: string; name: string };
};

const LocalOfferPage: NextPage<Props> = ({ offer }) => {
  if (!offer) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} title="This offer doesn't exist" />
      </>
    );
  }

  return <h1>{offer.name}</h1>;
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const offer = await getOfferBySlug(slug as string);

  if (!offer) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      offer: offer ?? false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export default LocalOfferPage;
