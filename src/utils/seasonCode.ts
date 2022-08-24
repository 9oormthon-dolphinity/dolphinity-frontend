const seasons = {
  SPRING: "spring",
  SUMMER: "summer",
  AUTUMN: "autumn",
  WINTER: "winter",
};

type codeNum = 1 | 2 | 3 | 4;

export default function seasonName(seasonCode: codeNum) {
  switch (seasonCode) {
    case 1:
      return seasons.SPRING;
    case 2:
      return seasons.SUMMER;
    case 3:
      return seasons.AUTUMN;
    case 4:
      return seasons.WINTER;
  }
}
