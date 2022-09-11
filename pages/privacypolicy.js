import { Tooltip, Button, Grid } from "@nextui-org/react";
import { Spacer, Card, Image } from "@nextui-org/react";

export default function App ()
{
  return (
    <Grid.Container gap={ 2 } alignItems="center">
      <Card css={ { $$cardColor: "$colors$primary" } }>
        <Card.Body>
          <Spacer y={ 10 } />
        </Card.Body>
      </Card>
      <Tooltip placement="top" content={
        <Image
          width={ 320 }
          height={ 180 }
          src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
          alt="Default Image"
          objectFit="cover"
        />
      }>
        <Button auto flat css={ { p: 200 } }>
          Do hover here
        </Button>
      </Tooltip>
    </Grid.Container >
  );
}
