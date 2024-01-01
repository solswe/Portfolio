import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Details from "../components/Portfolio/Details";

function PortfolioPage(){
  return(
    <>
      <div className="container pdp-main-cont">
        <div className="pdp-breadcrumbs">
          <Breadcrumbs size="lg">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
            <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Details></Details>
      </div>
    </>
  );
}

export default PortfolioPage;
