import { Anchor, Button, Center, Kbd, Space, Text } from "@mantine/core";
import React from "react";

function DownloadPage() {
  const PDF_DRIVE_KEY = "1QTvil4FRk1PRk_zQ0S5_cLWpx6wq4ZuZ";
  const key = `https://drive.google.com/uc?export=download&id=${PDF_DRIVE_KEY}`;
  return (
    <>
      <Center>
        <iframe
          src="https://drive.google.com/file/d/1QTvil4FRk1PRk_zQ0S5_cLWpx6wq4ZuZ/preview"
          width="1024"
          height="640"
          allow="autoplay"
        ></iframe>
      </Center>
      <Space h={20} />
      <Center>
        <Anchor href={key}>
          <Button accessKey="d">Download</Button>
        </Anchor>
      </Center>
      <Space h={20} />

      <Center>
        <Text>
          {" "}
          You can <Kbd>shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>D</Kbd> to download
          it
        </Text>
      </Center>
    </>
  );
}

export default DownloadPage;
