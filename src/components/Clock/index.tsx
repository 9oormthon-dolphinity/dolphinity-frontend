import Typography from "components/Typography";
import { useEffect, useState } from "react";
import { ClockLine, ClockWrapper } from "./styles";
import { useTheme } from "@emotion/react";

let intervalId: any = null;

const Clock = () => {
  const [timeStamp, setTimeStamp] = useState<string>("00:00");
  const theme = useTheme();
  useEffect(() => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        const date = new Date();
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        setTimeStamp(`${hours}:${minutes}:${seconds}`);
      });
    }
  }, []);

  return (
    <ClockWrapper>
      <ClockLine />
      <Typography variant="h3" color={theme.colors.deepBlue[0]} weight={400}>
        {timeStamp}
      </Typography>
    </ClockWrapper>
  );
};

export default Clock;
