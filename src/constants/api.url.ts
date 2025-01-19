import {environment} from "../environments/environment.production";

export class ApiUrl {

    public static baseUrl: string = environment.baseUrl;
    public static examEstimateListUrl = ApiUrl.baseUrl + "/estimation-exam-list";
}
