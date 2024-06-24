import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const ceQueJinjectToutLeTemps = {
  http: inject(HttpClient),
//  router: inject(Router)
}
