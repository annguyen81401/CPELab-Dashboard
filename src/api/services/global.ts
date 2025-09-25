import api from "../apiClient";

export const List = {

    //get Models List for filter
    getModels: () =>
        api.get({
            url: `unictrl-dashboard/v1/api/opts/models`,
        }),

    //get Plugins List for filter
    getPlugins: () =>
        api.get({
          url: `unictrl-dashboard/v1/api/opts/plugins`,
        }),
};