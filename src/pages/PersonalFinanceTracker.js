import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Details from "../components/PersonalFinanceTracker/Details";

function PFTPage(){
  return(
    <>
      <div className="container pdp-main-cont">
        <div className="pdp-breadcrumbs">
          <Breadcrumbs size="lg">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
            <BreadcrumbItem href="/personalFinanceTracker">Personal Finance Tracker</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Details></Details>
      </div>
    </>
  );
}

export default PFTPage;
