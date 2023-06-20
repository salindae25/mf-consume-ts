import { lazy, Suspense } from "react";
//@ts-ignore
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiJlMjA5MTNiZC05ZThiLTQxZjItODYxMC0wZjFmZDk1ZGE4YWIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDk0ZWYwOC1hY2U0LTQ5YjctYWQ5YS02YTE4NTA1N2Q0OWEiLCJpc3MiOiJodHRwczpcL1wvY3gtcWEtYXV0aC1zZXJ2ZXIudXNlY29tcG9zZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJOZXdTdXBlckFkbWluIiwiQVVUSF9GTE9XIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiYXVkIjoiY29tcG9zZS1jbGllbnQiLCJuYmYiOjE2ODY4ODczOTAsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwibmFtZSI6Ik5ld1N1cGVyQWRtaW4gMiIsImV4cCI6MTY4NjkzMDU5MCwiaWF0IjoxNjg2ODg3MzkwLCJmYW1pbHlfbmFtZSI6IjIiLCJlbWFpbCI6ImFkbWluQHVzZWNvbXBvc2UuY29tIn0.rT0Q90DfB2-t4JD8A5BVj9c8MJEjwJ1lp8Uce3iH3kdTkFTiCdYs0mCBhK0sOmwAt1FpMHVQRym5w_KtcxOlEHaCqgpmC3rOcoZmBVFNnXDSZDhHlnQ_yjQfCjbe3jO4ihcFGQKOJbgteV7WdS6YlIRnqddtYGfQ_UDefQ0TYoiqet8FgZMkREA-unVlMJMI6GkMIsX12kdMDBbhMvVT7CQWefB6OyQcjZqwj3_8kAk9T8eVr2jtMIOr5QjfUh_AWVWJILpgjcBGgE37jglxkqsJLIFORFnXbY_2-xmo9pnC2FRZ2THiy6i5l0oZCorNdTKQscNmoyUQKBFiHy_Eng",
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
