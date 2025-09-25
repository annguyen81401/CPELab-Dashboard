import api from "../apiClient";

export const overviewApi = {
  getOverviewsCPESSystem: () =>
    api.get({
      url: `unictrl-dashboard/v1/api/overviews/cpes/system`,
    }),

  getOverviewsCPESModelChanges: (params: { from_date: string; to_date: string; models: string[] }) => {
    const modelsParam = encodeURIComponent(params.models.join(",")); // list -> "A,B,C"
    return api.get({
      url: `/unictrl-dashboard/v1/api/overviews/cpes/model-changes/ts?from_date=${params.from_date}&to_date=${params.to_date}&models=${modelsParam}`,
    });
  },
};
