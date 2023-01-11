// ALL URLS OF PACKAGES
export const PATH_ROOT = '/holiday';
export const INDIA_TOUR_PACKAGES = `${PATH_ROOT}/india-tour-packages`;
export const INTERNATIONAL_TOUR_PACKAGES = `${PATH_ROOT}/international-tour-packages`;
export const INDIA_TOUR_PACKAGES_WITH_TOUR= `${INDIA_TOUR_PACKAGES}/:detsinationtourname`;
export const INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR = `${INTERNATIONAL_TOUR_PACKAGES}/:detsinationtourname`;
export const INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH = `${INTERNATIONAL_TOUR_PACKAGES_WITH_TOUR}/holidayBudget/:budget/holidayMonth/:month`;
export const INDIA_TOUR_PACKAGES_WITH_TOUR_AND_BUDGET_MONTH = `${INDIA_TOUR_PACKAGES_WITH_TOUR}/holidayBudget/:budget/holidayMonth/:month`;
export const DYNA_PDP = `${PATH_ROOT}/packages/customized/:detsinationtourname/pkgId/:packageid`;
export const HPLUS_PDP = `${PATH_ROOT}/packages/:hpluspackage/pkgId/:hpluspkgid/destination/:pkgidandpkgname`;
export const HPLUS_PDP_INTERNATIONAL = `${INTERNATIONAL_TOUR_PACKAGES}/:detsinationtourname/:packagename/pkgId/:packageid/destination/:hpluspackagename/destTag/:destinationname`;
export const HPLUS_PDP_INDIA = `${INDIA_TOUR_PACKAGES}/:detsinationtourname/:packagename/pkgId/:packageid/destination/:hpluspackagename/destTag/:destinationname`;







