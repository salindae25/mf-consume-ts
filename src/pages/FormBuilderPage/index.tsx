import { FormBuilder } from "component/organism";
import { useParams } from "react-router-dom";

const FormBuilderPage = () => {
  const params = useParams();
  const formId = params?.id || "";
  return <FormBuilder formId={formId} />;
};

export default FormBuilderPage;
