import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./Routes/Routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vocavive- Best Vocabulary Learning Platform</title>
        <meta
          name="description"
          content="Discover a revolutionary platform for enhancing vocabulary, pronunciation, and english language proficiency."
        />
        <meta
          name="keywords"
          content="Vocavive, Vocabulary learning platform, Language proficiency, Vocabulary expansion"
        />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
