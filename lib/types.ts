export type Stat = {
  num: string;
  unit?: string;
  label: string;
  /** Preserved verbatim from source even where inconsistent — surface in UI. */
  needsReview?: boolean;
  /** Source value is an explicit `$XXK` placeholder pending a real figure. */
  placeholder?: boolean;
};

export type Achievement = {
  /** Title line. */
  t: string;
  /** Body paragraph. */
  b: string;
};

export type Role = {
  id: string;
  co: string;
  role: string;
  loc: string;
  dates: string;
  current?: boolean;
  flagship?: boolean;
  summary: string;
  stats: Stat[];
  achievements: Achievement[];
  tech: string[];
};

export type Metric = {
  label: string;
  num: string;
  unit?: string;
  prefix?: string;
  desc: string;
  spark: "up" | "down" | "flat";
  needsReview?: boolean;
  /** ID of the Project this metric was produced by, if any. Used to make the
   *  metric card clickable and scroll to the project. */
  projectId?: string;
};

export type Project = {
  id: string;
  name: string;
  co: string;
  flagship?: boolean;
  problem: string;
  built: string;
  approach: string;
  tech: string[];
  impact: string;
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type JourneyStop = {
  yr: string;
  pl: string;
  ct: string;
  loc: string;
  current?: boolean;
};
