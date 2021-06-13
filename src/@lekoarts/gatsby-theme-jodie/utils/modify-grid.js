import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/poster/1", "/poster/2", "/poster/3"]);

export default modifyGrid;