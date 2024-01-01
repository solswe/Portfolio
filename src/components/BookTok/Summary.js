import {Card, CardBody, CardFooter, Image, Button, Progress} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";

function Summary() {
  return (
    <div className="project-layout">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="flex item-center">
              <div>
                <h1>BookTok</h1>
                <p>
                    A full stack web application to keep track of your visits to restaurants with date, picture, and memo.
                </p>
                <div className="flex gap-2 mt-2">
                  <Chip color="warning" variant="solid">Python</Chip>
                  <Chip color="warning" variant="solid">Next.js</Chip>
                  <Chip color="warning" variant="solid">React</Chip>
                  <Chip color="warning" variant="solid">NoSQL</Chip>
                  <Chip color="warning" variant="solid">Javascript</Chip>
                  <Chip color="warning" variant="solid">CSS</Chip>
                </div> 
                <div className="flex gap-4 mt-2">
                  <Chip color="warning" variant="bordered">User authentification</Chip>
                  <Chip color="warning" variant="bordered">Geolocation</Chip>
                </div>
              </div>
          </div>
        </CardBody>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <Button className="text-tiny" color="secondary" radius="full" size="md">
            Show more
          </Button>
          <Button radius="full" color="primary" variant="ghost" size="md">
            Show more
          </Button>
        </CardFooter>
      </Card>
    </div>

  );
}

export default Summary;
