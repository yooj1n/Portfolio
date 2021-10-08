import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
  <Helmet>
    <title>
    {title}  |  YJ
    </title>
    </Helmet>
  );
}


export default PageTitle;