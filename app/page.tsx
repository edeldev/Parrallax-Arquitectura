import { Fragment } from "react";
import {
  Footer,
  HomePage,
  ProjectsPage,
  ServicesPage,
  SponsorsPage,
} from "./components";

export default function Home() {
  return (
    <Fragment>
      <HomePage />

      <SponsorsPage />

      <ProjectsPage />

      <ServicesPage />

      <Footer />
    </Fragment>
  );
}
