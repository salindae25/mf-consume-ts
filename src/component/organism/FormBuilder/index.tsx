import { lazy, Suspense } from "react";
//@ts-ignore
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiIxNWUyN2RkOS04ZWY1LTQ3NjctOTMzNC03ODhiMDBhMjhiNDUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDk0ZWYwOC1hY2U0LTQ5YjctYWQ5YS02YTE4NTA1N2Q0OWEiLCJpc3MiOiJodHRwczpcL1wvY3gtcWEtYXV0aC1zZXJ2ZXIudXNlY29tcG9zZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJOZXdTdXBlckFkbWluIiwiQVVUSF9GTE9XIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiYXVkIjoiY29tcG9zZS1jbGllbnQiLCJuYmYiOjE2ODcyODM4MTEsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwibmFtZSI6Ik5ld1N1cGVyQWRtaW4gMiIsImV4cCI6MTY4NzMyNzAxMSwiaWF0IjoxNjg3MjgzODExLCJmYW1pbHlfbmFtZSI6IjIiLCJlbWFpbCI6ImFkbWluQHVzZWNvbXBvc2UuY29tIn0.K2PnzKZwf7pcwtZ-VaxAZwszF7JuGvuzffYsvZRGxz5zNGEhyK4xu8FC6XGC3MGOvuwsGx_vWPnONbqvTfO2p5zCU3TExgkp36yWoUWf1t9_wdxxqK7kL5yy99szPPpskiB-DNFeeHdFfzW6WndFTXNuHAJ93XHQbGR1eAn-m_ecOf1KQ_XYehsKM_Ebz8tc2hOswPyT3lxsfFYaZzxSVP5FuHJLCBBSsbNxSXEHaOJizDA2kIajsIyEAQUCoCmoe3O8Qh8U_ZPf1-soda7Wh_6PV2sBQo-eBzfDZWfFARUrfegxLq9FZVaOihCuZhoihHz9zaMDVKhbpQ1JosxrUg",
};
const FormBuilder = ({ formId }: { formId: string }) => {
  return (
    <>
      <Suspense fallback={<>loading..</>}>
        <ComposeFormBuilder
          tokenData={data}
          formId={formId}
          returnUrl={"/home"}
        />
      </Suspense>
    </>
  );
};

export default FormBuilder;
