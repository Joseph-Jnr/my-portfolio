import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

const PageHelmet = ({ title, description = "" }: Props) => (
  <Helmet title={`Joseph Jnr | ${title}`}>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
  </Helmet>
);

export default PageHelmet;
