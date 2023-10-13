export type CityRatio = {
  cityName: string;
  registered: number;
  registeredRatio: number;
  submitted: number;
  submittedRatio: number;
  writing: number;
  writingRatio: number;
};

export type DateRatio = {
  date: Date;
  period: "오전" | "오후";
  registered: number;
  registeredRatio: number;
  submitted: number;
  submittedRatio: number;
  writing: number;
  writingRatio: number;
};

export type SchoolRatio = {
  registered: number;
  registeredRatio: number;
  schoolName: string;
  submitted: number;
  submittedRatio: number;
  writing: number;
  writingRatio: number;
};
