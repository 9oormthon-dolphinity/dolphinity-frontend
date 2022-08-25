import dayjs from "dayjs";

const yearMonthDay = (date: string) => {
  const yearObj = dayjs(new Date(date));

  return yearObj.format("YYYY년 MM월 DD일");
};

export { yearMonthDay };
