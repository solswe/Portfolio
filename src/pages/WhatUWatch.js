import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Details from "../components/WhatUWatch/Details";

function WhatUWatchPage(){
  return(
    <>
      <div className="container pdp-main-cont">
        <div className="pdp-breadcrumbs">
          <Breadcrumbs size="lg">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
            <BreadcrumbItem href="/yumyumtok">What U Watch</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Details></Details>
      </div>
    </>
  );
}

export default WhatUWatchPage;
