interface ListData {
  id: string;
  label: string;
  description: string;
}

export const Data: ListData[] = [
  {
    id: "comments",
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    id: "candidates",
    label: "Candidates",
    description: "Get notified when a candidate applies for a job.",
  },
  {
    id: "offers",
    label: "Offers",
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];
