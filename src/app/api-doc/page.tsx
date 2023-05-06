import ReactSwagger from "./react-swagger";
import { getApiDocs } from "../../lib/swagger";

async function ApiDocPage() {
  const spec = await getApiDocs();
  return <ReactSwagger spec={spec} />;
}

export default ApiDocPage;
