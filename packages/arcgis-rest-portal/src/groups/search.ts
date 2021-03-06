/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { IGroup } from "@esri/arcgis-rest-types";
import { SearchQueryBuilder } from "../util/SearchQueryBuilder";
import { ISearchOptions, ISearchResult } from "../util/search";
import { genericSearch } from "../util/generic-search";

/**
 * ```js
 * import { searchGroups } from "@esri/arcgis-rest-portal";
 * //
 * searchGroups('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for groups. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-search.htm) for more information.
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
export function searchGroups(
  search: string | ISearchOptions | SearchQueryBuilder
): Promise<ISearchResult<IGroup>> {
  return genericSearch<IGroup>(search, "group");
}
