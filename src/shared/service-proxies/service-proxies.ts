﻿import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class AccountServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @input (optional) 
     * @return Success
     */
    isTenantAvailable(input: IsTenantAvailableInput | null | undefined): Observable<IsTenantAvailableOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processIsTenantAvailable(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processIsTenantAvailable(<any>response_);
                } catch (e) {
                    return <Observable<IsTenantAvailableOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<IsTenantAvailableOutput>><any>Observable.throw(response_);
        });
    }

    protected processIsTenantAvailable(response: Response): Observable<IsTenantAvailableOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? IsTenantAvailableOutput.fromJS(resultData200) : new IsTenantAvailableOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<IsTenantAvailableOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    register(input: RegisterInput | null | undefined): Observable<RegisterOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/Register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processRegister(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processRegister(<any>response_);
                } catch (e) {
                    return <Observable<RegisterOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<RegisterOutput>><any>Observable.throw(response_);
        });
    }

    protected processRegister(response: Response): Observable<RegisterOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RegisterOutput.fromJS(resultData200) : new RegisterOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<RegisterOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    sendPasswordResetCode(input: SendPasswordResetCodeInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Account/SendPasswordResetCode";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendPasswordResetCode(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendPasswordResetCode(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSendPasswordResetCode(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    resetPassword(input: ResetPasswordInput | null | undefined): Observable<ResetPasswordOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/ResetPassword";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processResetPassword(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processResetPassword(<any>response_);
                } catch (e) {
                    return <Observable<ResetPasswordOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<ResetPasswordOutput>><any>Observable.throw(response_);
        });
    }

    protected processResetPassword(response: Response): Observable<ResetPasswordOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ResetPasswordOutput.fromJS(resultData200) : new ResetPasswordOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ResetPasswordOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    sendEmailActivationLink(input: SendEmailActivationLinkInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Account/SendEmailActivationLink";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendEmailActivationLink(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendEmailActivationLink(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSendEmailActivationLink(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    activateEmail(input: ActivateEmailInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Account/ActivateEmail";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processActivateEmail(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processActivateEmail(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processActivateEmail(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    impersonate(input: ImpersonateInput | null | undefined): Observable<ImpersonateOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/Impersonate";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processImpersonate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processImpersonate(<any>response_);
                } catch (e) {
                    return <Observable<ImpersonateOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<ImpersonateOutput>><any>Observable.throw(response_);
        });
    }

    protected processImpersonate(response: Response): Observable<ImpersonateOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ImpersonateOutput.fromJS(resultData200) : new ImpersonateOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ImpersonateOutput>(<any>null);
    }

    /**
     * @return Success
     */
    backToImpersonator(): Observable<ImpersonateOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/BackToImpersonator";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processBackToImpersonator(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processBackToImpersonator(<any>response_);
                } catch (e) {
                    return <Observable<ImpersonateOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<ImpersonateOutput>><any>Observable.throw(response_);
        });
    }

    protected processBackToImpersonator(response: Response): Observable<ImpersonateOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ImpersonateOutput.fromJS(resultData200) : new ImpersonateOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ImpersonateOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    switchToLinkedAccount(input: SwitchToLinkedAccountInput | null | undefined): Observable<SwitchToLinkedAccountOutput> {
        let url_ = this.baseUrl + "/api/services/app/Account/SwitchToLinkedAccount";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSwitchToLinkedAccount(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSwitchToLinkedAccount(<any>response_);
                } catch (e) {
                    return <Observable<SwitchToLinkedAccountOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<SwitchToLinkedAccountOutput>><any>Observable.throw(response_);
        });
    }

    protected processSwitchToLinkedAccount(response: Response): Observable<SwitchToLinkedAccountOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? SwitchToLinkedAccountOutput.fromJS(resultData200) : new SwitchToLinkedAccountOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<SwitchToLinkedAccountOutput>(<any>null);
    }
}

@Injectable()
export class AuditLogServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @userName (optional) 
     * @serviceName (optional) 
     * @methodName (optional) 
     * @browserInfo (optional) 
     * @hasException (optional) 
     * @minExecutionDuration (optional) 
     * @maxExecutionDuration (optional) 
     * @sorting (optional) 
     * @return Success
     */
    getAuditLogs(startDate: moment.Moment, endDate: moment.Moment, userName: string | null | undefined, serviceName: string | null | undefined, methodName: string | null | undefined, browserInfo: string | null | undefined, hasException: boolean | null | undefined, minExecutionDuration: number | null | undefined, maxExecutionDuration: number | null | undefined, sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<PagedResultDtoOfAuditLogListDto> {
        let url_ = this.baseUrl + "/api/services/app/AuditLog/GetAuditLogs?";
        if (startDate === undefined || startDate === null)
            throw new Error("The parameter 'startDate' must be defined and cannot be null.");
        else
            url_ += "StartDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate === undefined || endDate === null)
            throw new Error("The parameter 'endDate' must be defined and cannot be null.");
        else
            url_ += "EndDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        if (userName !== undefined)
            url_ += "UserName=" + encodeURIComponent("" + userName) + "&"; 
        if (serviceName !== undefined)
            url_ += "ServiceName=" + encodeURIComponent("" + serviceName) + "&"; 
        if (methodName !== undefined)
            url_ += "MethodName=" + encodeURIComponent("" + methodName) + "&"; 
        if (browserInfo !== undefined)
            url_ += "BrowserInfo=" + encodeURIComponent("" + browserInfo) + "&"; 
        if (hasException !== undefined)
            url_ += "HasException=" + encodeURIComponent("" + hasException) + "&"; 
        if (minExecutionDuration !== undefined)
            url_ += "MinExecutionDuration=" + encodeURIComponent("" + minExecutionDuration) + "&"; 
        if (maxExecutionDuration !== undefined)
            url_ += "MaxExecutionDuration=" + encodeURIComponent("" + maxExecutionDuration) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAuditLogs(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAuditLogs(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfAuditLogListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfAuditLogListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAuditLogs(response: Response): Observable<PagedResultDtoOfAuditLogListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfAuditLogListDto.fromJS(resultData200) : new PagedResultDtoOfAuditLogListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfAuditLogListDto>(<any>null);
    }

    /**
     * @userName (optional) 
     * @serviceName (optional) 
     * @methodName (optional) 
     * @browserInfo (optional) 
     * @hasException (optional) 
     * @minExecutionDuration (optional) 
     * @maxExecutionDuration (optional) 
     * @sorting (optional) 
     * @return Success
     */
    getAuditLogsToExcel(startDate: moment.Moment, endDate: moment.Moment, userName: string | null | undefined, serviceName: string | null | undefined, methodName: string | null | undefined, browserInfo: string | null | undefined, hasException: boolean | null | undefined, minExecutionDuration: number | null | undefined, maxExecutionDuration: number | null | undefined, sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<FileDto> {
        let url_ = this.baseUrl + "/api/services/app/AuditLog/GetAuditLogsToExcel?";
        if (startDate === undefined || startDate === null)
            throw new Error("The parameter 'startDate' must be defined and cannot be null.");
        else
            url_ += "StartDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate === undefined || endDate === null)
            throw new Error("The parameter 'endDate' must be defined and cannot be null.");
        else
            url_ += "EndDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        if (userName !== undefined)
            url_ += "UserName=" + encodeURIComponent("" + userName) + "&"; 
        if (serviceName !== undefined)
            url_ += "ServiceName=" + encodeURIComponent("" + serviceName) + "&"; 
        if (methodName !== undefined)
            url_ += "MethodName=" + encodeURIComponent("" + methodName) + "&"; 
        if (browserInfo !== undefined)
            url_ += "BrowserInfo=" + encodeURIComponent("" + browserInfo) + "&"; 
        if (hasException !== undefined)
            url_ += "HasException=" + encodeURIComponent("" + hasException) + "&"; 
        if (minExecutionDuration !== undefined)
            url_ += "MinExecutionDuration=" + encodeURIComponent("" + minExecutionDuration) + "&"; 
        if (maxExecutionDuration !== undefined)
            url_ += "MaxExecutionDuration=" + encodeURIComponent("" + maxExecutionDuration) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAuditLogsToExcel(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAuditLogsToExcel(<any>response_);
                } catch (e) {
                    return <Observable<FileDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<FileDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAuditLogsToExcel(response: Response): Observable<FileDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? FileDto.fromJS(resultData200) : new FileDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<FileDto>(<any>null);
    }
}

@Injectable()
export class CachingServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAllCaches(): Observable<ListResultDtoOfCacheDto> {
        let url_ = this.baseUrl + "/api/services/app/Caching/GetAllCaches";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAllCaches(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAllCaches(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfCacheDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfCacheDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAllCaches(response: Response): Observable<ListResultDtoOfCacheDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfCacheDto.fromJS(resultData200) : new ListResultDtoOfCacheDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfCacheDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    clearCache(input: EntityDtoOfString | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Caching/ClearCache";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processClearCache(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processClearCache(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processClearCache(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    clearAllCaches(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Caching/ClearAllCaches";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processClearAllCaches(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processClearAllCaches(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processClearAllCaches(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class ChatServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getUserChatFriendsWithSettings(): Observable<GetUserChatFriendsWithSettingsOutput> {
        let url_ = this.baseUrl + "/api/services/app/Chat/GetUserChatFriendsWithSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUserChatFriendsWithSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUserChatFriendsWithSettings(<any>response_);
                } catch (e) {
                    return <Observable<GetUserChatFriendsWithSettingsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetUserChatFriendsWithSettingsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetUserChatFriendsWithSettings(response: Response): Observable<GetUserChatFriendsWithSettingsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetUserChatFriendsWithSettingsOutput.fromJS(resultData200) : new GetUserChatFriendsWithSettingsOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetUserChatFriendsWithSettingsOutput>(<any>null);
    }

    /**
     * @tenantId (optional) 
     * @minMessageId (optional) 
     * @return Success
     */
    getUserChatMessages(tenantId: number | null | undefined, userId: number, minMessageId: number | null | undefined): Observable<ListResultDtoOfChatMessageDto> {
        let url_ = this.baseUrl + "/api/services/app/Chat/GetUserChatMessages?";
        if (tenantId !== undefined)
            url_ += "TenantId=" + encodeURIComponent("" + tenantId) + "&"; 
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined and cannot be null.");
        else
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&"; 
        if (minMessageId !== undefined)
            url_ += "MinMessageId=" + encodeURIComponent("" + minMessageId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUserChatMessages(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUserChatMessages(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfChatMessageDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfChatMessageDto>><any>Observable.throw(response_);
        });
    }

    protected processGetUserChatMessages(response: Response): Observable<ListResultDtoOfChatMessageDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfChatMessageDto.fromJS(resultData200) : new ListResultDtoOfChatMessageDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfChatMessageDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    markAllUnreadMessagesOfUserAsRead(input: MarkAllUnreadMessagesOfUserAsReadInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processMarkAllUnreadMessagesOfUserAsRead(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processMarkAllUnreadMessagesOfUserAsRead(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processMarkAllUnreadMessagesOfUserAsRead(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class CommonLookupServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getEditionsForCombobox(onlyFreeItems: boolean): Observable<ListResultDtoOfSubscribableEditionComboboxItemDto> {
        let url_ = this.baseUrl + "/api/services/app/CommonLookup/GetEditionsForCombobox?";
        if (onlyFreeItems === undefined || onlyFreeItems === null)
            throw new Error("The parameter 'onlyFreeItems' must be defined and cannot be null.");
        else
            url_ += "onlyFreeItems=" + encodeURIComponent("" + onlyFreeItems) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditionsForCombobox(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditionsForCombobox(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfSubscribableEditionComboboxItemDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfSubscribableEditionComboboxItemDto>><any>Observable.throw(response_);
        });
    }

    protected processGetEditionsForCombobox(response: Response): Observable<ListResultDtoOfSubscribableEditionComboboxItemDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfSubscribableEditionComboboxItemDto.fromJS(resultData200) : new ListResultDtoOfSubscribableEditionComboboxItemDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfSubscribableEditionComboboxItemDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    findUsers(input: FindUsersInput | null | undefined): Observable<PagedResultDtoOfNameValueDto> {
        let url_ = this.baseUrl + "/api/services/app/CommonLookup/FindUsers";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processFindUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processFindUsers(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfNameValueDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfNameValueDto>><any>Observable.throw(response_);
        });
    }

    protected processFindUsers(response: Response): Observable<PagedResultDtoOfNameValueDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfNameValueDto.fromJS(resultData200) : new PagedResultDtoOfNameValueDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfNameValueDto>(<any>null);
    }

    /**
     * @return Success
     */
    getDefaultEditionName(): Observable<GetDefaultEditionNameOutput> {
        let url_ = this.baseUrl + "/api/services/app/CommonLookup/GetDefaultEditionName";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetDefaultEditionName(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetDefaultEditionName(<any>response_);
                } catch (e) {
                    return <Observable<GetDefaultEditionNameOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetDefaultEditionNameOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetDefaultEditionName(response: Response): Observable<GetDefaultEditionNameOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetDefaultEditionNameOutput.fromJS(resultData200) : new GetDefaultEditionNameOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetDefaultEditionNameOutput>(<any>null);
    }
}

@Injectable()
export class DemoUiComponentsServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @date (optional) 
     * @return Success
     */
    sendAndGetDate(date: moment.Moment | null | undefined): Observable<DateToStringOutput> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/SendAndGetDate?";
        if (date !== undefined)
            url_ += "date=" + encodeURIComponent(date ? "" + date.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendAndGetDate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendAndGetDate(<any>response_);
                } catch (e) {
                    return <Observable<DateToStringOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<DateToStringOutput>><any>Observable.throw(response_);
        });
    }

    protected processSendAndGetDate(response: Response): Observable<DateToStringOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? DateToStringOutput.fromJS(resultData200) : new DateToStringOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<DateToStringOutput>(<any>null);
    }

    /**
     * @date (optional) 
     * @return Success
     */
    sendAndGetDateTime(date: moment.Moment | null | undefined): Observable<DateToStringOutput> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/SendAndGetDateTime?";
        if (date !== undefined)
            url_ += "date=" + encodeURIComponent(date ? "" + date.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendAndGetDateTime(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendAndGetDateTime(<any>response_);
                } catch (e) {
                    return <Observable<DateToStringOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<DateToStringOutput>><any>Observable.throw(response_);
        });
    }

    protected processSendAndGetDateTime(response: Response): Observable<DateToStringOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? DateToStringOutput.fromJS(resultData200) : new DateToStringOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<DateToStringOutput>(<any>null);
    }

    /**
     * @startDate (optional) 
     * @endDate (optional) 
     * @return Success
     */
    sendAndGetDateRange(startDate: moment.Moment | null | undefined, endDate: moment.Moment | null | undefined): Observable<DateToStringOutput> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/SendAndGetDateRange?";
        if (startDate !== undefined)
            url_ += "startDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate !== undefined)
            url_ += "endDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendAndGetDateRange(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendAndGetDateRange(<any>response_);
                } catch (e) {
                    return <Observable<DateToStringOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<DateToStringOutput>><any>Observable.throw(response_);
        });
    }

    protected processSendAndGetDateRange(response: Response): Observable<DateToStringOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? DateToStringOutput.fromJS(resultData200) : new DateToStringOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<DateToStringOutput>(<any>null);
    }

    /**
     * @searchTerm (optional) 
     * @return Success
     */
    getCountries(searchTerm: string | null | undefined): Observable<NameValueOfString[]> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/GetCountries?";
        if (searchTerm !== undefined)
            url_ += "searchTerm=" + encodeURIComponent("" + searchTerm) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetCountries(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetCountries(<any>response_);
                } catch (e) {
                    return <Observable<NameValueOfString[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<NameValueOfString[]>><any>Observable.throw(response_);
        });
    }

    protected processGetCountries(response: Response): Observable<NameValueOfString[]> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(NameValueOfString.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<NameValueOfString[]>(<any>null);
    }

    /**
     * @selectedCountries (optional) 
     * @return Success
     */
    sendAndGetSelectedCountries(selectedCountries: NameValueOfString[] | null | undefined): Observable<NameValueOfString[]> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/SendAndGetSelectedCountries";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(selectedCountries);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendAndGetSelectedCountries(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendAndGetSelectedCountries(<any>response_);
                } catch (e) {
                    return <Observable<NameValueOfString[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<NameValueOfString[]>><any>Observable.throw(response_);
        });
    }

    protected processSendAndGetSelectedCountries(response: Response): Observable<NameValueOfString[]> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(NameValueOfString.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<NameValueOfString[]>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    sendAndGetValue(input: string | null | undefined): Observable<StringOutput> {
        let url_ = this.baseUrl + "/api/services/app/DemoUiComponents/SendAndGetValue?";
        if (input !== undefined)
            url_ += "input=" + encodeURIComponent("" + input) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendAndGetValue(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendAndGetValue(<any>response_);
                } catch (e) {
                    return <Observable<StringOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<StringOutput>><any>Observable.throw(response_);
        });
    }

    protected processSendAndGetValue(response: Response): Observable<StringOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? StringOutput.fromJS(resultData200) : new StringOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<StringOutput>(<any>null);
    }
}

@Injectable()
export class EditionServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getEditions(): Observable<ListResultDtoOfEditionListDto> {
        let url_ = this.baseUrl + "/api/services/app/Edition/GetEditions";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditions(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditions(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfEditionListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfEditionListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetEditions(response: Response): Observable<ListResultDtoOfEditionListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfEditionListDto.fromJS(resultData200) : new ListResultDtoOfEditionListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfEditionListDto>(<any>null);
    }

    /**
     * @id (optional) 
     * @return Success
     */
    getEditionForEdit(id: number | null | undefined): Observable<GetEditionEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/Edition/GetEditionForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditionForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditionForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetEditionEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetEditionEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetEditionForEdit(response: Response): Observable<GetEditionEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetEditionEditOutput.fromJS(resultData200) : new GetEditionEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetEditionEditOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createOrUpdateEdition(input: CreateOrUpdateEditionDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Edition/CreateOrUpdateEdition";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateOrUpdateEdition(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateOrUpdateEdition(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateOrUpdateEdition(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteEdition(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Edition/DeleteEdition?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteEdition(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteEdition(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteEdition(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @selectedEditionId (optional) 
     * @return Success
     */
    getEditionComboboxItems(selectedEditionId: number | null | undefined, addAllItem: boolean, onlyFreeItems: boolean): Observable<SubscribableEditionComboboxItemDto[]> {
        let url_ = this.baseUrl + "/api/services/app/Edition/GetEditionComboboxItems?";
        if (selectedEditionId !== undefined)
            url_ += "selectedEditionId=" + encodeURIComponent("" + selectedEditionId) + "&"; 
        if (addAllItem === undefined || addAllItem === null)
            throw new Error("The parameter 'addAllItem' must be defined and cannot be null.");
        else
            url_ += "addAllItem=" + encodeURIComponent("" + addAllItem) + "&"; 
        if (onlyFreeItems === undefined || onlyFreeItems === null)
            throw new Error("The parameter 'onlyFreeItems' must be defined and cannot be null.");
        else
            url_ += "onlyFreeItems=" + encodeURIComponent("" + onlyFreeItems) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditionComboboxItems(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditionComboboxItems(<any>response_);
                } catch (e) {
                    return <Observable<SubscribableEditionComboboxItemDto[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<SubscribableEditionComboboxItemDto[]>><any>Observable.throw(response_);
        });
    }

    protected processGetEditionComboboxItems(response: Response): Observable<SubscribableEditionComboboxItemDto[]> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(SubscribableEditionComboboxItemDto.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<SubscribableEditionComboboxItemDto[]>(<any>null);
    }
}

@Injectable()
export class FriendshipServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createFriendshipRequest(input: CreateFriendshipRequestInput | null | undefined): Observable<FriendDto> {
        let url_ = this.baseUrl + "/api/services/app/Friendship/CreateFriendshipRequest";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateFriendshipRequest(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateFriendshipRequest(<any>response_);
                } catch (e) {
                    return <Observable<FriendDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<FriendDto>><any>Observable.throw(response_);
        });
    }

    protected processCreateFriendshipRequest(response: Response): Observable<FriendDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? FriendDto.fromJS(resultData200) : new FriendDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<FriendDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createFriendshipRequestByUserName(input: CreateFriendshipRequestByUserNameInput | null | undefined): Observable<FriendDto> {
        let url_ = this.baseUrl + "/api/services/app/Friendship/CreateFriendshipRequestByUserName";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateFriendshipRequestByUserName(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateFriendshipRequestByUserName(<any>response_);
                } catch (e) {
                    return <Observable<FriendDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<FriendDto>><any>Observable.throw(response_);
        });
    }

    protected processCreateFriendshipRequestByUserName(response: Response): Observable<FriendDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? FriendDto.fromJS(resultData200) : new FriendDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<FriendDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    blockUser(input: BlockUserInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Friendship/BlockUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processBlockUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processBlockUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processBlockUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    unblockUser(input: UnblockUserInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Friendship/UnblockUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUnblockUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUnblockUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUnblockUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    acceptFriendshipRequest(input: AcceptFriendshipRequestInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Friendship/AcceptFriendshipRequest";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processAcceptFriendshipRequest(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processAcceptFriendshipRequest(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processAcceptFriendshipRequest(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class HostDashboardServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getDashboardStatisticsData(incomeStatisticsDateInterval: IncomeStatisticsDateInterval, startDate: moment.Moment, endDate: moment.Moment): Observable<HostDashboardData> {
        let url_ = this.baseUrl + "/api/services/app/HostDashboard/GetDashboardStatisticsData?";
        if (incomeStatisticsDateInterval === undefined || incomeStatisticsDateInterval === null)
            throw new Error("The parameter 'incomeStatisticsDateInterval' must be defined and cannot be null.");
        else
            url_ += "IncomeStatisticsDateInterval=" + encodeURIComponent("" + incomeStatisticsDateInterval) + "&"; 
        if (startDate === undefined || startDate === null)
            throw new Error("The parameter 'startDate' must be defined and cannot be null.");
        else
            url_ += "StartDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate === undefined || endDate === null)
            throw new Error("The parameter 'endDate' must be defined and cannot be null.");
        else
            url_ += "EndDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetDashboardStatisticsData(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetDashboardStatisticsData(<any>response_);
                } catch (e) {
                    return <Observable<HostDashboardData>><any>Observable.throw(e);
                }
            } else
                return <Observable<HostDashboardData>><any>Observable.throw(response_);
        });
    }

    protected processGetDashboardStatisticsData(response: Response): Observable<HostDashboardData> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? HostDashboardData.fromJS(resultData200) : new HostDashboardData();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<HostDashboardData>(<any>null);
    }

    /**
     * @return Success
     */
    getIncomeStatistics(incomeStatisticsDateInterval: IncomeStatisticsDateInterval2, startDate: moment.Moment, endDate: moment.Moment): Observable<GetIncomeStatisticsDataOutput> {
        let url_ = this.baseUrl + "/api/services/app/HostDashboard/GetIncomeStatistics?";
        if (incomeStatisticsDateInterval === undefined || incomeStatisticsDateInterval === null)
            throw new Error("The parameter 'incomeStatisticsDateInterval' must be defined and cannot be null.");
        else
            url_ += "IncomeStatisticsDateInterval=" + encodeURIComponent("" + incomeStatisticsDateInterval) + "&"; 
        if (startDate === undefined || startDate === null)
            throw new Error("The parameter 'startDate' must be defined and cannot be null.");
        else
            url_ += "StartDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate === undefined || endDate === null)
            throw new Error("The parameter 'endDate' must be defined and cannot be null.");
        else
            url_ += "EndDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetIncomeStatistics(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetIncomeStatistics(<any>response_);
                } catch (e) {
                    return <Observable<GetIncomeStatisticsDataOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetIncomeStatisticsDataOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetIncomeStatistics(response: Response): Observable<GetIncomeStatisticsDataOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetIncomeStatisticsDataOutput.fromJS(resultData200) : new GetIncomeStatisticsDataOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetIncomeStatisticsDataOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getEditionTenantStatistics(startDate: moment.Moment, endDate: moment.Moment): Observable<GetEditionTenantStatisticsOutput> {
        let url_ = this.baseUrl + "/api/services/app/HostDashboard/GetEditionTenantStatistics?";
        if (startDate === undefined || startDate === null)
            throw new Error("The parameter 'startDate' must be defined and cannot be null.");
        else
            url_ += "StartDate=" + encodeURIComponent(startDate ? "" + startDate.toJSON() : "") + "&"; 
        if (endDate === undefined || endDate === null)
            throw new Error("The parameter 'endDate' must be defined and cannot be null.");
        else
            url_ += "EndDate=" + encodeURIComponent(endDate ? "" + endDate.toJSON() : "") + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditionTenantStatistics(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditionTenantStatistics(<any>response_);
                } catch (e) {
                    return <Observable<GetEditionTenantStatisticsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetEditionTenantStatisticsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetEditionTenantStatistics(response: Response): Observable<GetEditionTenantStatisticsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetEditionTenantStatisticsOutput.fromJS(resultData200) : new GetEditionTenantStatisticsOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetEditionTenantStatisticsOutput>(<any>null);
    }
}

@Injectable()
export class HostSettingsServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAllSettings(): Observable<HostSettingsEditDto> {
        let url_ = this.baseUrl + "/api/services/app/HostSettings/GetAllSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAllSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAllSettings(<any>response_);
                } catch (e) {
                    return <Observable<HostSettingsEditDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<HostSettingsEditDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAllSettings(response: Response): Observable<HostSettingsEditDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? HostSettingsEditDto.fromJS(resultData200) : new HostSettingsEditDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<HostSettingsEditDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateAllSettings(input: HostSettingsEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/HostSettings/UpdateAllSettings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateAllSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateAllSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateAllSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    sendTestEmail(input: SendTestEmailInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/HostSettings/SendTestEmail";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendTestEmail(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendTestEmail(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSendTestEmail(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class InstallServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @input (optional) 
     * @return Success
     */
    setup(input: InstallDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Install/Setup";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSetup(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSetup(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSetup(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    getAppSettingsJson(): Observable<AppSettingsJsonDto> {
        let url_ = this.baseUrl + "/api/services/app/Install/GetAppSettingsJson";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAppSettingsJson(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAppSettingsJson(<any>response_);
                } catch (e) {
                    return <Observable<AppSettingsJsonDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<AppSettingsJsonDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAppSettingsJson(response: Response): Observable<AppSettingsJsonDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AppSettingsJsonDto.fromJS(resultData200) : new AppSettingsJsonDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<AppSettingsJsonDto>(<any>null);
    }

    /**
     * @return Success
     */
    checkDatabase(): Observable<CheckDatabaseOutput> {
        let url_ = this.baseUrl + "/api/services/app/Install/CheckDatabase";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCheckDatabase(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCheckDatabase(<any>response_);
                } catch (e) {
                    return <Observable<CheckDatabaseOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<CheckDatabaseOutput>><any>Observable.throw(response_);
        });
    }

    protected processCheckDatabase(response: Response): Observable<CheckDatabaseOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CheckDatabaseOutput.fromJS(resultData200) : new CheckDatabaseOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<CheckDatabaseOutput>(<any>null);
    }
}

@Injectable()
export class InvoiceServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getInvoiceInfo(id: number): Observable<InvoiceDto> {
        let url_ = this.baseUrl + "/api/services/app/Invoice/GetInvoiceInfo?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetInvoiceInfo(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetInvoiceInfo(<any>response_);
                } catch (e) {
                    return <Observable<InvoiceDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<InvoiceDto>><any>Observable.throw(response_);
        });
    }

    protected processGetInvoiceInfo(response: Response): Observable<InvoiceDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? InvoiceDto.fromJS(resultData200) : new InvoiceDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<InvoiceDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createInvoice(input: CreateInvoiceDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Invoice/CreateInvoice";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateInvoice(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateInvoice(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateInvoice(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class LanguageServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getLanguages(): Observable<GetLanguagesOutput> {
        let url_ = this.baseUrl + "/api/services/app/Language/GetLanguages";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetLanguages(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetLanguages(<any>response_);
                } catch (e) {
                    return <Observable<GetLanguagesOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetLanguagesOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetLanguages(response: Response): Observable<GetLanguagesOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetLanguagesOutput.fromJS(resultData200) : new GetLanguagesOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetLanguagesOutput>(<any>null);
    }

    /**
     * @id (optional) 
     * @return Success
     */
    getLanguageForEdit(id: number | null | undefined): Observable<GetLanguageForEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/Language/GetLanguageForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetLanguageForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetLanguageForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetLanguageForEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetLanguageForEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetLanguageForEdit(response: Response): Observable<GetLanguageForEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetLanguageForEditOutput.fromJS(resultData200) : new GetLanguageForEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetLanguageForEditOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createOrUpdateLanguage(input: CreateOrUpdateLanguageInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Language/CreateOrUpdateLanguage";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateOrUpdateLanguage(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateOrUpdateLanguage(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateOrUpdateLanguage(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteLanguage(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Language/DeleteLanguage?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteLanguage(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteLanguage(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteLanguage(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    setDefaultLanguage(input: SetDefaultLanguageInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Language/SetDefaultLanguage";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSetDefaultLanguage(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSetDefaultLanguage(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSetDefaultLanguage(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @sorting (optional) 
     * @baseLanguageName (optional) 
     * @targetValueFilter (optional) 
     * @filterText (optional) 
     * @return Success
     */
    getLanguageTexts(maxResultCount: number, skipCount: number, sorting: string | null | undefined, sourceName: string, baseLanguageName: string | null | undefined, targetLanguageName: string, targetValueFilter: string | null | undefined, filterText: string | null | undefined): Observable<PagedResultDtoOfLanguageTextListDto> {
        let url_ = this.baseUrl + "/api/services/app/Language/GetLanguageTexts?";
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (sourceName === undefined || sourceName === null)
            throw new Error("The parameter 'sourceName' must be defined and cannot be null.");
        else
            url_ += "SourceName=" + encodeURIComponent("" + sourceName) + "&"; 
        if (baseLanguageName !== undefined)
            url_ += "BaseLanguageName=" + encodeURIComponent("" + baseLanguageName) + "&"; 
        if (targetLanguageName === undefined || targetLanguageName === null)
            throw new Error("The parameter 'targetLanguageName' must be defined and cannot be null.");
        else
            url_ += "TargetLanguageName=" + encodeURIComponent("" + targetLanguageName) + "&"; 
        if (targetValueFilter !== undefined)
            url_ += "TargetValueFilter=" + encodeURIComponent("" + targetValueFilter) + "&"; 
        if (filterText !== undefined)
            url_ += "FilterText=" + encodeURIComponent("" + filterText) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetLanguageTexts(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetLanguageTexts(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfLanguageTextListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfLanguageTextListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetLanguageTexts(response: Response): Observable<PagedResultDtoOfLanguageTextListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfLanguageTextListDto.fromJS(resultData200) : new PagedResultDtoOfLanguageTextListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfLanguageTextListDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateLanguageText(input: UpdateLanguageTextInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Language/UpdateLanguageText";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateLanguageText(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateLanguageText(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateLanguageText(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class LogServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @data (optional) 
     * @return Success
     */
    test(data: string | null | undefined): Observable<string> {
        let url_ = this.baseUrl + "/api/services/app/Log/Test?";
        if (data !== undefined)
            url_ += "data=" + encodeURIComponent("" + data) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processTest(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processTest(<any>response_);
                } catch (e) {
                    return <Observable<string>><any>Observable.throw(e);
                }
            } else
                return <Observable<string>><any>Observable.throw(response_);
        });
    }

    protected processTest(response: Response): Observable<string> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<string>(<any>null);
    }
}

@Injectable()
export class NotificationServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @state (optional) 
     * @return Success
     */
    getUserNotifications(state: State | null | undefined, maxResultCount: number, skipCount: number): Observable<GetNotificationsOutput> {
        let url_ = this.baseUrl + "/api/services/app/Notification/GetUserNotifications?";
        if (state !== undefined)
            url_ += "State=" + encodeURIComponent("" + state) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUserNotifications(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUserNotifications(<any>response_);
                } catch (e) {
                    return <Observable<GetNotificationsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetNotificationsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetUserNotifications(response: Response): Observable<GetNotificationsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetNotificationsOutput.fromJS(resultData200) : new GetNotificationsOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetNotificationsOutput>(<any>null);
    }

    /**
     * @return Success
     */
    setAllNotificationsAsRead(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Notification/SetAllNotificationsAsRead";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSetAllNotificationsAsRead(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSetAllNotificationsAsRead(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSetAllNotificationsAsRead(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    setNotificationAsRead(input: EntityDtoOfGuid | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Notification/SetNotificationAsRead";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSetNotificationAsRead(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSetNotificationAsRead(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSetNotificationAsRead(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    getNotificationSettings(): Observable<GetNotificationSettingsOutput> {
        let url_ = this.baseUrl + "/api/services/app/Notification/GetNotificationSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetNotificationSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetNotificationSettings(<any>response_);
                } catch (e) {
                    return <Observable<GetNotificationSettingsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetNotificationSettingsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetNotificationSettings(response: Response): Observable<GetNotificationSettingsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetNotificationSettingsOutput.fromJS(resultData200) : new GetNotificationSettingsOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetNotificationSettingsOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateNotificationSettings(input: UpdateNotificationSettingsInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Notification/UpdateNotificationSettings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateNotificationSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateNotificationSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateNotificationSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class OrganizationUnitServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getOrganizationUnits(): Observable<ListResultDtoOfOrganizationUnitDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/GetOrganizationUnits";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetOrganizationUnits(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetOrganizationUnits(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfOrganizationUnitDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfOrganizationUnitDto>><any>Observable.throw(response_);
        });
    }

    protected processGetOrganizationUnits(response: Response): Observable<ListResultDtoOfOrganizationUnitDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfOrganizationUnitDto.fromJS(resultData200) : new ListResultDtoOfOrganizationUnitDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfOrganizationUnitDto>(<any>null);
    }

    /**
     * @sorting (optional) 
     * @return Success
     */
    getOrganizationUnitUsers(id: number, sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<PagedResultDtoOfOrganizationUnitUserListDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/GetOrganizationUnitUsers?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetOrganizationUnitUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetOrganizationUnitUsers(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfOrganizationUnitUserListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfOrganizationUnitUserListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetOrganizationUnitUsers(response: Response): Observable<PagedResultDtoOfOrganizationUnitUserListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfOrganizationUnitUserListDto.fromJS(resultData200) : new PagedResultDtoOfOrganizationUnitUserListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfOrganizationUnitUserListDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createOrganizationUnit(input: CreateOrganizationUnitInput | null | undefined): Observable<OrganizationUnitDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/CreateOrganizationUnit";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<OrganizationUnitDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<OrganizationUnitDto>><any>Observable.throw(response_);
        });
    }

    protected processCreateOrganizationUnit(response: Response): Observable<OrganizationUnitDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? OrganizationUnitDto.fromJS(resultData200) : new OrganizationUnitDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<OrganizationUnitDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateOrganizationUnit(input: UpdateOrganizationUnitInput | null | undefined): Observable<OrganizationUnitDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/UpdateOrganizationUnit";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<OrganizationUnitDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<OrganizationUnitDto>><any>Observable.throw(response_);
        });
    }

    protected processUpdateOrganizationUnit(response: Response): Observable<OrganizationUnitDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? OrganizationUnitDto.fromJS(resultData200) : new OrganizationUnitDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<OrganizationUnitDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    moveOrganizationUnit(input: MoveOrganizationUnitInput | null | undefined): Observable<OrganizationUnitDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/MoveOrganizationUnit";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processMoveOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processMoveOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<OrganizationUnitDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<OrganizationUnitDto>><any>Observable.throw(response_);
        });
    }

    protected processMoveOrganizationUnit(response: Response): Observable<OrganizationUnitDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? OrganizationUnitDto.fromJS(resultData200) : new OrganizationUnitDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<OrganizationUnitDto>(<any>null);
    }

    /**
     * @return Success
     */
    deleteOrganizationUnit(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/DeleteOrganizationUnit?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteOrganizationUnit(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    removeUserFromOrganizationUnit(userId: number, organizationUnitId: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit?";
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined and cannot be null.");
        else
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&"; 
        if (organizationUnitId === undefined || organizationUnitId === null)
            throw new Error("The parameter 'organizationUnitId' must be defined and cannot be null.");
        else
            url_ += "OrganizationUnitId=" + encodeURIComponent("" + organizationUnitId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processRemoveUserFromOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processRemoveUserFromOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processRemoveUserFromOrganizationUnit(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    addUsersToOrganizationUnit(input: UsersToOrganizationUnitInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processAddUsersToOrganizationUnit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processAddUsersToOrganizationUnit(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processAddUsersToOrganizationUnit(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    findUsers(input: FindOrganizationUnitUsersInput | null | undefined): Observable<PagedResultDtoOfNameValueDto> {
        let url_ = this.baseUrl + "/api/services/app/OrganizationUnit/FindUsers";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processFindUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processFindUsers(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfNameValueDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfNameValueDto>><any>Observable.throw(response_);
        });
    }

    protected processFindUsers(response: Response): Observable<PagedResultDtoOfNameValueDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfNameValueDto.fromJS(resultData200) : new PagedResultDtoOfNameValueDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfNameValueDto>(<any>null);
    }
}

@Injectable()
export class PaymentServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @upgradeEditionId (optional) 
     * @return Success
     */
    getPaymentInfo(upgradeEditionId: number | null | undefined): Observable<PaymentInfoDto> {
        let url_ = this.baseUrl + "/api/services/app/Payment/GetPaymentInfo?";
        if (upgradeEditionId !== undefined)
            url_ += "UpgradeEditionId=" + encodeURIComponent("" + upgradeEditionId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetPaymentInfo(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetPaymentInfo(<any>response_);
                } catch (e) {
                    return <Observable<PaymentInfoDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PaymentInfoDto>><any>Observable.throw(response_);
        });
    }

    protected processGetPaymentInfo(response: Response): Observable<PaymentInfoDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PaymentInfoDto.fromJS(resultData200) : new PaymentInfoDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PaymentInfoDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createPayment(input: CreatePaymentDto | null | undefined): Observable<any> {
        let url_ = this.baseUrl + "/api/services/app/Payment/CreatePayment";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreatePayment(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreatePayment(<any>response_);
                } catch (e) {
                    return <Observable<any>><any>Observable.throw(e);
                }
            } else
                return <Observable<any>><any>Observable.throw(response_);
        });
    }

    protected processCreatePayment(response: Response): Observable<any> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200) {
                result200 = {};
                for (let key in resultData200) {
                    if (resultData200.hasOwnProperty(key))
                        result200[key] = resultData200[key];
                }
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<any>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    executePayment(input: ExecutePaymentDto | null | undefined): Observable<any> {
        let url_ = this.baseUrl + "/api/services/app/Payment/ExecutePayment";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processExecutePayment(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processExecutePayment(<any>response_);
                } catch (e) {
                    return <Observable<any>><any>Observable.throw(e);
                }
            } else
                return <Observable<any>><any>Observable.throw(response_);
        });
    }

    protected processExecutePayment(response: Response): Observable<any> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200) {
                result200 = {};
                for (let key in resultData200) {
                    if (resultData200.hasOwnProperty(key))
                        result200[key] = resultData200[key];
                }
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<any>(<any>null);
    }

    /**
     * @sorting (optional) 
     * @return Success
     */
    getPaymentHistory(sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<PagedResultDtoOfSubscriptionPaymentListDto> {
        let url_ = this.baseUrl + "/api/services/app/Payment/GetPaymentHistory?";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetPaymentHistory(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetPaymentHistory(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfSubscriptionPaymentListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfSubscriptionPaymentListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetPaymentHistory(response: Response): Observable<PagedResultDtoOfSubscriptionPaymentListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfSubscriptionPaymentListDto.fromJS(resultData200) : new PagedResultDtoOfSubscriptionPaymentListDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfSubscriptionPaymentListDto>(<any>null);
    }
}

@Injectable()
export class PermissionServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAllPermissions(): Observable<ListResultDtoOfFlatPermissionWithLevelDto> {
        let url_ = this.baseUrl + "/api/services/app/Permission/GetAllPermissions";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAllPermissions(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAllPermissions(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfFlatPermissionWithLevelDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfFlatPermissionWithLevelDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAllPermissions(response: Response): Observable<ListResultDtoOfFlatPermissionWithLevelDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfFlatPermissionWithLevelDto.fromJS(resultData200) : new ListResultDtoOfFlatPermissionWithLevelDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfFlatPermissionWithLevelDto>(<any>null);
    }
}

@Injectable()
export class ProfileServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getCurrentUserProfileForEdit(): Observable<CurrentUserProfileEditDto> {
        let url_ = this.baseUrl + "/api/services/app/Profile/GetCurrentUserProfileForEdit";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetCurrentUserProfileForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetCurrentUserProfileForEdit(<any>response_);
                } catch (e) {
                    return <Observable<CurrentUserProfileEditDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<CurrentUserProfileEditDto>><any>Observable.throw(response_);
        });
    }

    protected processGetCurrentUserProfileForEdit(response: Response): Observable<CurrentUserProfileEditDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CurrentUserProfileEditDto.fromJS(resultData200) : new CurrentUserProfileEditDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<CurrentUserProfileEditDto>(<any>null);
    }

    /**
     * @return Success
     */
    updateGoogleAuthenticatorKey(): Observable<UpdateGoogleAuthenticatorKeyOutput> {
        let url_ = this.baseUrl + "/api/services/app/Profile/UpdateGoogleAuthenticatorKey";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateGoogleAuthenticatorKey(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateGoogleAuthenticatorKey(<any>response_);
                } catch (e) {
                    return <Observable<UpdateGoogleAuthenticatorKeyOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<UpdateGoogleAuthenticatorKeyOutput>><any>Observable.throw(response_);
        });
    }

    protected processUpdateGoogleAuthenticatorKey(response: Response): Observable<UpdateGoogleAuthenticatorKeyOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UpdateGoogleAuthenticatorKeyOutput.fromJS(resultData200) : new UpdateGoogleAuthenticatorKeyOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<UpdateGoogleAuthenticatorKeyOutput>(<any>null);
    }

    /**
     * @return Success
     */
    sendVerificationSms(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/SendVerificationSms";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendVerificationSms(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendVerificationSms(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSendVerificationSms(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    verifySmsCode(input: VerifySmsCodeInputDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/VerifySmsCode";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processVerifySmsCode(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processVerifySmsCode(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processVerifySmsCode(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateCurrentUserProfile(input: CurrentUserProfileEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/UpdateCurrentUserProfile";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateCurrentUserProfile(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateCurrentUserProfile(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateCurrentUserProfile(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    changePassword(input: ChangePasswordInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/ChangePassword";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processChangePassword(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processChangePassword(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processChangePassword(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateProfilePicture(input: UpdateProfilePictureInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/UpdateProfilePicture";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateProfilePicture(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateProfilePicture(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateProfilePicture(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    getPasswordComplexitySetting(): Observable<GetPasswordComplexitySettingOutput> {
        let url_ = this.baseUrl + "/api/services/app/Profile/GetPasswordComplexitySetting";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetPasswordComplexitySetting(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetPasswordComplexitySetting(<any>response_);
                } catch (e) {
                    return <Observable<GetPasswordComplexitySettingOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetPasswordComplexitySettingOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetPasswordComplexitySetting(response: Response): Observable<GetPasswordComplexitySettingOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetPasswordComplexitySettingOutput.fromJS(resultData200) : new GetPasswordComplexitySettingOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetPasswordComplexitySettingOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getProfilePicture(): Observable<GetProfilePictureOutput> {
        let url_ = this.baseUrl + "/api/services/app/Profile/GetProfilePicture";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetProfilePicture(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetProfilePicture(<any>response_);
                } catch (e) {
                    return <Observable<GetProfilePictureOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetProfilePictureOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetProfilePicture(response: Response): Observable<GetProfilePictureOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetProfilePictureOutput.fromJS(resultData200) : new GetProfilePictureOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetProfilePictureOutput>(<any>null);
    }

    /**
     * @profilePictureId (optional) 
     * @tenantId (optional) 
     * @return Success
     */
    getFriendProfilePictureById(profilePictureId: string | null | undefined, userId: number, tenantId: number | null | undefined): Observable<GetProfilePictureOutput> {
        let url_ = this.baseUrl + "/api/services/app/Profile/GetFriendProfilePictureById?";
        if (profilePictureId !== undefined)
            url_ += "ProfilePictureId=" + encodeURIComponent("" + profilePictureId) + "&"; 
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined and cannot be null.");
        else
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&"; 
        if (tenantId !== undefined)
            url_ += "TenantId=" + encodeURIComponent("" + tenantId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetFriendProfilePictureById(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetFriendProfilePictureById(<any>response_);
                } catch (e) {
                    return <Observable<GetProfilePictureOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetProfilePictureOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetFriendProfilePictureById(response: Response): Observable<GetProfilePictureOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetProfilePictureOutput.fromJS(resultData200) : new GetProfilePictureOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetProfilePictureOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getProfilePictureById(profilePictureId: string): Observable<GetProfilePictureOutput> {
        let url_ = this.baseUrl + "/api/services/app/Profile/GetProfilePictureById?";
        if (profilePictureId === undefined || profilePictureId === null)
            throw new Error("The parameter 'profilePictureId' must be defined and cannot be null.");
        else
            url_ += "profilePictureId=" + encodeURIComponent("" + profilePictureId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetProfilePictureById(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetProfilePictureById(<any>response_);
                } catch (e) {
                    return <Observable<GetProfilePictureOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetProfilePictureOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetProfilePictureById(response: Response): Observable<GetProfilePictureOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetProfilePictureOutput.fromJS(resultData200) : new GetProfilePictureOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetProfilePictureOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    changeLanguage(input: ChangeUserLanguageDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Profile/ChangeLanguage";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processChangeLanguage(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processChangeLanguage(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processChangeLanguage(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class RoleServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @permission (optional) 
     * @return Success
     */
    getRoles(permission: string | null | undefined): Observable<ListResultDtoOfRoleListDto> {
        let url_ = this.baseUrl + "/api/services/app/Role/GetRoles?";
        if (permission !== undefined)
            url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetRoles(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetRoles(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfRoleListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfRoleListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetRoles(response: Response): Observable<ListResultDtoOfRoleListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfRoleListDto.fromJS(resultData200) : new ListResultDtoOfRoleListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfRoleListDto>(<any>null);
    }

    /**
     * @id (optional) 
     * @return Success
     */
    getRoleForEdit(id: number | null | undefined): Observable<GetRoleForEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/Role/GetRoleForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetRoleForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetRoleForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetRoleForEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetRoleForEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetRoleForEdit(response: Response): Observable<GetRoleForEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetRoleForEditOutput.fromJS(resultData200) : new GetRoleForEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetRoleForEditOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createOrUpdateRole(input: CreateOrUpdateRoleInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Role/CreateOrUpdateRole";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateOrUpdateRole(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateOrUpdateRole(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateOrUpdateRole(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteRole(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Role/DeleteRole?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteRole(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteRole(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteRole(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class SessionServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getCurrentLoginInformations(): Observable<GetCurrentLoginInformationsOutput> {
        let url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetCurrentLoginInformations(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetCurrentLoginInformations(<any>response_);
                } catch (e) {
                    return <Observable<GetCurrentLoginInformationsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetCurrentLoginInformationsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetCurrentLoginInformations(response: Response): Observable<GetCurrentLoginInformationsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetCurrentLoginInformationsOutput.fromJS(resultData200) : new GetCurrentLoginInformationsOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetCurrentLoginInformationsOutput>(<any>null);
    }

    /**
     * @return Success
     */
    updateUserSignInToken(): Observable<UpdateUserSignInTokenOutput> {
        let url_ = this.baseUrl + "/api/services/app/Session/UpdateUserSignInToken";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateUserSignInToken(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateUserSignInToken(<any>response_);
                } catch (e) {
                    return <Observable<UpdateUserSignInTokenOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<UpdateUserSignInTokenOutput>><any>Observable.throw(response_);
        });
    }

    protected processUpdateUserSignInToken(response: Response): Observable<UpdateUserSignInTokenOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UpdateUserSignInTokenOutput.fromJS(resultData200) : new UpdateUserSignInTokenOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<UpdateUserSignInTokenOutput>(<any>null);
    }
}

@Injectable()
export class SubscriptionServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    upgradeTenantToEquivalentEdition(upgradeEditionId: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Subscription/UpgradeTenantToEquivalentEdition?";
        if (upgradeEditionId === undefined || upgradeEditionId === null)
            throw new Error("The parameter 'upgradeEditionId' must be defined and cannot be null.");
        else
            url_ += "upgradeEditionId=" + encodeURIComponent("" + upgradeEditionId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpgradeTenantToEquivalentEdition(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpgradeTenantToEquivalentEdition(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpgradeTenantToEquivalentEdition(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class TenantServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @filter (optional) 
     * @subscriptionEndDateStart (optional) 
     * @subscriptionEndDateEnd (optional) 
     * @creationDateStart (optional) 
     * @creationDateEnd (optional) 
     * @editionId (optional) 
     * @sorting (optional) 
     * @return Success
     */
    getTenants(filter: string | null | undefined, subscriptionEndDateStart: moment.Moment | null | undefined, subscriptionEndDateEnd: moment.Moment | null | undefined, creationDateStart: moment.Moment | null | undefined, creationDateEnd: moment.Moment | null | undefined, editionId: number | null | undefined, editionIdSpecified: boolean, sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<PagedResultDtoOfTenantListDto> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/GetTenants?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&"; 
        if (subscriptionEndDateStart !== undefined)
            url_ += "SubscriptionEndDateStart=" + encodeURIComponent(subscriptionEndDateStart ? "" + subscriptionEndDateStart.toJSON() : "") + "&"; 
        if (subscriptionEndDateEnd !== undefined)
            url_ += "SubscriptionEndDateEnd=" + encodeURIComponent(subscriptionEndDateEnd ? "" + subscriptionEndDateEnd.toJSON() : "") + "&"; 
        if (creationDateStart !== undefined)
            url_ += "CreationDateStart=" + encodeURIComponent(creationDateStart ? "" + creationDateStart.toJSON() : "") + "&"; 
        if (creationDateEnd !== undefined)
            url_ += "CreationDateEnd=" + encodeURIComponent(creationDateEnd ? "" + creationDateEnd.toJSON() : "") + "&"; 
        if (editionId !== undefined)
            url_ += "EditionId=" + encodeURIComponent("" + editionId) + "&"; 
        if (editionIdSpecified === undefined || editionIdSpecified === null)
            throw new Error("The parameter 'editionIdSpecified' must be defined and cannot be null.");
        else
            url_ += "EditionIdSpecified=" + encodeURIComponent("" + editionIdSpecified) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetTenants(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetTenants(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfTenantListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfTenantListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetTenants(response: Response): Observable<PagedResultDtoOfTenantListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfTenantListDto.fromJS(resultData200) : new PagedResultDtoOfTenantListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfTenantListDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createTenant(input: CreateTenantInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/CreateTenant";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateTenant(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateTenant(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateTenant(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    getTenantForEdit(id: number): Observable<TenantEditDto> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/GetTenantForEdit?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetTenantForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetTenantForEdit(<any>response_);
                } catch (e) {
                    return <Observable<TenantEditDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<TenantEditDto>><any>Observable.throw(response_);
        });
    }

    protected processGetTenantForEdit(response: Response): Observable<TenantEditDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TenantEditDto.fromJS(resultData200) : new TenantEditDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<TenantEditDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateTenant(input: TenantEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/UpdateTenant";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateTenant(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateTenant(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateTenant(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteTenant(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/DeleteTenant?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteTenant(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteTenant(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteTenant(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    getTenantFeaturesForEdit(id: number): Observable<GetTenantFeaturesEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/GetTenantFeaturesForEdit?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetTenantFeaturesForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetTenantFeaturesForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetTenantFeaturesEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetTenantFeaturesEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetTenantFeaturesForEdit(response: Response): Observable<GetTenantFeaturesEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetTenantFeaturesEditOutput.fromJS(resultData200) : new GetTenantFeaturesEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetTenantFeaturesEditOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateTenantFeatures(input: UpdateTenantFeaturesInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/UpdateTenantFeatures";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateTenantFeatures(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateTenantFeatures(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateTenantFeatures(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    resetTenantSpecificFeatures(input: EntityDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/ResetTenantSpecificFeatures";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processResetTenantSpecificFeatures(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processResetTenantSpecificFeatures(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processResetTenantSpecificFeatures(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    unlockTenantAdmin(input: EntityDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/Tenant/UnlockTenantAdmin";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUnlockTenantAdmin(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUnlockTenantAdmin(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUnlockTenantAdmin(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class TenantDashboardServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getMemberActivity(): Observable<GetMemberActivityOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantDashboard/GetMemberActivity";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetMemberActivity(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetMemberActivity(<any>response_);
                } catch (e) {
                    return <Observable<GetMemberActivityOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetMemberActivityOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetMemberActivity(response: Response): Observable<GetMemberActivityOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetMemberActivityOutput.fromJS(resultData200) : new GetMemberActivityOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetMemberActivityOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getDashboardData(salesSummaryDatePeriod: SalesSummaryDatePeriod): Observable<GetDashboardDataOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantDashboard/GetDashboardData?";
        if (salesSummaryDatePeriod === undefined || salesSummaryDatePeriod === null)
            throw new Error("The parameter 'salesSummaryDatePeriod' must be defined and cannot be null.");
        else
            url_ += "SalesSummaryDatePeriod=" + encodeURIComponent("" + salesSummaryDatePeriod) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetDashboardData(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetDashboardData(<any>response_);
                } catch (e) {
                    return <Observable<GetDashboardDataOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetDashboardDataOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetDashboardData(response: Response): Observable<GetDashboardDataOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetDashboardDataOutput.fromJS(resultData200) : new GetDashboardDataOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetDashboardDataOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getSalesSummary(salesSummaryDatePeriod: SalesSummaryDatePeriod2): Observable<GetSalesSummaryOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantDashboard/GetSalesSummary?";
        if (salesSummaryDatePeriod === undefined || salesSummaryDatePeriod === null)
            throw new Error("The parameter 'salesSummaryDatePeriod' must be defined and cannot be null.");
        else
            url_ += "SalesSummaryDatePeriod=" + encodeURIComponent("" + salesSummaryDatePeriod) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetSalesSummary(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetSalesSummary(<any>response_);
                } catch (e) {
                    return <Observable<GetSalesSummaryOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetSalesSummaryOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetSalesSummary(response: Response): Observable<GetSalesSummaryOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetSalesSummaryOutput.fromJS(resultData200) : new GetSalesSummaryOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetSalesSummaryOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    getWorldMap(input: any | null | undefined): Observable<GetWorldMapOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantDashboard/GetWorldMap?";
        if (input !== undefined)
            url_ += "input=" + encodeURIComponent("" + input) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetWorldMap(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetWorldMap(<any>response_);
                } catch (e) {
                    return <Observable<GetWorldMapOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetWorldMapOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetWorldMap(response: Response): Observable<GetWorldMapOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetWorldMapOutput.fromJS(resultData200) : new GetWorldMapOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetWorldMapOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    getGeneralStats(input: any | null | undefined): Observable<GetGeneralStatsOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantDashboard/GetGeneralStats?";
        if (input !== undefined)
            url_ += "input=" + encodeURIComponent("" + input) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetGeneralStats(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetGeneralStats(<any>response_);
                } catch (e) {
                    return <Observable<GetGeneralStatsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetGeneralStatsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetGeneralStats(response: Response): Observable<GetGeneralStatsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetGeneralStatsOutput.fromJS(resultData200) : new GetGeneralStatsOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetGeneralStatsOutput>(<any>null);
    }
}

@Injectable()
export class TenantRegistrationServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @input (optional) 
     * @return Success
     */
    registerTenant(input: RegisterTenantInput | null | undefined): Observable<RegisterTenantOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantRegistration/RegisterTenant";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processRegisterTenant(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processRegisterTenant(<any>response_);
                } catch (e) {
                    return <Observable<RegisterTenantOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<RegisterTenantOutput>><any>Observable.throw(response_);
        });
    }

    protected processRegisterTenant(response: Response): Observable<RegisterTenantOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? RegisterTenantOutput.fromJS(resultData200) : new RegisterTenantOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<RegisterTenantOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getEditionsForSelect(): Observable<EditionsSelectOutput> {
        let url_ = this.baseUrl + "/api/services/app/TenantRegistration/GetEditionsForSelect";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEditionsForSelect(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEditionsForSelect(<any>response_);
                } catch (e) {
                    return <Observable<EditionsSelectOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<EditionsSelectOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetEditionsForSelect(response: Response): Observable<EditionsSelectOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? EditionsSelectOutput.fromJS(resultData200) : new EditionsSelectOutput();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<EditionsSelectOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getEdition(editionId: number): Observable<EditionSelectDto> {
        let url_ = this.baseUrl + "/api/services/app/TenantRegistration/GetEdition?";
        if (editionId === undefined || editionId === null)
            throw new Error("The parameter 'editionId' must be defined and cannot be null.");
        else
            url_ += "editionId=" + encodeURIComponent("" + editionId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetEdition(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetEdition(<any>response_);
                } catch (e) {
                    return <Observable<EditionSelectDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<EditionSelectDto>><any>Observable.throw(response_);
        });
    }

    protected processGetEdition(response: Response): Observable<EditionSelectDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? EditionSelectDto.fromJS(resultData200) : new EditionSelectDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<EditionSelectDto>(<any>null);
    }
}

@Injectable()
export class TenantSettingsServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAllSettings(): Observable<TenantSettingsEditDto> {
        let url_ = this.baseUrl + "/api/services/app/TenantSettings/GetAllSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetAllSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAllSettings(<any>response_);
                } catch (e) {
                    return <Observable<TenantSettingsEditDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<TenantSettingsEditDto>><any>Observable.throw(response_);
        });
    }

    protected processGetAllSettings(response: Response): Observable<TenantSettingsEditDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? TenantSettingsEditDto.fromJS(resultData200) : new TenantSettingsEditDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<TenantSettingsEditDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateAllSettings(input: TenantSettingsEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/TenantSettings/UpdateAllSettings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateAllSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateAllSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateAllSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    clearLogo(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/TenantSettings/ClearLogo";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processClearLogo(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processClearLogo(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processClearLogo(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    clearCustomCss(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/TenantSettings/ClearCustomCss";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processClearCustomCss(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processClearCustomCss(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processClearCustomCss(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    sendTestEmail(input: SendTestEmailInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/TenantSettings/SendTestEmail";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processSendTestEmail(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSendTestEmail(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processSendTestEmail(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class TokenAuthServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @model (optional) 
     * @return Success
     */
    authenticate(model: AuthenticateModel | null | undefined): Observable<AuthenticateResultModel> {
        let url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processAuthenticate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processAuthenticate(<any>response_);
                } catch (e) {
                    return <Observable<AuthenticateResultModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<AuthenticateResultModel>><any>Observable.throw(response_);
        });
    }

    protected processAuthenticate(response: Response): Observable<AuthenticateResultModel> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AuthenticateResultModel.fromJS(resultData200) : new AuthenticateResultModel();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<AuthenticateResultModel>(<any>null);
    }

    /**
     * @return Success
     */
    getExternalAuthenticationProviders(): Observable<ExternalLoginProviderInfoModel[]> {
        let url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetExternalAuthenticationProviders(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetExternalAuthenticationProviders(<any>response_);
                } catch (e) {
                    return <Observable<ExternalLoginProviderInfoModel[]>><any>Observable.throw(e);
                }
            } else
                return <Observable<ExternalLoginProviderInfoModel[]>><any>Observable.throw(response_);
        });
    }

    protected processGetExternalAuthenticationProviders(response: Response): Observable<ExternalLoginProviderInfoModel[]> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(ExternalLoginProviderInfoModel.fromJS(item));
            }
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ExternalLoginProviderInfoModel[]>(<any>null);
    }

    /**
     * @model (optional) 
     * @return Success
     */
    externalAuthenticate(model: ExternalAuthenticateModel | null | undefined): Observable<ExternalAuthenticateResultModel> {
        let url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processExternalAuthenticate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processExternalAuthenticate(<any>response_);
                } catch (e) {
                    return <Observable<ExternalAuthenticateResultModel>><any>Observable.throw(e);
                }
            } else
                return <Observable<ExternalAuthenticateResultModel>><any>Observable.throw(response_);
        });
    }

    protected processExternalAuthenticate(response: Response): Observable<ExternalAuthenticateResultModel> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ExternalAuthenticateResultModel.fromJS(resultData200) : new ExternalAuthenticateResultModel();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ExternalAuthenticateResultModel>(<any>null);
    }
}

@Injectable()
export class UiCustomizationSettingsServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getUiManagementSettings(): Observable<UiCustomizationSettingsEditDto> {
        let url_ = this.baseUrl + "/api/services/app/UiCustomizationSettings/GetUiManagementSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUiManagementSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUiManagementSettings(<any>response_);
                } catch (e) {
                    return <Observable<UiCustomizationSettingsEditDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<UiCustomizationSettingsEditDto>><any>Observable.throw(response_);
        });
    }

    protected processGetUiManagementSettings(response: Response): Observable<UiCustomizationSettingsEditDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? UiCustomizationSettingsEditDto.fromJS(resultData200) : new UiCustomizationSettingsEditDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<UiCustomizationSettingsEditDto>(<any>null);
    }

    /**
     * @settings (optional) 
     * @return Success
     */
    updateUiManagementSettings(settings: UiCustomizationSettingsEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(settings);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateUiManagementSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateUiManagementSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateUiManagementSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @settings (optional) 
     * @return Success
     */
    updateDefaultUiManagementSettings(settings: UiCustomizationSettingsEditDto | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(settings);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateDefaultUiManagementSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateDefaultUiManagementSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateDefaultUiManagementSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    useSystemDefaultSettings(): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUseSystemDefaultSettings(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUseSystemDefaultSettings(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUseSystemDefaultSettings(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class UserServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @filter (optional) 
     * @permission (optional) 
     * @role (optional) 
     * @sorting (optional) 
     * @return Success
     */
    getUsers(filter: string | null | undefined, permission: string | null | undefined, role: number | null | undefined, sorting: string | null | undefined, maxResultCount: number, skipCount: number): Observable<PagedResultDtoOfUserListDto> {
        let url_ = this.baseUrl + "/api/services/app/User/GetUsers?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&"; 
        if (permission !== undefined)
            url_ += "Permission=" + encodeURIComponent("" + permission) + "&"; 
        if (role !== undefined)
            url_ += "Role=" + encodeURIComponent("" + role) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUsers(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfUserListDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfUserListDto>><any>Observable.throw(response_);
        });
    }

    protected processGetUsers(response: Response): Observable<PagedResultDtoOfUserListDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfUserListDto.fromJS(resultData200) : new PagedResultDtoOfUserListDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfUserListDto>(<any>null);
    }

    /**
     * @return Success
     */
    getUsersToExcel(): Observable<FileDto> {
        let url_ = this.baseUrl + "/api/services/app/User/GetUsersToExcel";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUsersToExcel(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUsersToExcel(<any>response_);
                } catch (e) {
                    return <Observable<FileDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<FileDto>><any>Observable.throw(response_);
        });
    }

    protected processGetUsersToExcel(response: Response): Observable<FileDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? FileDto.fromJS(resultData200) : new FileDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<FileDto>(<any>null);
    }

    /**
     * @id (optional) 
     * @return Success
     */
    getUserForEdit(id: number | null | undefined): Observable<GetUserForEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/User/GetUserForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUserForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUserForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetUserForEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetUserForEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetUserForEdit(response: Response): Observable<GetUserForEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetUserForEditOutput.fromJS(resultData200) : new GetUserForEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetUserForEditOutput>(<any>null);
    }

    /**
     * @return Success
     */
    getUserPermissionsForEdit(id: number): Observable<GetUserPermissionsForEditOutput> {
        let url_ = this.baseUrl + "/api/services/app/User/GetUserPermissionsForEdit?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetUserPermissionsForEdit(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetUserPermissionsForEdit(<any>response_);
                } catch (e) {
                    return <Observable<GetUserPermissionsForEditOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetUserPermissionsForEditOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetUserPermissionsForEdit(response: Response): Observable<GetUserPermissionsForEditOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetUserPermissionsForEditOutput.fromJS(resultData200) : new GetUserPermissionsForEditOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetUserPermissionsForEditOutput>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    resetUserSpecificPermissions(input: EntityDtoOfInt64 | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/User/ResetUserSpecificPermissions";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processResetUserSpecificPermissions(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processResetUserSpecificPermissions(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processResetUserSpecificPermissions(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    updateUserPermissions(input: UpdateUserPermissionsInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/User/UpdateUserPermissions";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "put",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUpdateUserPermissions(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdateUserPermissions(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUpdateUserPermissions(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    createOrUpdateUser(input: CreateOrUpdateUserInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/User/CreateOrUpdateUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processCreateOrUpdateUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreateOrUpdateUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processCreateOrUpdateUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteUser(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/User/DeleteUser?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "Id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "delete",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDeleteUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDeleteUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processDeleteUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    unlockUser(input: EntityDtoOfInt64 | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/User/UnlockUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUnlockUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUnlockUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUnlockUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class UserLinkServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @input (optional) 
     * @return Success
     */
    linkToUser(input: LinkToUserInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/UserLink/LinkToUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processLinkToUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processLinkToUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processLinkToUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }

    /**
     * @sorting (optional) 
     * @return Success
     */
    getLinkedUsers(maxResultCount: number, skipCount: number, sorting: string | null | undefined): Observable<PagedResultDtoOfLinkedUserDto> {
        let url_ = this.baseUrl + "/api/services/app/UserLink/GetLinkedUsers?";
        if (maxResultCount === undefined || maxResultCount === null)
            throw new Error("The parameter 'maxResultCount' must be defined and cannot be null.");
        else
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&"; 
        if (skipCount === undefined || skipCount === null)
            throw new Error("The parameter 'skipCount' must be defined and cannot be null.");
        else
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&"; 
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetLinkedUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetLinkedUsers(<any>response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfLinkedUserDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfLinkedUserDto>><any>Observable.throw(response_);
        });
    }

    protected processGetLinkedUsers(response: Response): Observable<PagedResultDtoOfLinkedUserDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfLinkedUserDto.fromJS(resultData200) : new PagedResultDtoOfLinkedUserDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfLinkedUserDto>(<any>null);
    }

    /**
     * @return Success
     */
    getRecentlyUsedLinkedUsers(): Observable<ListResultDtoOfLinkedUserDto> {
        let url_ = this.baseUrl + "/api/services/app/UserLink/GetRecentlyUsedLinkedUsers";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetRecentlyUsedLinkedUsers(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetRecentlyUsedLinkedUsers(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfLinkedUserDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfLinkedUserDto>><any>Observable.throw(response_);
        });
    }

    protected processGetRecentlyUsedLinkedUsers(response: Response): Observable<ListResultDtoOfLinkedUserDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfLinkedUserDto.fromJS(resultData200) : new ListResultDtoOfLinkedUserDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfLinkedUserDto>(<any>null);
    }

    /**
     * @input (optional) 
     * @return Success
     */
    unlinkUser(input: UnlinkUserInput | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/services/app/UserLink/UnlinkUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ : any = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processUnlinkUser(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUnlinkUser(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>Observable.throw(e);
                }
            } else
                return <Observable<void>><any>Observable.throw(response_);
        });
    }

    protected processUnlinkUser(response: Response): Observable<void> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            return Observable.of<void>(<any>null);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<void>(<any>null);
    }
}

@Injectable()
export class UserLoginServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getRecentUserLoginAttempts(): Observable<ListResultDtoOfUserLoginAttemptDto> {
        let url_ = this.baseUrl + "/api/services/app/UserLogin/GetRecentUserLoginAttempts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetRecentUserLoginAttempts(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetRecentUserLoginAttempts(<any>response_);
                } catch (e) {
                    return <Observable<ListResultDtoOfUserLoginAttemptDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfUserLoginAttemptDto>><any>Observable.throw(response_);
        });
    }

    protected processGetRecentUserLoginAttempts(response: Response): Observable<ListResultDtoOfUserLoginAttemptDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfUserLoginAttemptDto.fromJS(resultData200) : new ListResultDtoOfUserLoginAttemptDto();
            return Observable.of(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ListResultDtoOfUserLoginAttemptDto>(<any>null);
    }
}

@Injectable()
export class WebLogServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getLatestWebLogs(): Observable<GetLatestWebLogsOutput> {
        let url_ = this.baseUrl + "/api/services/app/WebLog/GetLatestWebLogs";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processGetLatestWebLogs(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetLatestWebLogs(<any>response_);
                } catch (e) {
                    return <Observable<GetLatestWebLogsOutput>><any>Observable.throw(e);
                }
            } else
                return <Observable<GetLatestWebLogsOutput>><any>Observable.throw(response_);
        });
    }

    protected processGetLatestWebLogs(response: Response): Observable<GetLatestWebLogsOutput> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? GetLatestWebLogsOutput.fromJS(resultData200) : new GetLatestWebLogsOutput();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<GetLatestWebLogsOutput>(<any>null);
    }

    /**
     * @return Success
     */
    downloadWebLogs(): Observable<FileDto> {
        let url_ = this.baseUrl + "/api/services/app/WebLog/DownloadWebLogs";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_ : any) => {
            return this.processDownloadWebLogs(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDownloadWebLogs(<any>response_);
                } catch (e) {
                    return <Observable<FileDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<FileDto>><any>Observable.throw(response_);
        });
    }

    protected processDownloadWebLogs(response: Response): Observable<FileDto> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? FileDto.fromJS(resultData200) : new FileDto();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<FileDto>(<any>null);
    }
}

export class IsTenantAvailableInput implements IIsTenantAvailableInput {
    tenancyName: string;

    constructor(data?: IIsTenantAvailableInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
        }
    }

    static fromJS(data: any): IsTenantAvailableInput {
        data = typeof data === 'object' ? data : {};
        let result = new IsTenantAvailableInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        return data; 
    }
}

export interface IIsTenantAvailableInput {
    tenancyName: string;
}

export class IsTenantAvailableOutput implements IIsTenantAvailableOutput {
    state: IsTenantAvailableOutputState | undefined;
    tenantId: number | undefined;
    serverRootAddress: string | undefined;

    constructor(data?: IIsTenantAvailableOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.state = data["state"];
            this.tenantId = data["tenantId"];
            this.serverRootAddress = data["serverRootAddress"];
        }
    }

    static fromJS(data: any): IsTenantAvailableOutput {
        data = typeof data === 'object' ? data : {};
        let result = new IsTenantAvailableOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["state"] = this.state;
        data["tenantId"] = this.tenantId;
        data["serverRootAddress"] = this.serverRootAddress;
        return data; 
    }
}

export interface IIsTenantAvailableOutput {
    state: IsTenantAvailableOutputState | undefined;
    tenantId: number | undefined;
    serverRootAddress: string | undefined;
}

export class RegisterInput implements IRegisterInput {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    password: string;
    captchaResponse: string | undefined;

    constructor(data?: IRegisterInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.password = data["password"];
            this.captchaResponse = data["captchaResponse"];
        }
    }

    static fromJS(data: any): RegisterInput {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["password"] = this.password;
        data["captchaResponse"] = this.captchaResponse;
        return data; 
    }
}

export interface IRegisterInput {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    password: string;
    captchaResponse: string | undefined;
}

export class RegisterOutput implements IRegisterOutput {
    canLogin: boolean | undefined;

    constructor(data?: IRegisterOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.canLogin = data["canLogin"];
        }
    }

    static fromJS(data: any): RegisterOutput {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["canLogin"] = this.canLogin;
        return data; 
    }
}

export interface IRegisterOutput {
    canLogin: boolean | undefined;
}

export class SendPasswordResetCodeInput implements ISendPasswordResetCodeInput {
    emailAddress: string;

    constructor(data?: ISendPasswordResetCodeInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.emailAddress = data["emailAddress"];
        }
    }

    static fromJS(data: any): SendPasswordResetCodeInput {
        data = typeof data === 'object' ? data : {};
        let result = new SendPasswordResetCodeInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["emailAddress"] = this.emailAddress;
        return data; 
    }
}

export interface ISendPasswordResetCodeInput {
    emailAddress: string;
}

export class ResetPasswordInput implements IResetPasswordInput {
    userId: number | undefined;
    resetCode: string;
    password: string;
    returnUrl: string | undefined;
    singleSignIn: string | undefined;

    constructor(data?: IResetPasswordInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.resetCode = data["resetCode"];
            this.password = data["password"];
            this.returnUrl = data["returnUrl"];
            this.singleSignIn = data["singleSignIn"];
        }
    }

    static fromJS(data: any): ResetPasswordInput {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPasswordInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["resetCode"] = this.resetCode;
        data["password"] = this.password;
        data["returnUrl"] = this.returnUrl;
        data["singleSignIn"] = this.singleSignIn;
        return data; 
    }
}

export interface IResetPasswordInput {
    userId: number | undefined;
    resetCode: string;
    password: string;
    returnUrl: string | undefined;
    singleSignIn: string | undefined;
}

export class ResetPasswordOutput implements IResetPasswordOutput {
    canLogin: boolean | undefined;
    userName: string | undefined;

    constructor(data?: IResetPasswordOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.canLogin = data["canLogin"];
            this.userName = data["userName"];
        }
    }

    static fromJS(data: any): ResetPasswordOutput {
        data = typeof data === 'object' ? data : {};
        let result = new ResetPasswordOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["canLogin"] = this.canLogin;
        data["userName"] = this.userName;
        return data; 
    }
}

export interface IResetPasswordOutput {
    canLogin: boolean | undefined;
    userName: string | undefined;
}

export class SendEmailActivationLinkInput implements ISendEmailActivationLinkInput {
    emailAddress: string;

    constructor(data?: ISendEmailActivationLinkInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.emailAddress = data["emailAddress"];
        }
    }

    static fromJS(data: any): SendEmailActivationLinkInput {
        data = typeof data === 'object' ? data : {};
        let result = new SendEmailActivationLinkInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["emailAddress"] = this.emailAddress;
        return data; 
    }
}

export interface ISendEmailActivationLinkInput {
    emailAddress: string;
}

export class ActivateEmailInput implements IActivateEmailInput {
    userId: number;
    confirmationCode: string;

    constructor(data?: IActivateEmailInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.confirmationCode = data["confirmationCode"];
        }
    }

    static fromJS(data: any): ActivateEmailInput {
        data = typeof data === 'object' ? data : {};
        let result = new ActivateEmailInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["confirmationCode"] = this.confirmationCode;
        return data; 
    }
}

export interface IActivateEmailInput {
    userId: number;
    confirmationCode: string;
}

export class ImpersonateInput implements IImpersonateInput {
    tenantId: number | undefined;
    userId: number | undefined;

    constructor(data?: IImpersonateInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.userId = data["userId"];
        }
    }

    static fromJS(data: any): ImpersonateInput {
        data = typeof data === 'object' ? data : {};
        let result = new ImpersonateInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["userId"] = this.userId;
        return data; 
    }
}

export interface IImpersonateInput {
    tenantId: number | undefined;
    userId: number | undefined;
}

export class ImpersonateOutput implements IImpersonateOutput {
    impersonationToken: string | undefined;
    tenancyName: string | undefined;

    constructor(data?: IImpersonateOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.impersonationToken = data["impersonationToken"];
            this.tenancyName = data["tenancyName"];
        }
    }

    static fromJS(data: any): ImpersonateOutput {
        data = typeof data === 'object' ? data : {};
        let result = new ImpersonateOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["impersonationToken"] = this.impersonationToken;
        data["tenancyName"] = this.tenancyName;
        return data; 
    }
}

export interface IImpersonateOutput {
    impersonationToken: string | undefined;
    tenancyName: string | undefined;
}

export class SwitchToLinkedAccountInput implements ISwitchToLinkedAccountInput {
    targetTenantId: number | undefined;
    targetUserId: number | undefined;

    constructor(data?: ISwitchToLinkedAccountInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.targetTenantId = data["targetTenantId"];
            this.targetUserId = data["targetUserId"];
        }
    }

    static fromJS(data: any): SwitchToLinkedAccountInput {
        data = typeof data === 'object' ? data : {};
        let result = new SwitchToLinkedAccountInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["targetTenantId"] = this.targetTenantId;
        data["targetUserId"] = this.targetUserId;
        return data; 
    }
}

export interface ISwitchToLinkedAccountInput {
    targetTenantId: number | undefined;
    targetUserId: number | undefined;
}

export class SwitchToLinkedAccountOutput implements ISwitchToLinkedAccountOutput {
    switchAccountToken: string | undefined;
    tenancyName: string | undefined;

    constructor(data?: ISwitchToLinkedAccountOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.switchAccountToken = data["switchAccountToken"];
            this.tenancyName = data["tenancyName"];
        }
    }

    static fromJS(data: any): SwitchToLinkedAccountOutput {
        data = typeof data === 'object' ? data : {};
        let result = new SwitchToLinkedAccountOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["switchAccountToken"] = this.switchAccountToken;
        data["tenancyName"] = this.tenancyName;
        return data; 
    }
}

export interface ISwitchToLinkedAccountOutput {
    switchAccountToken: string | undefined;
    tenancyName: string | undefined;
}

export class PagedResultDtoOfAuditLogListDto implements IPagedResultDtoOfAuditLogListDto {
    totalCount: number | undefined;
    items: AuditLogListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfAuditLogListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(AuditLogListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfAuditLogListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfAuditLogListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfAuditLogListDto {
    totalCount: number | undefined;
    items: AuditLogListDto[] | undefined;
}

export class AuditLogListDto implements IAuditLogListDto {
    userId: number | undefined;
    userName: string | undefined;
    impersonatorTenantId: number | undefined;
    impersonatorUserId: number | undefined;
    serviceName: string | undefined;
    methodName: string | undefined;
    parameters: string | undefined;
    executionTime: moment.Moment | undefined;
    executionDuration: number | undefined;
    clientIpAddress: string | undefined;
    clientName: string | undefined;
    browserInfo: string | undefined;
    exception: string | undefined;
    customData: string | undefined;
    id: number | undefined;

    constructor(data?: IAuditLogListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.userName = data["userName"];
            this.impersonatorTenantId = data["impersonatorTenantId"];
            this.impersonatorUserId = data["impersonatorUserId"];
            this.serviceName = data["serviceName"];
            this.methodName = data["methodName"];
            this.parameters = data["parameters"];
            this.executionTime = data["executionTime"] ? moment(data["executionTime"].toString()) : <any>undefined;
            this.executionDuration = data["executionDuration"];
            this.clientIpAddress = data["clientIpAddress"];
            this.clientName = data["clientName"];
            this.browserInfo = data["browserInfo"];
            this.exception = data["exception"];
            this.customData = data["customData"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): AuditLogListDto {
        data = typeof data === 'object' ? data : {};
        let result = new AuditLogListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["userName"] = this.userName;
        data["impersonatorTenantId"] = this.impersonatorTenantId;
        data["impersonatorUserId"] = this.impersonatorUserId;
        data["serviceName"] = this.serviceName;
        data["methodName"] = this.methodName;
        data["parameters"] = this.parameters;
        data["executionTime"] = this.executionTime ? this.executionTime.toISOString() : <any>undefined;
        data["executionDuration"] = this.executionDuration;
        data["clientIpAddress"] = this.clientIpAddress;
        data["clientName"] = this.clientName;
        data["browserInfo"] = this.browserInfo;
        data["exception"] = this.exception;
        data["customData"] = this.customData;
        data["id"] = this.id;
        return data; 
    }
}

export interface IAuditLogListDto {
    userId: number | undefined;
    userName: string | undefined;
    impersonatorTenantId: number | undefined;
    impersonatorUserId: number | undefined;
    serviceName: string | undefined;
    methodName: string | undefined;
    parameters: string | undefined;
    executionTime: moment.Moment | undefined;
    executionDuration: number | undefined;
    clientIpAddress: string | undefined;
    clientName: string | undefined;
    browserInfo: string | undefined;
    exception: string | undefined;
    customData: string | undefined;
    id: number | undefined;
}

export class FileDto implements IFileDto {
    fileName: string;
    fileType: string;
    fileToken: string;

    constructor(data?: IFileDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.fileName = data["fileName"];
            this.fileType = data["fileType"];
            this.fileToken = data["fileToken"];
        }
    }

    static fromJS(data: any): FileDto {
        data = typeof data === 'object' ? data : {};
        let result = new FileDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fileName"] = this.fileName;
        data["fileType"] = this.fileType;
        data["fileToken"] = this.fileToken;
        return data; 
    }
}

export interface IFileDto {
    fileName: string;
    fileType: string;
    fileToken: string;
}

export class ListResultDtoOfCacheDto implements IListResultDtoOfCacheDto {
    items: CacheDto[] | undefined;

    constructor(data?: IListResultDtoOfCacheDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(CacheDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfCacheDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfCacheDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfCacheDto {
    items: CacheDto[] | undefined;
}

export class CacheDto implements ICacheDto {
    name: string | undefined;

    constructor(data?: ICacheDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
        }
    }

    static fromJS(data: any): CacheDto {
        data = typeof data === 'object' ? data : {};
        let result = new CacheDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface ICacheDto {
    name: string | undefined;
}

export class EntityDtoOfString implements IEntityDtoOfString {
    id: string | undefined;

    constructor(data?: IEntityDtoOfString) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EntityDtoOfString {
        data = typeof data === 'object' ? data : {};
        let result = new EntityDtoOfString();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data; 
    }
}

export interface IEntityDtoOfString {
    id: string | undefined;
}

export class GetUserChatFriendsWithSettingsOutput implements IGetUserChatFriendsWithSettingsOutput {
    serverTime: moment.Moment | undefined;
    friends: FriendDto[] | undefined;

    constructor(data?: IGetUserChatFriendsWithSettingsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.serverTime = data["serverTime"] ? moment(data["serverTime"].toString()) : <any>undefined;
            if (data["friends"] && data["friends"].constructor === Array) {
                this.friends = [];
                for (let item of data["friends"])
                    this.friends.push(FriendDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetUserChatFriendsWithSettingsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetUserChatFriendsWithSettingsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["serverTime"] = this.serverTime ? this.serverTime.toISOString() : <any>undefined;
        if (this.friends && this.friends.constructor === Array) {
            data["friends"] = [];
            for (let item of this.friends)
                data["friends"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetUserChatFriendsWithSettingsOutput {
    serverTime: moment.Moment | undefined;
    friends: FriendDto[] | undefined;
}

export class FriendDto implements IFriendDto {
    friendUserId: number | undefined;
    friendTenantId: number | undefined;
    friendUserName: string | undefined;
    friendTenancyName: string | undefined;
    friendProfilePictureId: string | undefined;
    unreadMessageCount: number | undefined;
    isOnline: boolean | undefined;
    state: FriendDtoState | undefined;

    constructor(data?: IFriendDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.friendUserId = data["friendUserId"];
            this.friendTenantId = data["friendTenantId"];
            this.friendUserName = data["friendUserName"];
            this.friendTenancyName = data["friendTenancyName"];
            this.friendProfilePictureId = data["friendProfilePictureId"];
            this.unreadMessageCount = data["unreadMessageCount"];
            this.isOnline = data["isOnline"];
            this.state = data["state"];
        }
    }

    static fromJS(data: any): FriendDto {
        data = typeof data === 'object' ? data : {};
        let result = new FriendDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["friendUserId"] = this.friendUserId;
        data["friendTenantId"] = this.friendTenantId;
        data["friendUserName"] = this.friendUserName;
        data["friendTenancyName"] = this.friendTenancyName;
        data["friendProfilePictureId"] = this.friendProfilePictureId;
        data["unreadMessageCount"] = this.unreadMessageCount;
        data["isOnline"] = this.isOnline;
        data["state"] = this.state;
        return data; 
    }
}

export interface IFriendDto {
    friendUserId: number | undefined;
    friendTenantId: number | undefined;
    friendUserName: string | undefined;
    friendTenancyName: string | undefined;
    friendProfilePictureId: string | undefined;
    unreadMessageCount: number | undefined;
    isOnline: boolean | undefined;
    state: FriendDtoState | undefined;
}

export class ListResultDtoOfChatMessageDto implements IListResultDtoOfChatMessageDto {
    items: ChatMessageDto[] | undefined;

    constructor(data?: IListResultDtoOfChatMessageDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(ChatMessageDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfChatMessageDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfChatMessageDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfChatMessageDto {
    items: ChatMessageDto[] | undefined;
}

export class ChatMessageDto implements IChatMessageDto {
    userId: number | undefined;
    tenantId: number | undefined;
    targetUserId: number | undefined;
    targetTenantId: number | undefined;
    side: ChatMessageDtoSide | undefined;
    readState: ChatMessageDtoReadState | undefined;
    receiverReadState: ChatMessageDtoReceiverReadState | undefined;
    message: string | undefined;
    creationTime: moment.Moment | undefined;
    sharedMessageId: string | undefined;
    id: number | undefined;

    constructor(data?: IChatMessageDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.tenantId = data["tenantId"];
            this.targetUserId = data["targetUserId"];
            this.targetTenantId = data["targetTenantId"];
            this.side = data["side"];
            this.readState = data["readState"];
            this.receiverReadState = data["receiverReadState"];
            this.message = data["message"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.sharedMessageId = data["sharedMessageId"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): ChatMessageDto {
        data = typeof data === 'object' ? data : {};
        let result = new ChatMessageDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["tenantId"] = this.tenantId;
        data["targetUserId"] = this.targetUserId;
        data["targetTenantId"] = this.targetTenantId;
        data["side"] = this.side;
        data["readState"] = this.readState;
        data["receiverReadState"] = this.receiverReadState;
        data["message"] = this.message;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["sharedMessageId"] = this.sharedMessageId;
        data["id"] = this.id;
        return data; 
    }
}

export interface IChatMessageDto {
    userId: number | undefined;
    tenantId: number | undefined;
    targetUserId: number | undefined;
    targetTenantId: number | undefined;
    side: ChatMessageDtoSide | undefined;
    readState: ChatMessageDtoReadState | undefined;
    receiverReadState: ChatMessageDtoReceiverReadState | undefined;
    message: string | undefined;
    creationTime: moment.Moment | undefined;
    sharedMessageId: string | undefined;
    id: number | undefined;
}

export class MarkAllUnreadMessagesOfUserAsReadInput implements IMarkAllUnreadMessagesOfUserAsReadInput {
    tenantId: number | undefined;
    userId: number | undefined;

    constructor(data?: IMarkAllUnreadMessagesOfUserAsReadInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.userId = data["userId"];
        }
    }

    static fromJS(data: any): MarkAllUnreadMessagesOfUserAsReadInput {
        data = typeof data === 'object' ? data : {};
        let result = new MarkAllUnreadMessagesOfUserAsReadInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["userId"] = this.userId;
        return data; 
    }
}

export interface IMarkAllUnreadMessagesOfUserAsReadInput {
    tenantId: number | undefined;
    userId: number | undefined;
}

export class ListResultDtoOfSubscribableEditionComboboxItemDto implements IListResultDtoOfSubscribableEditionComboboxItemDto {
    items: SubscribableEditionComboboxItemDto[] | undefined;

    constructor(data?: IListResultDtoOfSubscribableEditionComboboxItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(SubscribableEditionComboboxItemDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfSubscribableEditionComboboxItemDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfSubscribableEditionComboboxItemDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfSubscribableEditionComboboxItemDto {
    items: SubscribableEditionComboboxItemDto[] | undefined;
}

export class SubscribableEditionComboboxItemDto implements ISubscribableEditionComboboxItemDto {
    isFree: boolean | undefined;
    value: string | undefined;
    displayText: string | undefined;
    isSelected: boolean | undefined;

    constructor(data?: ISubscribableEditionComboboxItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isFree = data["isFree"];
            this.value = data["value"];
            this.displayText = data["displayText"];
            this.isSelected = data["isSelected"];
        }
    }

    static fromJS(data: any): SubscribableEditionComboboxItemDto {
        data = typeof data === 'object' ? data : {};
        let result = new SubscribableEditionComboboxItemDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isFree"] = this.isFree;
        data["value"] = this.value;
        data["displayText"] = this.displayText;
        data["isSelected"] = this.isSelected;
        return data; 
    }
}

export interface ISubscribableEditionComboboxItemDto {
    isFree: boolean | undefined;
    value: string | undefined;
    displayText: string | undefined;
    isSelected: boolean | undefined;
}

export class FindUsersInput implements IFindUsersInput {
    tenantId: number | undefined;
    maxResultCount: number | undefined;
    skipCount: number | undefined;
    filter: string | undefined;

    constructor(data?: IFindUsersInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.maxResultCount = data["maxResultCount"];
            this.skipCount = data["skipCount"];
            this.filter = data["filter"];
        }
    }

    static fromJS(data: any): FindUsersInput {
        data = typeof data === 'object' ? data : {};
        let result = new FindUsersInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["maxResultCount"] = this.maxResultCount;
        data["skipCount"] = this.skipCount;
        data["filter"] = this.filter;
        return data; 
    }
}

export interface IFindUsersInput {
    tenantId: number | undefined;
    maxResultCount: number | undefined;
    skipCount: number | undefined;
    filter: string | undefined;
}

export class PagedResultDtoOfNameValueDto implements IPagedResultDtoOfNameValueDto {
    totalCount: number | undefined;
    items: NameValueDto[] | undefined;

    constructor(data?: IPagedResultDtoOfNameValueDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(NameValueDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfNameValueDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfNameValueDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfNameValueDto {
    totalCount: number | undefined;
    items: NameValueDto[] | undefined;
}

export class NameValueDto implements INameValueDto {
    name: string | undefined;
    value: string | undefined;

    constructor(data?: INameValueDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): NameValueDto {
        data = typeof data === 'object' ? data : {};
        let result = new NameValueDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["value"] = this.value;
        return data; 
    }
}

export interface INameValueDto {
    name: string | undefined;
    value: string | undefined;
}

export class GetDefaultEditionNameOutput implements IGetDefaultEditionNameOutput {
    name: string | undefined;

    constructor(data?: IGetDefaultEditionNameOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
        }
    }

    static fromJS(data: any): GetDefaultEditionNameOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetDefaultEditionNameOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface IGetDefaultEditionNameOutput {
    name: string | undefined;
}

export class DateToStringOutput implements IDateToStringOutput {
    dateString: string | undefined;

    constructor(data?: IDateToStringOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.dateString = data["dateString"];
        }
    }

    static fromJS(data: any): DateToStringOutput {
        data = typeof data === 'object' ? data : {};
        let result = new DateToStringOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["dateString"] = this.dateString;
        return data; 
    }
}

export interface IDateToStringOutput {
    dateString: string | undefined;
}

export class NameValueOfString implements INameValueOfString {
    name: string | undefined;
    value: string | undefined;

    constructor(data?: INameValueOfString) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): NameValueOfString {
        data = typeof data === 'object' ? data : {};
        let result = new NameValueOfString();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["value"] = this.value;
        return data; 
    }
}

export interface INameValueOfString {
    name: string | undefined;
    value: string | undefined;
}

export class StringOutput implements IStringOutput {
    output: string | undefined;

    constructor(data?: IStringOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.output = data["output"];
        }
    }

    static fromJS(data: any): StringOutput {
        data = typeof data === 'object' ? data : {};
        let result = new StringOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["output"] = this.output;
        return data; 
    }
}

export interface IStringOutput {
    output: string | undefined;
}

export class ListResultDtoOfEditionListDto implements IListResultDtoOfEditionListDto {
    items: EditionListDto[] | undefined;

    constructor(data?: IListResultDtoOfEditionListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(EditionListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfEditionListDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfEditionListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfEditionListDto {
    items: EditionListDto[] | undefined;
}

export class EditionListDto implements IEditionListDto {
    name: string | undefined;
    displayName: string | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;

    constructor(data?: IEditionListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EditionListDto {
        data = typeof data === 'object' ? data : {};
        let result = new EditionListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface IEditionListDto {
    name: string | undefined;
    displayName: string | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;
}

export class GetEditionEditOutput implements IGetEditionEditOutput {
    edition: EditionEditDto | undefined;
    featureValues: NameValueDto[] | undefined;
    features: FlatFeatureDto[] | undefined;

    constructor(data?: IGetEditionEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.edition = data["edition"] ? EditionEditDto.fromJS(data["edition"]) : <any>undefined;
            if (data["featureValues"] && data["featureValues"].constructor === Array) {
                this.featureValues = [];
                for (let item of data["featureValues"])
                    this.featureValues.push(NameValueDto.fromJS(item));
            }
            if (data["features"] && data["features"].constructor === Array) {
                this.features = [];
                for (let item of data["features"])
                    this.features.push(FlatFeatureDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetEditionEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetEditionEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["edition"] = this.edition ? this.edition.toJSON() : <any>undefined;
        if (this.featureValues && this.featureValues.constructor === Array) {
            data["featureValues"] = [];
            for (let item of this.featureValues)
                data["featureValues"].push(item.toJSON());
        }
        if (this.features && this.features.constructor === Array) {
            data["features"] = [];
            for (let item of this.features)
                data["features"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetEditionEditOutput {
    edition: EditionEditDto | undefined;
    featureValues: NameValueDto[] | undefined;
    features: FlatFeatureDto[] | undefined;
}

export class EditionEditDto implements IEditionEditDto {
    id: number | undefined;
    displayName: string;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    trialDayCount: number | undefined;
    waitingDayAfterExpire: number | undefined;
    expiringEditionId: number | undefined;

    constructor(data?: IEditionEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
            this.monthlyPrice = data["monthlyPrice"];
            this.annualPrice = data["annualPrice"];
            this.trialDayCount = data["trialDayCount"];
            this.waitingDayAfterExpire = data["waitingDayAfterExpire"];
            this.expiringEditionId = data["expiringEditionId"];
        }
    }

    static fromJS(data: any): EditionEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new EditionEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["monthlyPrice"] = this.monthlyPrice;
        data["annualPrice"] = this.annualPrice;
        data["trialDayCount"] = this.trialDayCount;
        data["waitingDayAfterExpire"] = this.waitingDayAfterExpire;
        data["expiringEditionId"] = this.expiringEditionId;
        return data; 
    }
}

export interface IEditionEditDto {
    id: number | undefined;
    displayName: string;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    trialDayCount: number | undefined;
    waitingDayAfterExpire: number | undefined;
    expiringEditionId: number | undefined;
}

export class FlatFeatureDto implements IFlatFeatureDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    defaultValue: string | undefined;
    inputType: FeatureInputTypeDto | undefined;

    constructor(data?: IFlatFeatureDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.parentName = data["parentName"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.defaultValue = data["defaultValue"];
            this.inputType = data["inputType"] ? FeatureInputTypeDto.fromJS(data["inputType"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FlatFeatureDto {
        data = typeof data === 'object' ? data : {};
        let result = new FlatFeatureDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["parentName"] = this.parentName;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["defaultValue"] = this.defaultValue;
        data["inputType"] = this.inputType ? this.inputType.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IFlatFeatureDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    defaultValue: string | undefined;
    inputType: FeatureInputTypeDto | undefined;
}

export class FeatureInputTypeDto implements IFeatureInputTypeDto {
    name: string | undefined;
    attributes: { [key: string] : any; } | undefined;
    validator: IValueValidator | undefined;
    itemSource: LocalizableComboboxItemSourceDto | undefined;

    constructor(data?: IFeatureInputTypeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            if (data["attributes"]) {
                this.attributes = {};
                for (let key in data["attributes"]) {
                    if (data["attributes"].hasOwnProperty(key))
                        this.attributes[key] = data["attributes"][key];
                }
            }
            this.validator = data["validator"] ? IValueValidator.fromJS(data["validator"]) : <any>undefined;
            this.itemSource = data["itemSource"] ? LocalizableComboboxItemSourceDto.fromJS(data["itemSource"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FeatureInputTypeDto {
        data = typeof data === 'object' ? data : {};
        let result = new FeatureInputTypeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (this.attributes) {
            data["attributes"] = {};
            for (let key in this.attributes) {
                if (this.attributes.hasOwnProperty(key))
                    data["attributes"][key] = this.attributes[key];
            }
        }
        data["validator"] = this.validator ? this.validator.toJSON() : <any>undefined;
        data["itemSource"] = this.itemSource ? this.itemSource.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IFeatureInputTypeDto {
    name: string | undefined;
    attributes: { [key: string] : any; } | undefined;
    validator: IValueValidator | undefined;
    itemSource: LocalizableComboboxItemSourceDto | undefined;
}

export class IValueValidator implements IIValueValidator {
    readonly name: string | undefined;
    readonly attributes: { [key: string] : any; } | undefined;

    constructor(data?: IIValueValidator) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            (<any>this).name = data["name"];
            if (data["attributes"]) {
                (<any>this).attributes = {};
                for (let key in data["attributes"]) {
                    if (data["attributes"].hasOwnProperty(key))
                        (<any>this).attributes[key] = data["attributes"][key];
                }
            }
        }
    }

    static fromJS(data: any): IValueValidator {
        data = typeof data === 'object' ? data : {};
        let result = new IValueValidator();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (this.attributes) {
            data["attributes"] = {};
            for (let key in this.attributes) {
                if (this.attributes.hasOwnProperty(key))
                    data["attributes"][key] = this.attributes[key];
            }
        }
        return data; 
    }
}

export interface IIValueValidator {
    name: string | undefined;
    attributes: { [key: string] : any; } | undefined;
}

export class LocalizableComboboxItemSourceDto implements ILocalizableComboboxItemSourceDto {
    items: LocalizableComboboxItemDto[] | undefined;

    constructor(data?: ILocalizableComboboxItemSourceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(LocalizableComboboxItemDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): LocalizableComboboxItemSourceDto {
        data = typeof data === 'object' ? data : {};
        let result = new LocalizableComboboxItemSourceDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ILocalizableComboboxItemSourceDto {
    items: LocalizableComboboxItemDto[] | undefined;
}

export class LocalizableComboboxItemDto implements ILocalizableComboboxItemDto {
    value: string | undefined;
    displayText: string | undefined;

    constructor(data?: ILocalizableComboboxItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.value = data["value"];
            this.displayText = data["displayText"];
        }
    }

    static fromJS(data: any): LocalizableComboboxItemDto {
        data = typeof data === 'object' ? data : {};
        let result = new LocalizableComboboxItemDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["value"] = this.value;
        data["displayText"] = this.displayText;
        return data; 
    }
}

export interface ILocalizableComboboxItemDto {
    value: string | undefined;
    displayText: string | undefined;
}

export class CreateOrUpdateEditionDto implements ICreateOrUpdateEditionDto {
    edition: EditionEditDto;
    featureValues: NameValueDto[];

    constructor(data?: ICreateOrUpdateEditionDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.edition = new EditionEditDto();
            this.featureValues = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.edition = data["edition"] ? EditionEditDto.fromJS(data["edition"]) : new EditionEditDto();
            if (data["featureValues"] && data["featureValues"].constructor === Array) {
                this.featureValues = [];
                for (let item of data["featureValues"])
                    this.featureValues.push(NameValueDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CreateOrUpdateEditionDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateOrUpdateEditionDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["edition"] = this.edition ? this.edition.toJSON() : <any>undefined;
        if (this.featureValues && this.featureValues.constructor === Array) {
            data["featureValues"] = [];
            for (let item of this.featureValues)
                data["featureValues"].push(item.toJSON());
        }
        return data; 
    }
}

export interface ICreateOrUpdateEditionDto {
    edition: EditionEditDto;
    featureValues: NameValueDto[];
}

export class CreateFriendshipRequestInput implements ICreateFriendshipRequestInput {
    userId: number | undefined;
    tenantId: number | undefined;

    constructor(data?: ICreateFriendshipRequestInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.tenantId = data["tenantId"];
        }
    }

    static fromJS(data: any): CreateFriendshipRequestInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateFriendshipRequestInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["tenantId"] = this.tenantId;
        return data; 
    }
}

export interface ICreateFriendshipRequestInput {
    userId: number | undefined;
    tenantId: number | undefined;
}

export class CreateFriendshipRequestByUserNameInput implements ICreateFriendshipRequestByUserNameInput {
    tenancyName: string;
    userName: string | undefined;

    constructor(data?: ICreateFriendshipRequestByUserNameInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.userName = data["userName"];
        }
    }

    static fromJS(data: any): CreateFriendshipRequestByUserNameInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateFriendshipRequestByUserNameInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["userName"] = this.userName;
        return data; 
    }
}

export interface ICreateFriendshipRequestByUserNameInput {
    tenancyName: string;
    userName: string | undefined;
}

export class BlockUserInput implements IBlockUserInput {
    userId: number | undefined;
    tenantId: number | undefined;

    constructor(data?: IBlockUserInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.tenantId = data["tenantId"];
        }
    }

    static fromJS(data: any): BlockUserInput {
        data = typeof data === 'object' ? data : {};
        let result = new BlockUserInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["tenantId"] = this.tenantId;
        return data; 
    }
}

export interface IBlockUserInput {
    userId: number | undefined;
    tenantId: number | undefined;
}

export class UnblockUserInput implements IUnblockUserInput {
    userId: number | undefined;
    tenantId: number | undefined;

    constructor(data?: IUnblockUserInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.tenantId = data["tenantId"];
        }
    }

    static fromJS(data: any): UnblockUserInput {
        data = typeof data === 'object' ? data : {};
        let result = new UnblockUserInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["tenantId"] = this.tenantId;
        return data; 
    }
}

export interface IUnblockUserInput {
    userId: number | undefined;
    tenantId: number | undefined;
}

export class AcceptFriendshipRequestInput implements IAcceptFriendshipRequestInput {
    userId: number | undefined;
    tenantId: number | undefined;

    constructor(data?: IAcceptFriendshipRequestInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userId = data["userId"];
            this.tenantId = data["tenantId"];
        }
    }

    static fromJS(data: any): AcceptFriendshipRequestInput {
        data = typeof data === 'object' ? data : {};
        let result = new AcceptFriendshipRequestInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["tenantId"] = this.tenantId;
        return data; 
    }
}

export interface IAcceptFriendshipRequestInput {
    userId: number | undefined;
    tenantId: number | undefined;
}

export class HostDashboardData implements IHostDashboardData {
    newTenantsCount: number | undefined;
    newSubscriptionAmount: number | undefined;
    dashboardPlaceholder1: number | undefined;
    dashboardPlaceholder2: number | undefined;
    incomeStatistics: IncomeStastistic[] | undefined;
    editionStatistics: TenantEdition[] | undefined;
    expiringTenants: ExpiringTenant[] | undefined;
    recentTenants: RecentTenant[] | undefined;
    maxExpiringTenantsShownCount: number | undefined;
    maxRecentTenantsShownCount: number | undefined;
    subscriptionEndAlertDayCount: number | undefined;
    recentTenantsDayCount: number | undefined;
    subscriptionEndDateStart: moment.Moment | undefined;
    subscriptionEndDateEnd: moment.Moment | undefined;
    tenantCreationStartDate: moment.Moment | undefined;

    constructor(data?: IHostDashboardData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.newTenantsCount = data["newTenantsCount"];
            this.newSubscriptionAmount = data["newSubscriptionAmount"];
            this.dashboardPlaceholder1 = data["dashboardPlaceholder1"];
            this.dashboardPlaceholder2 = data["dashboardPlaceholder2"];
            if (data["incomeStatistics"] && data["incomeStatistics"].constructor === Array) {
                this.incomeStatistics = [];
                for (let item of data["incomeStatistics"])
                    this.incomeStatistics.push(IncomeStastistic.fromJS(item));
            }
            if (data["editionStatistics"] && data["editionStatistics"].constructor === Array) {
                this.editionStatistics = [];
                for (let item of data["editionStatistics"])
                    this.editionStatistics.push(TenantEdition.fromJS(item));
            }
            if (data["expiringTenants"] && data["expiringTenants"].constructor === Array) {
                this.expiringTenants = [];
                for (let item of data["expiringTenants"])
                    this.expiringTenants.push(ExpiringTenant.fromJS(item));
            }
            if (data["recentTenants"] && data["recentTenants"].constructor === Array) {
                this.recentTenants = [];
                for (let item of data["recentTenants"])
                    this.recentTenants.push(RecentTenant.fromJS(item));
            }
            this.maxExpiringTenantsShownCount = data["maxExpiringTenantsShownCount"];
            this.maxRecentTenantsShownCount = data["maxRecentTenantsShownCount"];
            this.subscriptionEndAlertDayCount = data["subscriptionEndAlertDayCount"];
            this.recentTenantsDayCount = data["recentTenantsDayCount"];
            this.subscriptionEndDateStart = data["subscriptionEndDateStart"] ? moment(data["subscriptionEndDateStart"].toString()) : <any>undefined;
            this.subscriptionEndDateEnd = data["subscriptionEndDateEnd"] ? moment(data["subscriptionEndDateEnd"].toString()) : <any>undefined;
            this.tenantCreationStartDate = data["tenantCreationStartDate"] ? moment(data["tenantCreationStartDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): HostDashboardData {
        data = typeof data === 'object' ? data : {};
        let result = new HostDashboardData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["newTenantsCount"] = this.newTenantsCount;
        data["newSubscriptionAmount"] = this.newSubscriptionAmount;
        data["dashboardPlaceholder1"] = this.dashboardPlaceholder1;
        data["dashboardPlaceholder2"] = this.dashboardPlaceholder2;
        if (this.incomeStatistics && this.incomeStatistics.constructor === Array) {
            data["incomeStatistics"] = [];
            for (let item of this.incomeStatistics)
                data["incomeStatistics"].push(item.toJSON());
        }
        if (this.editionStatistics && this.editionStatistics.constructor === Array) {
            data["editionStatistics"] = [];
            for (let item of this.editionStatistics)
                data["editionStatistics"].push(item.toJSON());
        }
        if (this.expiringTenants && this.expiringTenants.constructor === Array) {
            data["expiringTenants"] = [];
            for (let item of this.expiringTenants)
                data["expiringTenants"].push(item.toJSON());
        }
        if (this.recentTenants && this.recentTenants.constructor === Array) {
            data["recentTenants"] = [];
            for (let item of this.recentTenants)
                data["recentTenants"].push(item.toJSON());
        }
        data["maxExpiringTenantsShownCount"] = this.maxExpiringTenantsShownCount;
        data["maxRecentTenantsShownCount"] = this.maxRecentTenantsShownCount;
        data["subscriptionEndAlertDayCount"] = this.subscriptionEndAlertDayCount;
        data["recentTenantsDayCount"] = this.recentTenantsDayCount;
        data["subscriptionEndDateStart"] = this.subscriptionEndDateStart ? this.subscriptionEndDateStart.toISOString() : <any>undefined;
        data["subscriptionEndDateEnd"] = this.subscriptionEndDateEnd ? this.subscriptionEndDateEnd.toISOString() : <any>undefined;
        data["tenantCreationStartDate"] = this.tenantCreationStartDate ? this.tenantCreationStartDate.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IHostDashboardData {
    newTenantsCount: number | undefined;
    newSubscriptionAmount: number | undefined;
    dashboardPlaceholder1: number | undefined;
    dashboardPlaceholder2: number | undefined;
    incomeStatistics: IncomeStastistic[] | undefined;
    editionStatistics: TenantEdition[] | undefined;
    expiringTenants: ExpiringTenant[] | undefined;
    recentTenants: RecentTenant[] | undefined;
    maxExpiringTenantsShownCount: number | undefined;
    maxRecentTenantsShownCount: number | undefined;
    subscriptionEndAlertDayCount: number | undefined;
    recentTenantsDayCount: number | undefined;
    subscriptionEndDateStart: moment.Moment | undefined;
    subscriptionEndDateEnd: moment.Moment | undefined;
    tenantCreationStartDate: moment.Moment | undefined;
}

export class IncomeStastistic implements IIncomeStastistic {
    label: string | undefined;
    date: moment.Moment | undefined;
    amount: number | undefined;

    constructor(data?: IIncomeStastistic) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.label = data["label"];
            this.date = data["date"] ? moment(data["date"].toString()) : <any>undefined;
            this.amount = data["amount"];
        }
    }

    static fromJS(data: any): IncomeStastistic {
        data = typeof data === 'object' ? data : {};
        let result = new IncomeStastistic();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["label"] = this.label;
        data["date"] = this.date ? this.date.toISOString() : <any>undefined;
        data["amount"] = this.amount;
        return data; 
    }
}

export interface IIncomeStastistic {
    label: string | undefined;
    date: moment.Moment | undefined;
    amount: number | undefined;
}

export class TenantEdition implements ITenantEdition {
    label: string | undefined;
    value: number | undefined;

    constructor(data?: ITenantEdition) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.label = data["label"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): TenantEdition {
        data = typeof data === 'object' ? data : {};
        let result = new TenantEdition();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["label"] = this.label;
        data["value"] = this.value;
        return data; 
    }
}

export interface ITenantEdition {
    label: string | undefined;
    value: number | undefined;
}

export class ExpiringTenant implements IExpiringTenant {
    tenantName: string | undefined;
    remainingDayCount: number | undefined;

    constructor(data?: IExpiringTenant) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantName = data["tenantName"];
            this.remainingDayCount = data["remainingDayCount"];
        }
    }

    static fromJS(data: any): ExpiringTenant {
        data = typeof data === 'object' ? data : {};
        let result = new ExpiringTenant();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantName"] = this.tenantName;
        data["remainingDayCount"] = this.remainingDayCount;
        return data; 
    }
}

export interface IExpiringTenant {
    tenantName: string | undefined;
    remainingDayCount: number | undefined;
}

export class RecentTenant implements IRecentTenant {
    id: number | undefined;
    name: string | undefined;
    creationTime: moment.Moment | undefined;

    constructor(data?: IRecentTenant) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): RecentTenant {
        data = typeof data === 'object' ? data : {};
        let result = new RecentTenant();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IRecentTenant {
    id: number | undefined;
    name: string | undefined;
    creationTime: moment.Moment | undefined;
}

export class GetIncomeStatisticsDataOutput implements IGetIncomeStatisticsDataOutput {
    incomeStatistics: IncomeStastistic[] | undefined;

    constructor(data?: IGetIncomeStatisticsDataOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["incomeStatistics"] && data["incomeStatistics"].constructor === Array) {
                this.incomeStatistics = [];
                for (let item of data["incomeStatistics"])
                    this.incomeStatistics.push(IncomeStastistic.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetIncomeStatisticsDataOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetIncomeStatisticsDataOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.incomeStatistics && this.incomeStatistics.constructor === Array) {
            data["incomeStatistics"] = [];
            for (let item of this.incomeStatistics)
                data["incomeStatistics"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetIncomeStatisticsDataOutput {
    incomeStatistics: IncomeStastistic[] | undefined;
}

export class GetEditionTenantStatisticsOutput implements IGetEditionTenantStatisticsOutput {
    editionStatistics: TenantEdition[] | undefined;

    constructor(data?: IGetEditionTenantStatisticsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["editionStatistics"] && data["editionStatistics"].constructor === Array) {
                this.editionStatistics = [];
                for (let item of data["editionStatistics"])
                    this.editionStatistics.push(TenantEdition.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetEditionTenantStatisticsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetEditionTenantStatisticsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.editionStatistics && this.editionStatistics.constructor === Array) {
            data["editionStatistics"] = [];
            for (let item of this.editionStatistics)
                data["editionStatistics"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetEditionTenantStatisticsOutput {
    editionStatistics: TenantEdition[] | undefined;
}

export class HostSettingsEditDto implements IHostSettingsEditDto {
    general: GeneralSettingsEditDto;
    userManagement: HostUserManagementSettingsEditDto;
    email: EmailSettingsEditDto;
    tenantManagement: TenantManagementSettingsEditDto;
    security: SecuritySettingsEditDto;
    billing: HostBillingSettingsEditDto | undefined;

    constructor(data?: IHostSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.general = new GeneralSettingsEditDto();
            this.userManagement = new HostUserManagementSettingsEditDto();
            this.email = new EmailSettingsEditDto();
            this.tenantManagement = new TenantManagementSettingsEditDto();
            this.security = new SecuritySettingsEditDto();
        }
    }

    init(data?: any) {
        if (data) {
            this.general = data["general"] ? GeneralSettingsEditDto.fromJS(data["general"]) : new GeneralSettingsEditDto();
            this.userManagement = data["userManagement"] ? HostUserManagementSettingsEditDto.fromJS(data["userManagement"]) : new HostUserManagementSettingsEditDto();
            this.email = data["email"] ? EmailSettingsEditDto.fromJS(data["email"]) : new EmailSettingsEditDto();
            this.tenantManagement = data["tenantManagement"] ? TenantManagementSettingsEditDto.fromJS(data["tenantManagement"]) : new TenantManagementSettingsEditDto();
            this.security = data["security"] ? SecuritySettingsEditDto.fromJS(data["security"]) : new SecuritySettingsEditDto();
            this.billing = data["billing"] ? HostBillingSettingsEditDto.fromJS(data["billing"]) : <any>undefined;
        }
    }

    static fromJS(data: any): HostSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new HostSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["general"] = this.general ? this.general.toJSON() : <any>undefined;
        data["userManagement"] = this.userManagement ? this.userManagement.toJSON() : <any>undefined;
        data["email"] = this.email ? this.email.toJSON() : <any>undefined;
        data["tenantManagement"] = this.tenantManagement ? this.tenantManagement.toJSON() : <any>undefined;
        data["security"] = this.security ? this.security.toJSON() : <any>undefined;
        data["billing"] = this.billing ? this.billing.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IHostSettingsEditDto {
    general: GeneralSettingsEditDto;
    userManagement: HostUserManagementSettingsEditDto;
    email: EmailSettingsEditDto;
    tenantManagement: TenantManagementSettingsEditDto;
    security: SecuritySettingsEditDto;
    billing: HostBillingSettingsEditDto | undefined;
}

export class GeneralSettingsEditDto implements IGeneralSettingsEditDto {
    timezone: string | undefined;
    timezoneForComparison: string | undefined;

    constructor(data?: IGeneralSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.timezone = data["timezone"];
            this.timezoneForComparison = data["timezoneForComparison"];
        }
    }

    static fromJS(data: any): GeneralSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new GeneralSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["timezone"] = this.timezone;
        data["timezoneForComparison"] = this.timezoneForComparison;
        return data; 
    }
}

export interface IGeneralSettingsEditDto {
    timezone: string | undefined;
    timezoneForComparison: string | undefined;
}

export class HostUserManagementSettingsEditDto implements IHostUserManagementSettingsEditDto {
    isEmailConfirmationRequiredForLogin: boolean | undefined;
    smsVerificationEnabled: boolean | undefined;

    constructor(data?: IHostUserManagementSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isEmailConfirmationRequiredForLogin = data["isEmailConfirmationRequiredForLogin"];
            this.smsVerificationEnabled = data["smsVerificationEnabled"];
        }
    }

    static fromJS(data: any): HostUserManagementSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new HostUserManagementSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isEmailConfirmationRequiredForLogin"] = this.isEmailConfirmationRequiredForLogin;
        data["smsVerificationEnabled"] = this.smsVerificationEnabled;
        return data; 
    }
}

export interface IHostUserManagementSettingsEditDto {
    isEmailConfirmationRequiredForLogin: boolean | undefined;
    smsVerificationEnabled: boolean | undefined;
}

export class EmailSettingsEditDto implements IEmailSettingsEditDto {
    defaultFromAddress: string | undefined;
    defaultFromDisplayName: string | undefined;
    smtpHost: string | undefined;
    smtpPort: number | undefined;
    smtpUserName: string | undefined;
    smtpPassword: string | undefined;
    smtpDomain: string | undefined;
    smtpEnableSsl: boolean | undefined;
    smtpUseDefaultCredentials: boolean | undefined;

    constructor(data?: IEmailSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.defaultFromAddress = data["defaultFromAddress"];
            this.defaultFromDisplayName = data["defaultFromDisplayName"];
            this.smtpHost = data["smtpHost"];
            this.smtpPort = data["smtpPort"];
            this.smtpUserName = data["smtpUserName"];
            this.smtpPassword = data["smtpPassword"];
            this.smtpDomain = data["smtpDomain"];
            this.smtpEnableSsl = data["smtpEnableSsl"];
            this.smtpUseDefaultCredentials = data["smtpUseDefaultCredentials"];
        }
    }

    static fromJS(data: any): EmailSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new EmailSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["defaultFromAddress"] = this.defaultFromAddress;
        data["defaultFromDisplayName"] = this.defaultFromDisplayName;
        data["smtpHost"] = this.smtpHost;
        data["smtpPort"] = this.smtpPort;
        data["smtpUserName"] = this.smtpUserName;
        data["smtpPassword"] = this.smtpPassword;
        data["smtpDomain"] = this.smtpDomain;
        data["smtpEnableSsl"] = this.smtpEnableSsl;
        data["smtpUseDefaultCredentials"] = this.smtpUseDefaultCredentials;
        return data; 
    }
}

export interface IEmailSettingsEditDto {
    defaultFromAddress: string | undefined;
    defaultFromDisplayName: string | undefined;
    smtpHost: string | undefined;
    smtpPort: number | undefined;
    smtpUserName: string | undefined;
    smtpPassword: string | undefined;
    smtpDomain: string | undefined;
    smtpEnableSsl: boolean | undefined;
    smtpUseDefaultCredentials: boolean | undefined;
}

export class TenantManagementSettingsEditDto implements ITenantManagementSettingsEditDto {
    allowSelfRegistration: boolean | undefined;
    isNewRegisteredTenantActiveByDefault: boolean | undefined;
    useCaptchaOnRegistration: boolean | undefined;
    defaultEditionId: number | undefined;

    constructor(data?: ITenantManagementSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.allowSelfRegistration = data["allowSelfRegistration"];
            this.isNewRegisteredTenantActiveByDefault = data["isNewRegisteredTenantActiveByDefault"];
            this.useCaptchaOnRegistration = data["useCaptchaOnRegistration"];
            this.defaultEditionId = data["defaultEditionId"];
        }
    }

    static fromJS(data: any): TenantManagementSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantManagementSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["allowSelfRegistration"] = this.allowSelfRegistration;
        data["isNewRegisteredTenantActiveByDefault"] = this.isNewRegisteredTenantActiveByDefault;
        data["useCaptchaOnRegistration"] = this.useCaptchaOnRegistration;
        data["defaultEditionId"] = this.defaultEditionId;
        return data; 
    }
}

export interface ITenantManagementSettingsEditDto {
    allowSelfRegistration: boolean | undefined;
    isNewRegisteredTenantActiveByDefault: boolean | undefined;
    useCaptchaOnRegistration: boolean | undefined;
    defaultEditionId: number | undefined;
}

export class SecuritySettingsEditDto implements ISecuritySettingsEditDto {
    useDefaultPasswordComplexitySettings: boolean | undefined;
    passwordComplexity: PasswordComplexitySetting | undefined;
    defaultPasswordComplexity: PasswordComplexitySetting | undefined;
    userLockOut: UserLockOutSettingsEditDto | undefined;
    twoFactorLogin: TwoFactorLoginSettingsEditDto | undefined;

    constructor(data?: ISecuritySettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.useDefaultPasswordComplexitySettings = data["useDefaultPasswordComplexitySettings"];
            this.passwordComplexity = data["passwordComplexity"] ? PasswordComplexitySetting.fromJS(data["passwordComplexity"]) : <any>undefined;
            this.defaultPasswordComplexity = data["defaultPasswordComplexity"] ? PasswordComplexitySetting.fromJS(data["defaultPasswordComplexity"]) : <any>undefined;
            this.userLockOut = data["userLockOut"] ? UserLockOutSettingsEditDto.fromJS(data["userLockOut"]) : <any>undefined;
            this.twoFactorLogin = data["twoFactorLogin"] ? TwoFactorLoginSettingsEditDto.fromJS(data["twoFactorLogin"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SecuritySettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new SecuritySettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["useDefaultPasswordComplexitySettings"] = this.useDefaultPasswordComplexitySettings;
        data["passwordComplexity"] = this.passwordComplexity ? this.passwordComplexity.toJSON() : <any>undefined;
        data["defaultPasswordComplexity"] = this.defaultPasswordComplexity ? this.defaultPasswordComplexity.toJSON() : <any>undefined;
        data["userLockOut"] = this.userLockOut ? this.userLockOut.toJSON() : <any>undefined;
        data["twoFactorLogin"] = this.twoFactorLogin ? this.twoFactorLogin.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ISecuritySettingsEditDto {
    useDefaultPasswordComplexitySettings: boolean | undefined;
    passwordComplexity: PasswordComplexitySetting | undefined;
    defaultPasswordComplexity: PasswordComplexitySetting | undefined;
    userLockOut: UserLockOutSettingsEditDto | undefined;
    twoFactorLogin: TwoFactorLoginSettingsEditDto | undefined;
}

export class HostBillingSettingsEditDto implements IHostBillingSettingsEditDto {
    legalName: string | undefined;
    address: string | undefined;

    constructor(data?: IHostBillingSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.legalName = data["legalName"];
            this.address = data["address"];
        }
    }

    static fromJS(data: any): HostBillingSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new HostBillingSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["legalName"] = this.legalName;
        data["address"] = this.address;
        return data; 
    }
}

export interface IHostBillingSettingsEditDto {
    legalName: string | undefined;
    address: string | undefined;
}

export class PasswordComplexitySetting implements IPasswordComplexitySetting {
    requireDigit: boolean | undefined;
    requireLowercase: boolean | undefined;
    requireNonAlphanumeric: boolean | undefined;
    requireUppercase: boolean | undefined;
    requiredLength: number | undefined;

    constructor(data?: IPasswordComplexitySetting) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.requireDigit = data["requireDigit"];
            this.requireLowercase = data["requireLowercase"];
            this.requireNonAlphanumeric = data["requireNonAlphanumeric"];
            this.requireUppercase = data["requireUppercase"];
            this.requiredLength = data["requiredLength"];
        }
    }

    static fromJS(data: any): PasswordComplexitySetting {
        data = typeof data === 'object' ? data : {};
        let result = new PasswordComplexitySetting();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["requireDigit"] = this.requireDigit;
        data["requireLowercase"] = this.requireLowercase;
        data["requireNonAlphanumeric"] = this.requireNonAlphanumeric;
        data["requireUppercase"] = this.requireUppercase;
        data["requiredLength"] = this.requiredLength;
        return data; 
    }
}

export interface IPasswordComplexitySetting {
    requireDigit: boolean | undefined;
    requireLowercase: boolean | undefined;
    requireNonAlphanumeric: boolean | undefined;
    requireUppercase: boolean | undefined;
    requiredLength: number | undefined;
}

export class UserLockOutSettingsEditDto implements IUserLockOutSettingsEditDto {
    isEnabled: boolean | undefined;
    maxFailedAccessAttemptsBeforeLockout: number | undefined;
    defaultAccountLockoutSeconds: number | undefined;

    constructor(data?: IUserLockOutSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isEnabled = data["isEnabled"];
            this.maxFailedAccessAttemptsBeforeLockout = data["maxFailedAccessAttemptsBeforeLockout"];
            this.defaultAccountLockoutSeconds = data["defaultAccountLockoutSeconds"];
        }
    }

    static fromJS(data: any): UserLockOutSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLockOutSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isEnabled"] = this.isEnabled;
        data["maxFailedAccessAttemptsBeforeLockout"] = this.maxFailedAccessAttemptsBeforeLockout;
        data["defaultAccountLockoutSeconds"] = this.defaultAccountLockoutSeconds;
        return data; 
    }
}

export interface IUserLockOutSettingsEditDto {
    isEnabled: boolean | undefined;
    maxFailedAccessAttemptsBeforeLockout: number | undefined;
    defaultAccountLockoutSeconds: number | undefined;
}

export class TwoFactorLoginSettingsEditDto implements ITwoFactorLoginSettingsEditDto {
    isEnabledForApplication: boolean | undefined;
    isEnabled: boolean | undefined;
    isEmailProviderEnabled: boolean | undefined;
    isSmsProviderEnabled: boolean | undefined;
    isRememberBrowserEnabled: boolean | undefined;
    isGoogleAuthenticatorEnabled: boolean | undefined;

    constructor(data?: ITwoFactorLoginSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isEnabledForApplication = data["isEnabledForApplication"];
            this.isEnabled = data["isEnabled"];
            this.isEmailProviderEnabled = data["isEmailProviderEnabled"];
            this.isSmsProviderEnabled = data["isSmsProviderEnabled"];
            this.isRememberBrowserEnabled = data["isRememberBrowserEnabled"];
            this.isGoogleAuthenticatorEnabled = data["isGoogleAuthenticatorEnabled"];
        }
    }

    static fromJS(data: any): TwoFactorLoginSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TwoFactorLoginSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isEnabledForApplication"] = this.isEnabledForApplication;
        data["isEnabled"] = this.isEnabled;
        data["isEmailProviderEnabled"] = this.isEmailProviderEnabled;
        data["isSmsProviderEnabled"] = this.isSmsProviderEnabled;
        data["isRememberBrowserEnabled"] = this.isRememberBrowserEnabled;
        data["isGoogleAuthenticatorEnabled"] = this.isGoogleAuthenticatorEnabled;
        return data; 
    }
}

export interface ITwoFactorLoginSettingsEditDto {
    isEnabledForApplication: boolean | undefined;
    isEnabled: boolean | undefined;
    isEmailProviderEnabled: boolean | undefined;
    isSmsProviderEnabled: boolean | undefined;
    isRememberBrowserEnabled: boolean | undefined;
    isGoogleAuthenticatorEnabled: boolean | undefined;
}

export class SendTestEmailInput implements ISendTestEmailInput {
    emailAddress: string;

    constructor(data?: ISendTestEmailInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.emailAddress = data["emailAddress"];
        }
    }

    static fromJS(data: any): SendTestEmailInput {
        data = typeof data === 'object' ? data : {};
        let result = new SendTestEmailInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["emailAddress"] = this.emailAddress;
        return data; 
    }
}

export interface ISendTestEmailInput {
    emailAddress: string;
}

export class InstallDto implements IInstallDto {
    connectionString: string;
    adminPassword: string;
    webSiteUrl: string;
    serverUrl: string | undefined;
    defaultLanguage: string;
    smtpSettings: EmailSettingsEditDto | undefined;
    billInfo: HostBillingSettingsEditDto | undefined;

    constructor(data?: IInstallDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.connectionString = data["connectionString"];
            this.adminPassword = data["adminPassword"];
            this.webSiteUrl = data["webSiteUrl"];
            this.serverUrl = data["serverUrl"];
            this.defaultLanguage = data["defaultLanguage"];
            this.smtpSettings = data["smtpSettings"] ? EmailSettingsEditDto.fromJS(data["smtpSettings"]) : <any>undefined;
            this.billInfo = data["billInfo"] ? HostBillingSettingsEditDto.fromJS(data["billInfo"]) : <any>undefined;
        }
    }

    static fromJS(data: any): InstallDto {
        data = typeof data === 'object' ? data : {};
        let result = new InstallDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["connectionString"] = this.connectionString;
        data["adminPassword"] = this.adminPassword;
        data["webSiteUrl"] = this.webSiteUrl;
        data["serverUrl"] = this.serverUrl;
        data["defaultLanguage"] = this.defaultLanguage;
        data["smtpSettings"] = this.smtpSettings ? this.smtpSettings.toJSON() : <any>undefined;
        data["billInfo"] = this.billInfo ? this.billInfo.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IInstallDto {
    connectionString: string;
    adminPassword: string;
    webSiteUrl: string;
    serverUrl: string | undefined;
    defaultLanguage: string;
    smtpSettings: EmailSettingsEditDto | undefined;
    billInfo: HostBillingSettingsEditDto | undefined;
}

export class AppSettingsJsonDto implements IAppSettingsJsonDto {
    connectionString: string | undefined;
    webSiteUrl: string | undefined;
    serverSiteUrl: string | undefined;
    languages: NameValue[] | undefined;

    constructor(data?: IAppSettingsJsonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.connectionString = data["connectionString"];
            this.webSiteUrl = data["webSiteUrl"];
            this.serverSiteUrl = data["serverSiteUrl"];
            if (data["languages"] && data["languages"].constructor === Array) {
                this.languages = [];
                for (let item of data["languages"])
                    this.languages.push(NameValue.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AppSettingsJsonDto {
        data = typeof data === 'object' ? data : {};
        let result = new AppSettingsJsonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["connectionString"] = this.connectionString;
        data["webSiteUrl"] = this.webSiteUrl;
        data["serverSiteUrl"] = this.serverSiteUrl;
        if (this.languages && this.languages.constructor === Array) {
            data["languages"] = [];
            for (let item of this.languages)
                data["languages"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IAppSettingsJsonDto {
    connectionString: string | undefined;
    webSiteUrl: string | undefined;
    serverSiteUrl: string | undefined;
    languages: NameValue[] | undefined;
}

export class NameValue implements INameValue {
    name: string | undefined;
    value: string | undefined;

    constructor(data?: INameValue) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): NameValue {
        data = typeof data === 'object' ? data : {};
        let result = new NameValue();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["value"] = this.value;
        return data; 
    }
}

export interface INameValue {
    name: string | undefined;
    value: string | undefined;
}

export class CheckDatabaseOutput implements ICheckDatabaseOutput {
    isDatabaseExist: boolean | undefined;

    constructor(data?: ICheckDatabaseOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isDatabaseExist = data["isDatabaseExist"];
        }
    }

    static fromJS(data: any): CheckDatabaseOutput {
        data = typeof data === 'object' ? data : {};
        let result = new CheckDatabaseOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isDatabaseExist"] = this.isDatabaseExist;
        return data; 
    }
}

export interface ICheckDatabaseOutput {
    isDatabaseExist: boolean | undefined;
}

export class InvoiceDto implements IInvoiceDto {
    amount: number | undefined;
    editionDisplayName: string | undefined;
    invoiceNo: string | undefined;
    invoiceDate: moment.Moment | undefined;
    tenantLegalName: string | undefined;
    tenantAddress: string[] | undefined;
    tenantTaxNo: string | undefined;
    hostLegalName: string | undefined;
    hostAddress: string[] | undefined;

    constructor(data?: IInvoiceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.amount = data["amount"];
            this.editionDisplayName = data["editionDisplayName"];
            this.invoiceNo = data["invoiceNo"];
            this.invoiceDate = data["invoiceDate"] ? moment(data["invoiceDate"].toString()) : <any>undefined;
            this.tenantLegalName = data["tenantLegalName"];
            if (data["tenantAddress"] && data["tenantAddress"].constructor === Array) {
                this.tenantAddress = [];
                for (let item of data["tenantAddress"])
                    this.tenantAddress.push(item);
            }
            this.tenantTaxNo = data["tenantTaxNo"];
            this.hostLegalName = data["hostLegalName"];
            if (data["hostAddress"] && data["hostAddress"].constructor === Array) {
                this.hostAddress = [];
                for (let item of data["hostAddress"])
                    this.hostAddress.push(item);
            }
        }
    }

    static fromJS(data: any): InvoiceDto {
        data = typeof data === 'object' ? data : {};
        let result = new InvoiceDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["amount"] = this.amount;
        data["editionDisplayName"] = this.editionDisplayName;
        data["invoiceNo"] = this.invoiceNo;
        data["invoiceDate"] = this.invoiceDate ? this.invoiceDate.toISOString() : <any>undefined;
        data["tenantLegalName"] = this.tenantLegalName;
        if (this.tenantAddress && this.tenantAddress.constructor === Array) {
            data["tenantAddress"] = [];
            for (let item of this.tenantAddress)
                data["tenantAddress"].push(item);
        }
        data["tenantTaxNo"] = this.tenantTaxNo;
        data["hostLegalName"] = this.hostLegalName;
        if (this.hostAddress && this.hostAddress.constructor === Array) {
            data["hostAddress"] = [];
            for (let item of this.hostAddress)
                data["hostAddress"].push(item);
        }
        return data; 
    }
}

export interface IInvoiceDto {
    amount: number | undefined;
    editionDisplayName: string | undefined;
    invoiceNo: string | undefined;
    invoiceDate: moment.Moment | undefined;
    tenantLegalName: string | undefined;
    tenantAddress: string[] | undefined;
    tenantTaxNo: string | undefined;
    hostLegalName: string | undefined;
    hostAddress: string[] | undefined;
}

export class CreateInvoiceDto implements ICreateInvoiceDto {
    subscriptionPaymentId: number | undefined;

    constructor(data?: ICreateInvoiceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.subscriptionPaymentId = data["subscriptionPaymentId"];
        }
    }

    static fromJS(data: any): CreateInvoiceDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateInvoiceDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["subscriptionPaymentId"] = this.subscriptionPaymentId;
        return data; 
    }
}

export interface ICreateInvoiceDto {
    subscriptionPaymentId: number | undefined;
}

export class GetLanguagesOutput implements IGetLanguagesOutput {
    defaultLanguageName: string | undefined;
    items: ApplicationLanguageListDto[] | undefined;

    constructor(data?: IGetLanguagesOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.defaultLanguageName = data["defaultLanguageName"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(ApplicationLanguageListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetLanguagesOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetLanguagesOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["defaultLanguageName"] = this.defaultLanguageName;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetLanguagesOutput {
    defaultLanguageName: string | undefined;
    items: ApplicationLanguageListDto[] | undefined;
}

export class ApplicationLanguageListDto implements IApplicationLanguageListDto {
    tenantId: number | undefined;
    name: string | undefined;
    displayName: string | undefined;
    icon: string | undefined;
    isDisabled: boolean | undefined;
    isDeleted: boolean | undefined;
    deleterUserId: number | undefined;
    deletionTime: moment.Moment | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;

    constructor(data?: IApplicationLanguageListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.icon = data["icon"];
            this.isDisabled = data["isDisabled"];
            this.isDeleted = data["isDeleted"];
            this.deleterUserId = data["deleterUserId"];
            this.deletionTime = data["deletionTime"] ? moment(data["deletionTime"].toString()) : <any>undefined;
            this.lastModificationTime = data["lastModificationTime"] ? moment(data["lastModificationTime"].toString()) : <any>undefined;
            this.lastModifierUserId = data["lastModifierUserId"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.creatorUserId = data["creatorUserId"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): ApplicationLanguageListDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicationLanguageListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["icon"] = this.icon;
        data["isDisabled"] = this.isDisabled;
        data["isDeleted"] = this.isDeleted;
        data["deleterUserId"] = this.deleterUserId;
        data["deletionTime"] = this.deletionTime ? this.deletionTime.toISOString() : <any>undefined;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data; 
    }
}

export interface IApplicationLanguageListDto {
    tenantId: number | undefined;
    name: string | undefined;
    displayName: string | undefined;
    icon: string | undefined;
    isDisabled: boolean | undefined;
    isDeleted: boolean | undefined;
    deleterUserId: number | undefined;
    deletionTime: moment.Moment | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;
}

export class GetLanguageForEditOutput implements IGetLanguageForEditOutput {
    language: ApplicationLanguageEditDto | undefined;
    languageNames: ComboboxItemDto[] | undefined;
    flags: ComboboxItemDto[] | undefined;

    constructor(data?: IGetLanguageForEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.language = data["language"] ? ApplicationLanguageEditDto.fromJS(data["language"]) : <any>undefined;
            if (data["languageNames"] && data["languageNames"].constructor === Array) {
                this.languageNames = [];
                for (let item of data["languageNames"])
                    this.languageNames.push(ComboboxItemDto.fromJS(item));
            }
            if (data["flags"] && data["flags"].constructor === Array) {
                this.flags = [];
                for (let item of data["flags"])
                    this.flags.push(ComboboxItemDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetLanguageForEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetLanguageForEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["language"] = this.language ? this.language.toJSON() : <any>undefined;
        if (this.languageNames && this.languageNames.constructor === Array) {
            data["languageNames"] = [];
            for (let item of this.languageNames)
                data["languageNames"].push(item.toJSON());
        }
        if (this.flags && this.flags.constructor === Array) {
            data["flags"] = [];
            for (let item of this.flags)
                data["flags"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetLanguageForEditOutput {
    language: ApplicationLanguageEditDto | undefined;
    languageNames: ComboboxItemDto[] | undefined;
    flags: ComboboxItemDto[] | undefined;
}

export class ApplicationLanguageEditDto implements IApplicationLanguageEditDto {
    id: number | undefined;
    name: string;
    icon: string | undefined;
    isEnabled: boolean | undefined;

    constructor(data?: IApplicationLanguageEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.icon = data["icon"];
            this.isEnabled = data["isEnabled"];
        }
    }

    static fromJS(data: any): ApplicationLanguageEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicationLanguageEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["icon"] = this.icon;
        data["isEnabled"] = this.isEnabled;
        return data; 
    }
}

export interface IApplicationLanguageEditDto {
    id: number | undefined;
    name: string;
    icon: string | undefined;
    isEnabled: boolean | undefined;
}

export class ComboboxItemDto implements IComboboxItemDto {
    value: string | undefined;
    displayText: string | undefined;
    isSelected: boolean | undefined;

    constructor(data?: IComboboxItemDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.value = data["value"];
            this.displayText = data["displayText"];
            this.isSelected = data["isSelected"];
        }
    }

    static fromJS(data: any): ComboboxItemDto {
        data = typeof data === 'object' ? data : {};
        let result = new ComboboxItemDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["value"] = this.value;
        data["displayText"] = this.displayText;
        data["isSelected"] = this.isSelected;
        return data; 
    }
}

export interface IComboboxItemDto {
    value: string | undefined;
    displayText: string | undefined;
    isSelected: boolean | undefined;
}

export class CreateOrUpdateLanguageInput implements ICreateOrUpdateLanguageInput {
    language: ApplicationLanguageEditDto;

    constructor(data?: ICreateOrUpdateLanguageInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.language = new ApplicationLanguageEditDto();
        }
    }

    init(data?: any) {
        if (data) {
            this.language = data["language"] ? ApplicationLanguageEditDto.fromJS(data["language"]) : new ApplicationLanguageEditDto();
        }
    }

    static fromJS(data: any): CreateOrUpdateLanguageInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateOrUpdateLanguageInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["language"] = this.language ? this.language.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ICreateOrUpdateLanguageInput {
    language: ApplicationLanguageEditDto;
}

export class SetDefaultLanguageInput implements ISetDefaultLanguageInput {
    name: string;

    constructor(data?: ISetDefaultLanguageInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
        }
    }

    static fromJS(data: any): SetDefaultLanguageInput {
        data = typeof data === 'object' ? data : {};
        let result = new SetDefaultLanguageInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface ISetDefaultLanguageInput {
    name: string;
}

export class PagedResultDtoOfLanguageTextListDto implements IPagedResultDtoOfLanguageTextListDto {
    totalCount: number | undefined;
    items: LanguageTextListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfLanguageTextListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(LanguageTextListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfLanguageTextListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfLanguageTextListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfLanguageTextListDto {
    totalCount: number | undefined;
    items: LanguageTextListDto[] | undefined;
}

export class LanguageTextListDto implements ILanguageTextListDto {
    key: string | undefined;
    baseValue: string | undefined;
    targetValue: string | undefined;

    constructor(data?: ILanguageTextListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.key = data["key"];
            this.baseValue = data["baseValue"];
            this.targetValue = data["targetValue"];
        }
    }

    static fromJS(data: any): LanguageTextListDto {
        data = typeof data === 'object' ? data : {};
        let result = new LanguageTextListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["key"] = this.key;
        data["baseValue"] = this.baseValue;
        data["targetValue"] = this.targetValue;
        return data; 
    }
}

export interface ILanguageTextListDto {
    key: string | undefined;
    baseValue: string | undefined;
    targetValue: string | undefined;
}

export class UpdateLanguageTextInput implements IUpdateLanguageTextInput {
    languageName: string;
    sourceName: string;
    key: string;
    value: string;

    constructor(data?: IUpdateLanguageTextInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.languageName = data["languageName"];
            this.sourceName = data["sourceName"];
            this.key = data["key"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): UpdateLanguageTextInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateLanguageTextInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["languageName"] = this.languageName;
        data["sourceName"] = this.sourceName;
        data["key"] = this.key;
        data["value"] = this.value;
        return data; 
    }
}

export interface IUpdateLanguageTextInput {
    languageName: string;
    sourceName: string;
    key: string;
    value: string;
}

export class GetNotificationsOutput implements IGetNotificationsOutput {
    unreadCount: number | undefined;
    totalCount: number | undefined;
    items: UserNotification[] | undefined;

    constructor(data?: IGetNotificationsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.unreadCount = data["unreadCount"];
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(UserNotification.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetNotificationsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetNotificationsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["unreadCount"] = this.unreadCount;
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetNotificationsOutput {
    unreadCount: number | undefined;
    totalCount: number | undefined;
    items: UserNotification[] | undefined;
}

export class UserNotification implements IUserNotification {
    tenantId: number | undefined;
    userId: number | undefined;
    state: UserNotificationState | undefined;
    notification: TenantNotification | undefined;
    id: string | undefined;

    constructor(data?: IUserNotification) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.userId = data["userId"];
            this.state = data["state"];
            this.notification = data["notification"] ? TenantNotification.fromJS(data["notification"]) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): UserNotification {
        data = typeof data === 'object' ? data : {};
        let result = new UserNotification();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["userId"] = this.userId;
        data["state"] = this.state;
        data["notification"] = this.notification ? this.notification.toJSON() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface IUserNotification {
    tenantId: number | undefined;
    userId: number | undefined;
    state: UserNotificationState | undefined;
    notification: TenantNotification | undefined;
    id: string | undefined;
}

export class TenantNotification implements ITenantNotification {
    tenantId: number | undefined;
    notificationName: string | undefined;
    data: NotificationData | undefined;
    entityType: string | undefined;
    entityTypeName: string | undefined;
    entityId: any | undefined;
    severity: TenantNotificationSeverity | undefined;
    creationTime: moment.Moment | undefined;
    id: string | undefined;

    constructor(data?: ITenantNotification) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.notificationName = data["notificationName"];
            this.data = data["data"] ? NotificationData.fromJS(data["data"]) : <any>undefined;
            this.entityType = data["entityType"];
            this.entityTypeName = data["entityTypeName"];
            if (data["entityId"]) {
                this.entityId = {};
                for (let key in data["entityId"]) {
                    if (data["entityId"].hasOwnProperty(key))
                        this.entityId[key] = data["entityId"][key];
                }
            }
            this.severity = data["severity"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): TenantNotification {
        data = typeof data === 'object' ? data : {};
        let result = new TenantNotification();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["notificationName"] = this.notificationName;
        data["data"] = this.data ? this.data.toJSON() : <any>undefined;
        data["entityType"] = this.entityType;
        data["entityTypeName"] = this.entityTypeName;
        if (this.entityId) {
            data["entityId"] = {};
            for (let key in this.entityId) {
                if (this.entityId.hasOwnProperty(key))
                    data["entityId"][key] = this.entityId[key];
            }
        }
        data["severity"] = this.severity;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface ITenantNotification {
    tenantId: number | undefined;
    notificationName: string | undefined;
    data: NotificationData | undefined;
    entityType: string | undefined;
    entityTypeName: string | undefined;
    entityId: any | undefined;
    severity: TenantNotificationSeverity | undefined;
    creationTime: moment.Moment | undefined;
    id: string | undefined;
}

export class NotificationData implements INotificationData {
    readonly type: string | undefined;
    properties: { [key: string] : any; } | undefined;

    constructor(data?: INotificationData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            (<any>this).type = data["type"];
            if (data["properties"]) {
                this.properties = {};
                for (let key in data["properties"]) {
                    if (data["properties"].hasOwnProperty(key))
                        this.properties[key] = data["properties"][key];
                }
            }
        }
    }

    static fromJS(data: any): NotificationData {
        data = typeof data === 'object' ? data : {};
        let result = new NotificationData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        if (this.properties) {
            data["properties"] = {};
            for (let key in this.properties) {
                if (this.properties.hasOwnProperty(key))
                    data["properties"][key] = this.properties[key];
            }
        }
        return data; 
    }
}

export interface INotificationData {
    type: string | undefined;
    properties: { [key: string] : any; } | undefined;
}

export class EntityDtoOfGuid implements IEntityDtoOfGuid {
    id: string | undefined;

    constructor(data?: IEntityDtoOfGuid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EntityDtoOfGuid {
        data = typeof data === 'object' ? data : {};
        let result = new EntityDtoOfGuid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data; 
    }
}

export interface IEntityDtoOfGuid {
    id: string | undefined;
}

export class GetNotificationSettingsOutput implements IGetNotificationSettingsOutput {
    receiveNotifications: boolean | undefined;
    notifications: NotificationSubscriptionWithDisplayNameDto[] | undefined;

    constructor(data?: IGetNotificationSettingsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.receiveNotifications = data["receiveNotifications"];
            if (data["notifications"] && data["notifications"].constructor === Array) {
                this.notifications = [];
                for (let item of data["notifications"])
                    this.notifications.push(NotificationSubscriptionWithDisplayNameDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetNotificationSettingsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetNotificationSettingsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["receiveNotifications"] = this.receiveNotifications;
        if (this.notifications && this.notifications.constructor === Array) {
            data["notifications"] = [];
            for (let item of this.notifications)
                data["notifications"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetNotificationSettingsOutput {
    receiveNotifications: boolean | undefined;
    notifications: NotificationSubscriptionWithDisplayNameDto[] | undefined;
}

export class NotificationSubscriptionWithDisplayNameDto implements INotificationSubscriptionWithDisplayNameDto {
    displayName: string | undefined;
    description: string | undefined;
    name: string;
    isSubscribed: boolean | undefined;

    constructor(data?: INotificationSubscriptionWithDisplayNameDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.name = data["name"];
            this.isSubscribed = data["isSubscribed"];
        }
    }

    static fromJS(data: any): NotificationSubscriptionWithDisplayNameDto {
        data = typeof data === 'object' ? data : {};
        let result = new NotificationSubscriptionWithDisplayNameDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["name"] = this.name;
        data["isSubscribed"] = this.isSubscribed;
        return data; 
    }
}

export interface INotificationSubscriptionWithDisplayNameDto {
    displayName: string | undefined;
    description: string | undefined;
    name: string;
    isSubscribed: boolean | undefined;
}

export class UpdateNotificationSettingsInput implements IUpdateNotificationSettingsInput {
    receiveNotifications: boolean | undefined;
    notifications: NotificationSubscriptionDto[] | undefined;

    constructor(data?: IUpdateNotificationSettingsInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.receiveNotifications = data["receiveNotifications"];
            if (data["notifications"] && data["notifications"].constructor === Array) {
                this.notifications = [];
                for (let item of data["notifications"])
                    this.notifications.push(NotificationSubscriptionDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): UpdateNotificationSettingsInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateNotificationSettingsInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["receiveNotifications"] = this.receiveNotifications;
        if (this.notifications && this.notifications.constructor === Array) {
            data["notifications"] = [];
            for (let item of this.notifications)
                data["notifications"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IUpdateNotificationSettingsInput {
    receiveNotifications: boolean | undefined;
    notifications: NotificationSubscriptionDto[] | undefined;
}

export class NotificationSubscriptionDto implements INotificationSubscriptionDto {
    name: string;
    isSubscribed: boolean | undefined;

    constructor(data?: INotificationSubscriptionDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.isSubscribed = data["isSubscribed"];
        }
    }

    static fromJS(data: any): NotificationSubscriptionDto {
        data = typeof data === 'object' ? data : {};
        let result = new NotificationSubscriptionDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["isSubscribed"] = this.isSubscribed;
        return data; 
    }
}

export interface INotificationSubscriptionDto {
    name: string;
    isSubscribed: boolean | undefined;
}

export class ListResultDtoOfOrganizationUnitDto implements IListResultDtoOfOrganizationUnitDto {
    items: OrganizationUnitDto[] | undefined;

    constructor(data?: IListResultDtoOfOrganizationUnitDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(OrganizationUnitDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfOrganizationUnitDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfOrganizationUnitDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfOrganizationUnitDto {
    items: OrganizationUnitDto[] | undefined;
}

export class OrganizationUnitDto implements IOrganizationUnitDto {
    parentId: number | undefined;
    code: string | undefined;
    displayName: string | undefined;
    memberCount: number | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;

    constructor(data?: IOrganizationUnitDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.parentId = data["parentId"];
            this.code = data["code"];
            this.displayName = data["displayName"];
            this.memberCount = data["memberCount"];
            this.lastModificationTime = data["lastModificationTime"] ? moment(data["lastModificationTime"].toString()) : <any>undefined;
            this.lastModifierUserId = data["lastModifierUserId"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.creatorUserId = data["creatorUserId"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): OrganizationUnitDto {
        data = typeof data === 'object' ? data : {};
        let result = new OrganizationUnitDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["parentId"] = this.parentId;
        data["code"] = this.code;
        data["displayName"] = this.displayName;
        data["memberCount"] = this.memberCount;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data; 
    }
}

export interface IOrganizationUnitDto {
    parentId: number | undefined;
    code: string | undefined;
    displayName: string | undefined;
    memberCount: number | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;
}

export class PagedResultDtoOfOrganizationUnitUserListDto implements IPagedResultDtoOfOrganizationUnitUserListDto {
    totalCount: number | undefined;
    items: OrganizationUnitUserListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfOrganizationUnitUserListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(OrganizationUnitUserListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfOrganizationUnitUserListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfOrganizationUnitUserListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfOrganizationUnitUserListDto {
    totalCount: number | undefined;
    items: OrganizationUnitUserListDto[] | undefined;
}

export class OrganizationUnitUserListDto implements IOrganizationUnitUserListDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    profilePictureId: string | undefined;
    addedTime: moment.Moment | undefined;
    id: number | undefined;

    constructor(data?: IOrganizationUnitUserListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.profilePictureId = data["profilePictureId"];
            this.addedTime = data["addedTime"] ? moment(data["addedTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): OrganizationUnitUserListDto {
        data = typeof data === 'object' ? data : {};
        let result = new OrganizationUnitUserListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["profilePictureId"] = this.profilePictureId;
        data["addedTime"] = this.addedTime ? this.addedTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface IOrganizationUnitUserListDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    profilePictureId: string | undefined;
    addedTime: moment.Moment | undefined;
    id: number | undefined;
}

export class CreateOrganizationUnitInput implements ICreateOrganizationUnitInput {
    parentId: number | undefined;
    displayName: string;

    constructor(data?: ICreateOrganizationUnitInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.parentId = data["parentId"];
            this.displayName = data["displayName"];
        }
    }

    static fromJS(data: any): CreateOrganizationUnitInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateOrganizationUnitInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["parentId"] = this.parentId;
        data["displayName"] = this.displayName;
        return data; 
    }
}

export interface ICreateOrganizationUnitInput {
    parentId: number | undefined;
    displayName: string;
}

export class UpdateOrganizationUnitInput implements IUpdateOrganizationUnitInput {
    id: number | undefined;
    displayName: string;

    constructor(data?: IUpdateOrganizationUnitInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
        }
    }

    static fromJS(data: any): UpdateOrganizationUnitInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateOrganizationUnitInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        return data; 
    }
}

export interface IUpdateOrganizationUnitInput {
    id: number | undefined;
    displayName: string;
}

export class MoveOrganizationUnitInput implements IMoveOrganizationUnitInput {
    id: number | undefined;
    newParentId: number | undefined;

    constructor(data?: IMoveOrganizationUnitInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.newParentId = data["newParentId"];
        }
    }

    static fromJS(data: any): MoveOrganizationUnitInput {
        data = typeof data === 'object' ? data : {};
        let result = new MoveOrganizationUnitInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["newParentId"] = this.newParentId;
        return data; 
    }
}

export interface IMoveOrganizationUnitInput {
    id: number | undefined;
    newParentId: number | undefined;
}

export class UsersToOrganizationUnitInput implements IUsersToOrganizationUnitInput {
    userIds: number[] | undefined;
    organizationUnitId: number | undefined;

    constructor(data?: IUsersToOrganizationUnitInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["userIds"] && data["userIds"].constructor === Array) {
                this.userIds = [];
                for (let item of data["userIds"])
                    this.userIds.push(item);
            }
            this.organizationUnitId = data["organizationUnitId"];
        }
    }

    static fromJS(data: any): UsersToOrganizationUnitInput {
        data = typeof data === 'object' ? data : {};
        let result = new UsersToOrganizationUnitInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.userIds && this.userIds.constructor === Array) {
            data["userIds"] = [];
            for (let item of this.userIds)
                data["userIds"].push(item);
        }
        data["organizationUnitId"] = this.organizationUnitId;
        return data; 
    }
}

export interface IUsersToOrganizationUnitInput {
    userIds: number[] | undefined;
    organizationUnitId: number | undefined;
}

export class FindOrganizationUnitUsersInput implements IFindOrganizationUnitUsersInput {
    organizationUnitId: number | undefined;
    maxResultCount: number | undefined;
    skipCount: number | undefined;
    filter: string | undefined;

    constructor(data?: IFindOrganizationUnitUsersInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.organizationUnitId = data["organizationUnitId"];
            this.maxResultCount = data["maxResultCount"];
            this.skipCount = data["skipCount"];
            this.filter = data["filter"];
        }
    }

    static fromJS(data: any): FindOrganizationUnitUsersInput {
        data = typeof data === 'object' ? data : {};
        let result = new FindOrganizationUnitUsersInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["organizationUnitId"] = this.organizationUnitId;
        data["maxResultCount"] = this.maxResultCount;
        data["skipCount"] = this.skipCount;
        data["filter"] = this.filter;
        return data; 
    }
}

export interface IFindOrganizationUnitUsersInput {
    organizationUnitId: number | undefined;
    maxResultCount: number | undefined;
    skipCount: number | undefined;
    filter: string | undefined;
}

export class PaymentInfoDto implements IPaymentInfoDto {
    edition: EditionSelectDto | undefined;
    additionalPrice: number | undefined;

    constructor(data?: IPaymentInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.edition = data["edition"] ? EditionSelectDto.fromJS(data["edition"]) : <any>undefined;
            this.additionalPrice = data["additionalPrice"];
        }
    }

    static fromJS(data: any): PaymentInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new PaymentInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["edition"] = this.edition ? this.edition.toJSON() : <any>undefined;
        data["additionalPrice"] = this.additionalPrice;
        return data; 
    }
}

export interface IPaymentInfoDto {
    edition: EditionSelectDto | undefined;
    additionalPrice: number | undefined;
}

export class EditionSelectDto implements IEditionSelectDto {
    id: number | undefined;
    name: string | undefined;
    displayName: string | undefined;
    expiringEditionId: number | undefined;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    trialDayCount: number | undefined;
    waitingDayAfterExpire: number | undefined;
    isFree: boolean | undefined;
    additionalData: AdditionalData | undefined;

    constructor(data?: IEditionSelectDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.expiringEditionId = data["expiringEditionId"];
            this.monthlyPrice = data["monthlyPrice"];
            this.annualPrice = data["annualPrice"];
            this.trialDayCount = data["trialDayCount"];
            this.waitingDayAfterExpire = data["waitingDayAfterExpire"];
            this.isFree = data["isFree"];
            this.additionalData = data["additionalData"] ? AdditionalData.fromJS(data["additionalData"]) : <any>undefined;
        }
    }

    static fromJS(data: any): EditionSelectDto {
        data = typeof data === 'object' ? data : {};
        let result = new EditionSelectDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["expiringEditionId"] = this.expiringEditionId;
        data["monthlyPrice"] = this.monthlyPrice;
        data["annualPrice"] = this.annualPrice;
        data["trialDayCount"] = this.trialDayCount;
        data["waitingDayAfterExpire"] = this.waitingDayAfterExpire;
        data["isFree"] = this.isFree;
        data["additionalData"] = this.additionalData ? this.additionalData.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IEditionSelectDto {
    id: number | undefined;
    name: string | undefined;
    displayName: string | undefined;
    expiringEditionId: number | undefined;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    trialDayCount: number | undefined;
    waitingDayAfterExpire: number | undefined;
    isFree: boolean | undefined;
    additionalData: AdditionalData | undefined;
}

export class CreatePaymentDto implements ICreatePaymentDto {
    editionId: number | undefined;
    editionPaymentType: CreatePaymentDtoEditionPaymentType | undefined;
    paymentPeriodType: CreatePaymentDtoPaymentPeriodType | undefined;
    subscriptionPaymentGatewayType: CreatePaymentDtoSubscriptionPaymentGatewayType | undefined;

    constructor(data?: ICreatePaymentDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.editionId = data["editionId"];
            this.editionPaymentType = data["editionPaymentType"];
            this.paymentPeriodType = data["paymentPeriodType"];
            this.subscriptionPaymentGatewayType = data["subscriptionPaymentGatewayType"];
        }
    }

    static fromJS(data: any): CreatePaymentDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePaymentDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["editionId"] = this.editionId;
        data["editionPaymentType"] = this.editionPaymentType;
        data["paymentPeriodType"] = this.paymentPeriodType;
        data["subscriptionPaymentGatewayType"] = this.subscriptionPaymentGatewayType;
        return data; 
    }
}

export interface ICreatePaymentDto {
    editionId: number | undefined;
    editionPaymentType: CreatePaymentDtoEditionPaymentType | undefined;
    paymentPeriodType: CreatePaymentDtoPaymentPeriodType | undefined;
    subscriptionPaymentGatewayType: CreatePaymentDtoSubscriptionPaymentGatewayType | undefined;
}

export class ExecutePaymentDto implements IExecutePaymentDto {
    gateway: ExecutePaymentDtoGateway | undefined;
    editionPaymentType: ExecutePaymentDtoEditionPaymentType | undefined;
    editionId: number | undefined;
    paymentPeriodType: ExecutePaymentDtoPaymentPeriodType | undefined;
    additionalData: { [key: string] : string; } | undefined;

    constructor(data?: IExecutePaymentDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.gateway = data["gateway"];
            this.editionPaymentType = data["editionPaymentType"];
            this.editionId = data["editionId"];
            this.paymentPeriodType = data["paymentPeriodType"];
            if (data["additionalData"]) {
                this.additionalData = {};
                for (let key in data["additionalData"]) {
                    if (data["additionalData"].hasOwnProperty(key))
                        this.additionalData[key] = data["additionalData"][key];
                }
            }
        }
    }

    static fromJS(data: any): ExecutePaymentDto {
        data = typeof data === 'object' ? data : {};
        let result = new ExecutePaymentDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["gateway"] = this.gateway;
        data["editionPaymentType"] = this.editionPaymentType;
        data["editionId"] = this.editionId;
        data["paymentPeriodType"] = this.paymentPeriodType;
        if (this.additionalData) {
            data["additionalData"] = {};
            for (let key in this.additionalData) {
                if (this.additionalData.hasOwnProperty(key))
                    data["additionalData"][key] = this.additionalData[key];
            }
        }
        return data; 
    }
}

export interface IExecutePaymentDto {
    gateway: ExecutePaymentDtoGateway | undefined;
    editionPaymentType: ExecutePaymentDtoEditionPaymentType | undefined;
    editionId: number | undefined;
    paymentPeriodType: ExecutePaymentDtoPaymentPeriodType | undefined;
    additionalData: { [key: string] : string; } | undefined;
}

export class PagedResultDtoOfSubscriptionPaymentListDto implements IPagedResultDtoOfSubscriptionPaymentListDto {
    totalCount: number | undefined;
    items: SubscriptionPaymentListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfSubscriptionPaymentListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(SubscriptionPaymentListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfSubscriptionPaymentListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfSubscriptionPaymentListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfSubscriptionPaymentListDto {
    totalCount: number | undefined;
    items: SubscriptionPaymentListDto[] | undefined;
}

export class SubscriptionPaymentListDto implements ISubscriptionPaymentListDto {
    gateway: string | undefined;
    amount: number | undefined;
    editionId: number | undefined;
    dayCount: number | undefined;
    paymentPeriodType: string | undefined;
    paymentId: string | undefined;
    payerId: string | undefined;
    status: string | undefined;
    editionDisplayName: string | undefined;
    tenantId: number | undefined;
    invoiceNo: string | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;

    constructor(data?: ISubscriptionPaymentListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.gateway = data["gateway"];
            this.amount = data["amount"];
            this.editionId = data["editionId"];
            this.dayCount = data["dayCount"];
            this.paymentPeriodType = data["paymentPeriodType"];
            this.paymentId = data["paymentId"];
            this.payerId = data["payerId"];
            this.status = data["status"];
            this.editionDisplayName = data["editionDisplayName"];
            this.tenantId = data["tenantId"];
            this.invoiceNo = data["invoiceNo"];
            this.lastModificationTime = data["lastModificationTime"] ? moment(data["lastModificationTime"].toString()) : <any>undefined;
            this.lastModifierUserId = data["lastModifierUserId"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.creatorUserId = data["creatorUserId"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): SubscriptionPaymentListDto {
        data = typeof data === 'object' ? data : {};
        let result = new SubscriptionPaymentListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["gateway"] = this.gateway;
        data["amount"] = this.amount;
        data["editionId"] = this.editionId;
        data["dayCount"] = this.dayCount;
        data["paymentPeriodType"] = this.paymentPeriodType;
        data["paymentId"] = this.paymentId;
        data["payerId"] = this.payerId;
        data["status"] = this.status;
        data["editionDisplayName"] = this.editionDisplayName;
        data["tenantId"] = this.tenantId;
        data["invoiceNo"] = this.invoiceNo;
        data["lastModificationTime"] = this.lastModificationTime ? this.lastModificationTime.toISOString() : <any>undefined;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["id"] = this.id;
        return data; 
    }
}

export interface ISubscriptionPaymentListDto {
    gateway: string | undefined;
    amount: number | undefined;
    editionId: number | undefined;
    dayCount: number | undefined;
    paymentPeriodType: string | undefined;
    paymentId: string | undefined;
    payerId: string | undefined;
    status: string | undefined;
    editionDisplayName: string | undefined;
    tenantId: number | undefined;
    invoiceNo: string | undefined;
    lastModificationTime: moment.Moment | undefined;
    lastModifierUserId: number | undefined;
    creationTime: moment.Moment | undefined;
    creatorUserId: number | undefined;
    id: number | undefined;
}

export class ListResultDtoOfFlatPermissionWithLevelDto implements IListResultDtoOfFlatPermissionWithLevelDto {
    items: FlatPermissionWithLevelDto[] | undefined;

    constructor(data?: IListResultDtoOfFlatPermissionWithLevelDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(FlatPermissionWithLevelDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfFlatPermissionWithLevelDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfFlatPermissionWithLevelDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfFlatPermissionWithLevelDto {
    items: FlatPermissionWithLevelDto[] | undefined;
}

export class FlatPermissionWithLevelDto implements IFlatPermissionWithLevelDto {
    level: number | undefined;
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    isGrantedByDefault: boolean | undefined;

    constructor(data?: IFlatPermissionWithLevelDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.level = data["level"];
            this.parentName = data["parentName"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.isGrantedByDefault = data["isGrantedByDefault"];
        }
    }

    static fromJS(data: any): FlatPermissionWithLevelDto {
        data = typeof data === 'object' ? data : {};
        let result = new FlatPermissionWithLevelDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["level"] = this.level;
        data["parentName"] = this.parentName;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["isGrantedByDefault"] = this.isGrantedByDefault;
        return data; 
    }
}

export interface IFlatPermissionWithLevelDto {
    level: number | undefined;
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    isGrantedByDefault: boolean | undefined;
}

export class CurrentUserProfileEditDto implements ICurrentUserProfileEditDto {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string | undefined;
    isPhoneNumberConfirmed: boolean | undefined;
    timezone: string | undefined;
    qrCodeSetupImageUrl: string | undefined;
    isGoogleAuthenticatorEnabled: boolean | undefined;

    constructor(data?: ICurrentUserProfileEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.phoneNumber = data["phoneNumber"];
            this.isPhoneNumberConfirmed = data["isPhoneNumberConfirmed"];
            this.timezone = data["timezone"];
            this.qrCodeSetupImageUrl = data["qrCodeSetupImageUrl"];
            this.isGoogleAuthenticatorEnabled = data["isGoogleAuthenticatorEnabled"];
        }
    }

    static fromJS(data: any): CurrentUserProfileEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new CurrentUserProfileEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["phoneNumber"] = this.phoneNumber;
        data["isPhoneNumberConfirmed"] = this.isPhoneNumberConfirmed;
        data["timezone"] = this.timezone;
        data["qrCodeSetupImageUrl"] = this.qrCodeSetupImageUrl;
        data["isGoogleAuthenticatorEnabled"] = this.isGoogleAuthenticatorEnabled;
        return data; 
    }
}

export interface ICurrentUserProfileEditDto {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string | undefined;
    isPhoneNumberConfirmed: boolean | undefined;
    timezone: string | undefined;
    qrCodeSetupImageUrl: string | undefined;
    isGoogleAuthenticatorEnabled: boolean | undefined;
}

export class UpdateGoogleAuthenticatorKeyOutput implements IUpdateGoogleAuthenticatorKeyOutput {
    qrCodeSetupImageUrl: string | undefined;

    constructor(data?: IUpdateGoogleAuthenticatorKeyOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.qrCodeSetupImageUrl = data["qrCodeSetupImageUrl"];
        }
    }

    static fromJS(data: any): UpdateGoogleAuthenticatorKeyOutput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateGoogleAuthenticatorKeyOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["qrCodeSetupImageUrl"] = this.qrCodeSetupImageUrl;
        return data; 
    }
}

export interface IUpdateGoogleAuthenticatorKeyOutput {
    qrCodeSetupImageUrl: string | undefined;
}

export class VerifySmsCodeInputDto implements IVerifySmsCodeInputDto {
    code: string | undefined;

    constructor(data?: IVerifySmsCodeInputDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.code = data["code"];
        }
    }

    static fromJS(data: any): VerifySmsCodeInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new VerifySmsCodeInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        return data; 
    }
}

export interface IVerifySmsCodeInputDto {
    code: string | undefined;
}

export class ChangePasswordInput implements IChangePasswordInput {
    currentPassword: string;
    newPassword: string;

    constructor(data?: IChangePasswordInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.currentPassword = data["currentPassword"];
            this.newPassword = data["newPassword"];
        }
    }

    static fromJS(data: any): ChangePasswordInput {
        data = typeof data === 'object' ? data : {};
        let result = new ChangePasswordInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["currentPassword"] = this.currentPassword;
        data["newPassword"] = this.newPassword;
        return data; 
    }
}

export interface IChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}

export class UpdateProfilePictureInput implements IUpdateProfilePictureInput {
    fileName: string;
    x: number | undefined;
    y: number | undefined;
    width: number | undefined;
    height: number | undefined;

    constructor(data?: IUpdateProfilePictureInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.fileName = data["fileName"];
            this.x = data["x"];
            this.y = data["y"];
            this.width = data["width"];
            this.height = data["height"];
        }
    }

    static fromJS(data: any): UpdateProfilePictureInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateProfilePictureInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fileName"] = this.fileName;
        data["x"] = this.x;
        data["y"] = this.y;
        data["width"] = this.width;
        data["height"] = this.height;
        return data; 
    }
}

export interface IUpdateProfilePictureInput {
    fileName: string;
    x: number | undefined;
    y: number | undefined;
    width: number | undefined;
    height: number | undefined;
}

export class GetPasswordComplexitySettingOutput implements IGetPasswordComplexitySettingOutput {
    setting: PasswordComplexitySetting | undefined;

    constructor(data?: IGetPasswordComplexitySettingOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.setting = data["setting"] ? PasswordComplexitySetting.fromJS(data["setting"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GetPasswordComplexitySettingOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetPasswordComplexitySettingOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["setting"] = this.setting ? this.setting.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IGetPasswordComplexitySettingOutput {
    setting: PasswordComplexitySetting | undefined;
}

export class GetProfilePictureOutput implements IGetProfilePictureOutput {
    profilePicture: string | undefined;

    constructor(data?: IGetProfilePictureOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.profilePicture = data["profilePicture"];
        }
    }

    static fromJS(data: any): GetProfilePictureOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetProfilePictureOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["profilePicture"] = this.profilePicture;
        return data; 
    }
}

export interface IGetProfilePictureOutput {
    profilePicture: string | undefined;
}

export class ChangeUserLanguageDto implements IChangeUserLanguageDto {
    languageName: string;

    constructor(data?: IChangeUserLanguageDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.languageName = data["languageName"];
        }
    }

    static fromJS(data: any): ChangeUserLanguageDto {
        data = typeof data === 'object' ? data : {};
        let result = new ChangeUserLanguageDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["languageName"] = this.languageName;
        return data; 
    }
}

export interface IChangeUserLanguageDto {
    languageName: string;
}

export class ListResultDtoOfRoleListDto implements IListResultDtoOfRoleListDto {
    items: RoleListDto[] | undefined;

    constructor(data?: IListResultDtoOfRoleListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(RoleListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfRoleListDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfRoleListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfRoleListDto {
    items: RoleListDto[] | undefined;
}

export class RoleListDto implements IRoleListDto {
    name: string | undefined;
    displayName: string | undefined;
    isStatic: boolean | undefined;
    isDefault: boolean | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;

    constructor(data?: IRoleListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.isStatic = data["isStatic"];
            this.isDefault = data["isDefault"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): RoleListDto {
        data = typeof data === 'object' ? data : {};
        let result = new RoleListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["isStatic"] = this.isStatic;
        data["isDefault"] = this.isDefault;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface IRoleListDto {
    name: string | undefined;
    displayName: string | undefined;
    isStatic: boolean | undefined;
    isDefault: boolean | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;
}

export class GetRoleForEditOutput implements IGetRoleForEditOutput {
    role: RoleEditDto | undefined;
    permissions: FlatPermissionDto[] | undefined;
    grantedPermissionNames: string[] | undefined;

    constructor(data?: IGetRoleForEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.role = data["role"] ? RoleEditDto.fromJS(data["role"]) : <any>undefined;
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (let item of data["permissions"])
                    this.permissions.push(FlatPermissionDto.fromJS(item));
            }
            if (data["grantedPermissionNames"] && data["grantedPermissionNames"].constructor === Array) {
                this.grantedPermissionNames = [];
                for (let item of data["grantedPermissionNames"])
                    this.grantedPermissionNames.push(item);
            }
        }
    }

    static fromJS(data: any): GetRoleForEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetRoleForEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["role"] = this.role ? this.role.toJSON() : <any>undefined;
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (let item of this.permissions)
                data["permissions"].push(item.toJSON());
        }
        if (this.grantedPermissionNames && this.grantedPermissionNames.constructor === Array) {
            data["grantedPermissionNames"] = [];
            for (let item of this.grantedPermissionNames)
                data["grantedPermissionNames"].push(item);
        }
        return data; 
    }
}

export interface IGetRoleForEditOutput {
    role: RoleEditDto | undefined;
    permissions: FlatPermissionDto[] | undefined;
    grantedPermissionNames: string[] | undefined;
}

export class RoleEditDto implements IRoleEditDto {
    id: number | undefined;
    displayName: string;
    isDefault: boolean | undefined;

    constructor(data?: IRoleEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
            this.isDefault = data["isDefault"];
        }
    }

    static fromJS(data: any): RoleEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new RoleEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["isDefault"] = this.isDefault;
        return data; 
    }
}

export interface IRoleEditDto {
    id: number | undefined;
    displayName: string;
    isDefault: boolean | undefined;
}

export class FlatPermissionDto implements IFlatPermissionDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    isGrantedByDefault: boolean | undefined;

    constructor(data?: IFlatPermissionDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.parentName = data["parentName"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.isGrantedByDefault = data["isGrantedByDefault"];
        }
    }

    static fromJS(data: any): FlatPermissionDto {
        data = typeof data === 'object' ? data : {};
        let result = new FlatPermissionDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["parentName"] = this.parentName;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["isGrantedByDefault"] = this.isGrantedByDefault;
        return data; 
    }
}

export interface IFlatPermissionDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    isGrantedByDefault: boolean | undefined;
}

export class CreateOrUpdateRoleInput implements ICreateOrUpdateRoleInput {
    role: RoleEditDto;
    grantedPermissionNames: string[];

    constructor(data?: ICreateOrUpdateRoleInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.role = new RoleEditDto();
            this.grantedPermissionNames = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.role = data["role"] ? RoleEditDto.fromJS(data["role"]) : new RoleEditDto();
            if (data["grantedPermissionNames"] && data["grantedPermissionNames"].constructor === Array) {
                this.grantedPermissionNames = [];
                for (let item of data["grantedPermissionNames"])
                    this.grantedPermissionNames.push(item);
            }
        }
    }

    static fromJS(data: any): CreateOrUpdateRoleInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateOrUpdateRoleInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["role"] = this.role ? this.role.toJSON() : <any>undefined;
        if (this.grantedPermissionNames && this.grantedPermissionNames.constructor === Array) {
            data["grantedPermissionNames"] = [];
            for (let item of this.grantedPermissionNames)
                data["grantedPermissionNames"].push(item);
        }
        return data; 
    }
}

export interface ICreateOrUpdateRoleInput {
    role: RoleEditDto;
    grantedPermissionNames: string[];
}

export class GetCurrentLoginInformationsOutput implements IGetCurrentLoginInformationsOutput {
    user: UserLoginInfoDto | undefined;
    tenant: TenantLoginInfoDto | undefined;
    application: ApplicationInfoDto | undefined;

    constructor(data?: IGetCurrentLoginInformationsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? UserLoginInfoDto.fromJS(data["user"]) : <any>undefined;
            this.tenant = data["tenant"] ? TenantLoginInfoDto.fromJS(data["tenant"]) : <any>undefined;
            this.application = data["application"] ? ApplicationInfoDto.fromJS(data["application"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GetCurrentLoginInformationsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetCurrentLoginInformationsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        data["tenant"] = this.tenant ? this.tenant.toJSON() : <any>undefined;
        data["application"] = this.application ? this.application.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IGetCurrentLoginInformationsOutput {
    user: UserLoginInfoDto | undefined;
    tenant: TenantLoginInfoDto | undefined;
    application: ApplicationInfoDto | undefined;
}

export class UserLoginInfoDto implements IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    profilePictureId: string | undefined;
    id: number | undefined;

    constructor(data?: IUserLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.profilePictureId = data["profilePictureId"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): UserLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["profilePictureId"] = this.profilePictureId;
        data["id"] = this.id;
        return data; 
    }
}

export interface IUserLoginInfoDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    profilePictureId: string | undefined;
    id: number | undefined;
}

export class TenantLoginInfoDto implements ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    logoId: string | undefined;
    logoFileType: string | undefined;
    customCssId: string | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;
    edition: EditionInfoDto | undefined;
    creationTime: moment.Moment | undefined;
    paymentPeriodType: TenantLoginInfoDtoPaymentPeriodType | undefined;
    subscriptionDateString: string | undefined;
    creationTimeString: string | undefined;
    id: number | undefined;

    constructor(data?: ITenantLoginInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.logoId = data["logoId"];
            this.logoFileType = data["logoFileType"];
            this.customCssId = data["customCssId"];
            this.subscriptionEndDateUtc = data["subscriptionEndDateUtc"] ? moment(data["subscriptionEndDateUtc"].toString()) : <any>undefined;
            this.isInTrialPeriod = data["isInTrialPeriod"];
            this.edition = data["edition"] ? EditionInfoDto.fromJS(data["edition"]) : <any>undefined;
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.paymentPeriodType = data["paymentPeriodType"];
            this.subscriptionDateString = data["subscriptionDateString"];
            this.creationTimeString = data["creationTimeString"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): TenantLoginInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantLoginInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["logoId"] = this.logoId;
        data["logoFileType"] = this.logoFileType;
        data["customCssId"] = this.customCssId;
        data["subscriptionEndDateUtc"] = this.subscriptionEndDateUtc ? this.subscriptionEndDateUtc.toISOString() : <any>undefined;
        data["isInTrialPeriod"] = this.isInTrialPeriod;
        data["edition"] = this.edition ? this.edition.toJSON() : <any>undefined;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["paymentPeriodType"] = this.paymentPeriodType;
        data["subscriptionDateString"] = this.subscriptionDateString;
        data["creationTimeString"] = this.creationTimeString;
        data["id"] = this.id;
        return data; 
    }
}

export interface ITenantLoginInfoDto {
    tenancyName: string | undefined;
    name: string | undefined;
    logoId: string | undefined;
    logoFileType: string | undefined;
    customCssId: string | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;
    edition: EditionInfoDto | undefined;
    creationTime: moment.Moment | undefined;
    paymentPeriodType: TenantLoginInfoDtoPaymentPeriodType | undefined;
    subscriptionDateString: string | undefined;
    creationTimeString: string | undefined;
    id: number | undefined;
}

export class ApplicationInfoDto implements IApplicationInfoDto {
    version: string | undefined;
    releaseDate: moment.Moment | undefined;
    features: { [key: string] : boolean; } | undefined;

    constructor(data?: IApplicationInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.version = data["version"];
            this.releaseDate = data["releaseDate"] ? moment(data["releaseDate"].toString()) : <any>undefined;
            if (data["features"]) {
                this.features = {};
                for (let key in data["features"]) {
                    if (data["features"].hasOwnProperty(key))
                        this.features[key] = data["features"][key];
                }
            }
        }
    }

    static fromJS(data: any): ApplicationInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicationInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["version"] = this.version;
        data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : <any>undefined;
        if (this.features) {
            data["features"] = {};
            for (let key in this.features) {
                if (this.features.hasOwnProperty(key))
                    data["features"][key] = this.features[key];
            }
        }
        return data; 
    }
}

export interface IApplicationInfoDto {
    version: string | undefined;
    releaseDate: moment.Moment | undefined;
    features: { [key: string] : boolean; } | undefined;
}

export class EditionInfoDto implements IEditionInfoDto {
    displayName: string | undefined;
    trialDayCount: number | undefined;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    isHighestEdition: boolean | undefined;
    isFree: boolean | undefined;
    id: number | undefined;

    constructor(data?: IEditionInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.displayName = data["displayName"];
            this.trialDayCount = data["trialDayCount"];
            this.monthlyPrice = data["monthlyPrice"];
            this.annualPrice = data["annualPrice"];
            this.isHighestEdition = data["isHighestEdition"];
            this.isFree = data["isFree"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EditionInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new EditionInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["trialDayCount"] = this.trialDayCount;
        data["monthlyPrice"] = this.monthlyPrice;
        data["annualPrice"] = this.annualPrice;
        data["isHighestEdition"] = this.isHighestEdition;
        data["isFree"] = this.isFree;
        data["id"] = this.id;
        return data; 
    }
}

export interface IEditionInfoDto {
    displayName: string | undefined;
    trialDayCount: number | undefined;
    monthlyPrice: number | undefined;
    annualPrice: number | undefined;
    isHighestEdition: boolean | undefined;
    isFree: boolean | undefined;
    id: number | undefined;
}

export class UpdateUserSignInTokenOutput implements IUpdateUserSignInTokenOutput {
    signInToken: string | undefined;
    encodedUserId: string | undefined;
    encodedTenantId: string | undefined;

    constructor(data?: IUpdateUserSignInTokenOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.signInToken = data["signInToken"];
            this.encodedUserId = data["encodedUserId"];
            this.encodedTenantId = data["encodedTenantId"];
        }
    }

    static fromJS(data: any): UpdateUserSignInTokenOutput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateUserSignInTokenOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["signInToken"] = this.signInToken;
        data["encodedUserId"] = this.encodedUserId;
        data["encodedTenantId"] = this.encodedTenantId;
        return data; 
    }
}

export interface IUpdateUserSignInTokenOutput {
    signInToken: string | undefined;
    encodedUserId: string | undefined;
    encodedTenantId: string | undefined;
}

export class PagedResultDtoOfTenantListDto implements IPagedResultDtoOfTenantListDto {
    totalCount: number | undefined;
    items: TenantListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfTenantListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(TenantListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfTenantListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfTenantListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfTenantListDto {
    totalCount: number | undefined;
    items: TenantListDto[] | undefined;
}

export class TenantListDto implements ITenantListDto {
    tenancyName: string | undefined;
    name: string | undefined;
    editionDisplayName: string | undefined;
    connectionString: string | undefined;
    isActive: boolean | undefined;
    creationTime: moment.Moment | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    editionId: number | undefined;
    isInTrialPeriod: boolean | undefined;
    id: number | undefined;

    constructor(data?: ITenantListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.editionDisplayName = data["editionDisplayName"];
            this.connectionString = data["connectionString"];
            this.isActive = data["isActive"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.subscriptionEndDateUtc = data["subscriptionEndDateUtc"] ? moment(data["subscriptionEndDateUtc"].toString()) : <any>undefined;
            this.editionId = data["editionId"];
            this.isInTrialPeriod = data["isInTrialPeriod"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): TenantListDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["editionDisplayName"] = this.editionDisplayName;
        data["connectionString"] = this.connectionString;
        data["isActive"] = this.isActive;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["subscriptionEndDateUtc"] = this.subscriptionEndDateUtc ? this.subscriptionEndDateUtc.toISOString() : <any>undefined;
        data["editionId"] = this.editionId;
        data["isInTrialPeriod"] = this.isInTrialPeriod;
        data["id"] = this.id;
        return data; 
    }
}

export interface ITenantListDto {
    tenancyName: string | undefined;
    name: string | undefined;
    editionDisplayName: string | undefined;
    connectionString: string | undefined;
    isActive: boolean | undefined;
    creationTime: moment.Moment | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    editionId: number | undefined;
    isInTrialPeriod: boolean | undefined;
    id: number | undefined;
}

export class CreateTenantInput implements ICreateTenantInput {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    adminPassword: string | undefined;
    connectionString: string | undefined;
    shouldChangePasswordOnNextLogin: boolean | undefined;
    sendActivationEmail: boolean | undefined;
    editionId: number | undefined;
    isActive: boolean | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;

    constructor(data?: ICreateTenantInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.adminEmailAddress = data["adminEmailAddress"];
            this.adminPassword = data["adminPassword"];
            this.connectionString = data["connectionString"];
            this.shouldChangePasswordOnNextLogin = data["shouldChangePasswordOnNextLogin"];
            this.sendActivationEmail = data["sendActivationEmail"];
            this.editionId = data["editionId"];
            this.isActive = data["isActive"];
            this.subscriptionEndDateUtc = data["subscriptionEndDateUtc"] ? moment(data["subscriptionEndDateUtc"].toString()) : <any>undefined;
            this.isInTrialPeriod = data["isInTrialPeriod"];
        }
    }

    static fromJS(data: any): CreateTenantInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateTenantInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["adminEmailAddress"] = this.adminEmailAddress;
        data["adminPassword"] = this.adminPassword;
        data["connectionString"] = this.connectionString;
        data["shouldChangePasswordOnNextLogin"] = this.shouldChangePasswordOnNextLogin;
        data["sendActivationEmail"] = this.sendActivationEmail;
        data["editionId"] = this.editionId;
        data["isActive"] = this.isActive;
        data["subscriptionEndDateUtc"] = this.subscriptionEndDateUtc ? this.subscriptionEndDateUtc.toISOString() : <any>undefined;
        data["isInTrialPeriod"] = this.isInTrialPeriod;
        return data; 
    }
}

export interface ICreateTenantInput {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    adminPassword: string | undefined;
    connectionString: string | undefined;
    shouldChangePasswordOnNextLogin: boolean | undefined;
    sendActivationEmail: boolean | undefined;
    editionId: number | undefined;
    isActive: boolean | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;
}

export class TenantEditDto implements ITenantEditDto {
    tenancyName: string;
    name: string;
    connectionString: string | undefined;
    editionId: number | undefined;
    isActive: boolean | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;
    id: number | undefined;

    constructor(data?: ITenantEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.connectionString = data["connectionString"];
            this.editionId = data["editionId"];
            this.isActive = data["isActive"];
            this.subscriptionEndDateUtc = data["subscriptionEndDateUtc"] ? moment(data["subscriptionEndDateUtc"].toString()) : <any>undefined;
            this.isInTrialPeriod = data["isInTrialPeriod"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): TenantEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["connectionString"] = this.connectionString;
        data["editionId"] = this.editionId;
        data["isActive"] = this.isActive;
        data["subscriptionEndDateUtc"] = this.subscriptionEndDateUtc ? this.subscriptionEndDateUtc.toISOString() : <any>undefined;
        data["isInTrialPeriod"] = this.isInTrialPeriod;
        data["id"] = this.id;
        return data; 
    }
}

export interface ITenantEditDto {
    tenancyName: string;
    name: string;
    connectionString: string | undefined;
    editionId: number | undefined;
    isActive: boolean | undefined;
    subscriptionEndDateUtc: moment.Moment | undefined;
    isInTrialPeriod: boolean | undefined;
    id: number | undefined;
}

export class GetTenantFeaturesEditOutput implements IGetTenantFeaturesEditOutput {
    featureValues: NameValueDto[] | undefined;
    features: FlatFeatureDto[] | undefined;

    constructor(data?: IGetTenantFeaturesEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["featureValues"] && data["featureValues"].constructor === Array) {
                this.featureValues = [];
                for (let item of data["featureValues"])
                    this.featureValues.push(NameValueDto.fromJS(item));
            }
            if (data["features"] && data["features"].constructor === Array) {
                this.features = [];
                for (let item of data["features"])
                    this.features.push(FlatFeatureDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetTenantFeaturesEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetTenantFeaturesEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.featureValues && this.featureValues.constructor === Array) {
            data["featureValues"] = [];
            for (let item of this.featureValues)
                data["featureValues"].push(item.toJSON());
        }
        if (this.features && this.features.constructor === Array) {
            data["features"] = [];
            for (let item of this.features)
                data["features"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetTenantFeaturesEditOutput {
    featureValues: NameValueDto[] | undefined;
    features: FlatFeatureDto[] | undefined;
}

export class UpdateTenantFeaturesInput implements IUpdateTenantFeaturesInput {
    id: number | undefined;
    featureValues: NameValueDto[];

    constructor(data?: IUpdateTenantFeaturesInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.featureValues = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            if (data["featureValues"] && data["featureValues"].constructor === Array) {
                this.featureValues = [];
                for (let item of data["featureValues"])
                    this.featureValues.push(NameValueDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): UpdateTenantFeaturesInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateTenantFeaturesInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        if (this.featureValues && this.featureValues.constructor === Array) {
            data["featureValues"] = [];
            for (let item of this.featureValues)
                data["featureValues"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IUpdateTenantFeaturesInput {
    id: number | undefined;
    featureValues: NameValueDto[];
}

export class EntityDto implements IEntityDto {
    id: number | undefined;

    constructor(data?: IEntityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EntityDto {
        data = typeof data === 'object' ? data : {};
        let result = new EntityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data; 
    }
}

export interface IEntityDto {
    id: number | undefined;
}

export class GetMemberActivityOutput implements IGetMemberActivityOutput {
    memberActivities: MemberActivity[] | undefined;

    constructor(data?: IGetMemberActivityOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["memberActivities"] && data["memberActivities"].constructor === Array) {
                this.memberActivities = [];
                for (let item of data["memberActivities"])
                    this.memberActivities.push(MemberActivity.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetMemberActivityOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetMemberActivityOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.memberActivities && this.memberActivities.constructor === Array) {
            data["memberActivities"] = [];
            for (let item of this.memberActivities)
                data["memberActivities"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetMemberActivityOutput {
    memberActivities: MemberActivity[] | undefined;
}

export class MemberActivity implements IMemberActivity {
    name: string | undefined;
    earnings: string | undefined;
    cases: number | undefined;
    closed: number | undefined;
    rate: string | undefined;

    constructor(data?: IMemberActivity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.earnings = data["earnings"];
            this.cases = data["cases"];
            this.closed = data["closed"];
            this.rate = data["rate"];
        }
    }

    static fromJS(data: any): MemberActivity {
        data = typeof data === 'object' ? data : {};
        let result = new MemberActivity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["earnings"] = this.earnings;
        data["cases"] = this.cases;
        data["closed"] = this.closed;
        data["rate"] = this.rate;
        return data; 
    }
}

export interface IMemberActivity {
    name: string | undefined;
    earnings: string | undefined;
    cases: number | undefined;
    closed: number | undefined;
    rate: string | undefined;
}

export class GetDashboardDataOutput implements IGetDashboardDataOutput {
    totalProfit: number | undefined;
    newFeedbacks: number | undefined;
    newOrders: number | undefined;
    newUsers: number | undefined;
    salesSummary: SalesSummaryData[] | undefined;
    totalSales: number | undefined;
    revenue: number | undefined;
    expenses: number | undefined;
    growth: number | undefined;
    transactionPercent: number | undefined;
    newVisitPercent: number | undefined;
    bouncePercent: number | undefined;
    dailySales: number[] | undefined;
    profitShares: number[] | undefined;

    constructor(data?: IGetDashboardDataOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalProfit = data["totalProfit"];
            this.newFeedbacks = data["newFeedbacks"];
            this.newOrders = data["newOrders"];
            this.newUsers = data["newUsers"];
            if (data["salesSummary"] && data["salesSummary"].constructor === Array) {
                this.salesSummary = [];
                for (let item of data["salesSummary"])
                    this.salesSummary.push(SalesSummaryData.fromJS(item));
            }
            this.totalSales = data["totalSales"];
            this.revenue = data["revenue"];
            this.expenses = data["expenses"];
            this.growth = data["growth"];
            this.transactionPercent = data["transactionPercent"];
            this.newVisitPercent = data["newVisitPercent"];
            this.bouncePercent = data["bouncePercent"];
            if (data["dailySales"] && data["dailySales"].constructor === Array) {
                this.dailySales = [];
                for (let item of data["dailySales"])
                    this.dailySales.push(item);
            }
            if (data["profitShares"] && data["profitShares"].constructor === Array) {
                this.profitShares = [];
                for (let item of data["profitShares"])
                    this.profitShares.push(item);
            }
        }
    }

    static fromJS(data: any): GetDashboardDataOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetDashboardDataOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalProfit"] = this.totalProfit;
        data["newFeedbacks"] = this.newFeedbacks;
        data["newOrders"] = this.newOrders;
        data["newUsers"] = this.newUsers;
        if (this.salesSummary && this.salesSummary.constructor === Array) {
            data["salesSummary"] = [];
            for (let item of this.salesSummary)
                data["salesSummary"].push(item.toJSON());
        }
        data["totalSales"] = this.totalSales;
        data["revenue"] = this.revenue;
        data["expenses"] = this.expenses;
        data["growth"] = this.growth;
        data["transactionPercent"] = this.transactionPercent;
        data["newVisitPercent"] = this.newVisitPercent;
        data["bouncePercent"] = this.bouncePercent;
        if (this.dailySales && this.dailySales.constructor === Array) {
            data["dailySales"] = [];
            for (let item of this.dailySales)
                data["dailySales"].push(item);
        }
        if (this.profitShares && this.profitShares.constructor === Array) {
            data["profitShares"] = [];
            for (let item of this.profitShares)
                data["profitShares"].push(item);
        }
        return data; 
    }
}

export interface IGetDashboardDataOutput {
    totalProfit: number | undefined;
    newFeedbacks: number | undefined;
    newOrders: number | undefined;
    newUsers: number | undefined;
    salesSummary: SalesSummaryData[] | undefined;
    totalSales: number | undefined;
    revenue: number | undefined;
    expenses: number | undefined;
    growth: number | undefined;
    transactionPercent: number | undefined;
    newVisitPercent: number | undefined;
    bouncePercent: number | undefined;
    dailySales: number[] | undefined;
    profitShares: number[] | undefined;
}

export class SalesSummaryData implements ISalesSummaryData {
    period: string | undefined;
    sales: number | undefined;
    profit: number | undefined;

    constructor(data?: ISalesSummaryData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.period = data["period"];
            this.sales = data["sales"];
            this.profit = data["profit"];
        }
    }

    static fromJS(data: any): SalesSummaryData {
        data = typeof data === 'object' ? data : {};
        let result = new SalesSummaryData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["period"] = this.period;
        data["sales"] = this.sales;
        data["profit"] = this.profit;
        return data; 
    }
}

export interface ISalesSummaryData {
    period: string | undefined;
    sales: number | undefined;
    profit: number | undefined;
}

export class GetSalesSummaryOutput implements IGetSalesSummaryOutput {
    salesSummary: SalesSummaryData[] | undefined;

    constructor(data?: IGetSalesSummaryOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["salesSummary"] && data["salesSummary"].constructor === Array) {
                this.salesSummary = [];
                for (let item of data["salesSummary"])
                    this.salesSummary.push(SalesSummaryData.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetSalesSummaryOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetSalesSummaryOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.salesSummary && this.salesSummary.constructor === Array) {
            data["salesSummary"] = [];
            for (let item of this.salesSummary)
                data["salesSummary"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetSalesSummaryOutput {
    salesSummary: SalesSummaryData[] | undefined;
}

export class GetWorldMapOutput implements IGetWorldMapOutput {
    countries: WorldMapCountry[] | undefined;

    constructor(data?: IGetWorldMapOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["countries"] && data["countries"].constructor === Array) {
                this.countries = [];
                for (let item of data["countries"])
                    this.countries.push(WorldMapCountry.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetWorldMapOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetWorldMapOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.countries && this.countries.constructor === Array) {
            data["countries"] = [];
            for (let item of this.countries)
                data["countries"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IGetWorldMapOutput {
    countries: WorldMapCountry[] | undefined;
}

export class WorldMapCountry implements IWorldMapCountry {
    countryName: string | undefined;
    color: number | undefined;

    constructor(data?: IWorldMapCountry) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.countryName = data["countryName"];
            this.color = data["color"];
        }
    }

    static fromJS(data: any): WorldMapCountry {
        data = typeof data === 'object' ? data : {};
        let result = new WorldMapCountry();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["countryName"] = this.countryName;
        data["color"] = this.color;
        return data; 
    }
}

export interface IWorldMapCountry {
    countryName: string | undefined;
    color: number | undefined;
}

export class GetGeneralStatsOutput implements IGetGeneralStatsOutput {
    transactionPercent: number | undefined;
    newVisitPercent: number | undefined;
    bouncePercent: number | undefined;

    constructor(data?: IGetGeneralStatsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.transactionPercent = data["transactionPercent"];
            this.newVisitPercent = data["newVisitPercent"];
            this.bouncePercent = data["bouncePercent"];
        }
    }

    static fromJS(data: any): GetGeneralStatsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetGeneralStatsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["transactionPercent"] = this.transactionPercent;
        data["newVisitPercent"] = this.newVisitPercent;
        data["bouncePercent"] = this.bouncePercent;
        return data; 
    }
}

export interface IGetGeneralStatsOutput {
    transactionPercent: number | undefined;
    newVisitPercent: number | undefined;
    bouncePercent: number | undefined;
}

export class RegisterTenantInput implements IRegisterTenantInput {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    adminPassword: string | undefined;
    captchaResponse: string | undefined;
    subscriptionStartType: RegisterTenantInputSubscriptionStartType | undefined;
    gateway: RegisterTenantInputGateway | undefined;
    editionId: number | undefined;
    paymentId: string | undefined;

    constructor(data?: IRegisterTenantInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.adminEmailAddress = data["adminEmailAddress"];
            this.adminPassword = data["adminPassword"];
            this.captchaResponse = data["captchaResponse"];
            this.subscriptionStartType = data["subscriptionStartType"];
            this.gateway = data["gateway"];
            this.editionId = data["editionId"];
            this.paymentId = data["paymentId"];
        }
    }

    static fromJS(data: any): RegisterTenantInput {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterTenantInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["adminEmailAddress"] = this.adminEmailAddress;
        data["adminPassword"] = this.adminPassword;
        data["captchaResponse"] = this.captchaResponse;
        data["subscriptionStartType"] = this.subscriptionStartType;
        data["gateway"] = this.gateway;
        data["editionId"] = this.editionId;
        data["paymentId"] = this.paymentId;
        return data; 
    }
}

export interface IRegisterTenantInput {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    adminPassword: string | undefined;
    captchaResponse: string | undefined;
    subscriptionStartType: RegisterTenantInputSubscriptionStartType | undefined;
    gateway: RegisterTenantInputGateway | undefined;
    editionId: number | undefined;
    paymentId: string | undefined;
}

export class RegisterTenantOutput implements IRegisterTenantOutput {
    tenantId: number | undefined;
    tenancyName: string | undefined;
    name: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    isTenantActive: boolean | undefined;
    isActive: boolean | undefined;
    isEmailConfirmationRequired: boolean | undefined;

    constructor(data?: IRegisterTenantOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.tenancyName = data["tenancyName"];
            this.name = data["name"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.isTenantActive = data["isTenantActive"];
            this.isActive = data["isActive"];
            this.isEmailConfirmationRequired = data["isEmailConfirmationRequired"];
        }
    }

    static fromJS(data: any): RegisterTenantOutput {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterTenantOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["tenancyName"] = this.tenancyName;
        data["name"] = this.name;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["isTenantActive"] = this.isTenantActive;
        data["isActive"] = this.isActive;
        data["isEmailConfirmationRequired"] = this.isEmailConfirmationRequired;
        return data; 
    }
}

export interface IRegisterTenantOutput {
    tenantId: number | undefined;
    tenancyName: string | undefined;
    name: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    isTenantActive: boolean | undefined;
    isActive: boolean | undefined;
    isEmailConfirmationRequired: boolean | undefined;
}

export class EditionsSelectOutput implements IEditionsSelectOutput {
    allFeatures: FlatFeatureSelectDto[] | undefined;
    editionsWithFeatures: EditionWithFeaturesDto[] | undefined;
    tenantEditionId: number | undefined;

    constructor(data?: IEditionsSelectOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["allFeatures"] && data["allFeatures"].constructor === Array) {
                this.allFeatures = [];
                for (let item of data["allFeatures"])
                    this.allFeatures.push(FlatFeatureSelectDto.fromJS(item));
            }
            if (data["editionsWithFeatures"] && data["editionsWithFeatures"].constructor === Array) {
                this.editionsWithFeatures = [];
                for (let item of data["editionsWithFeatures"])
                    this.editionsWithFeatures.push(EditionWithFeaturesDto.fromJS(item));
            }
            this.tenantEditionId = data["tenantEditionId"];
        }
    }

    static fromJS(data: any): EditionsSelectOutput {
        data = typeof data === 'object' ? data : {};
        let result = new EditionsSelectOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.allFeatures && this.allFeatures.constructor === Array) {
            data["allFeatures"] = [];
            for (let item of this.allFeatures)
                data["allFeatures"].push(item.toJSON());
        }
        if (this.editionsWithFeatures && this.editionsWithFeatures.constructor === Array) {
            data["editionsWithFeatures"] = [];
            for (let item of this.editionsWithFeatures)
                data["editionsWithFeatures"].push(item.toJSON());
        }
        data["tenantEditionId"] = this.tenantEditionId;
        return data; 
    }
}

export interface IEditionsSelectOutput {
    allFeatures: FlatFeatureSelectDto[] | undefined;
    editionsWithFeatures: EditionWithFeaturesDto[] | undefined;
    tenantEditionId: number | undefined;
}

export class FlatFeatureSelectDto implements IFlatFeatureSelectDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    defaultValue: string | undefined;
    inputType: IInputType | undefined;
    textHtmlColor: string | undefined;

    constructor(data?: IFlatFeatureSelectDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.parentName = data["parentName"];
            this.name = data["name"];
            this.displayName = data["displayName"];
            this.description = data["description"];
            this.defaultValue = data["defaultValue"];
            this.inputType = data["inputType"] ? IInputType.fromJS(data["inputType"]) : <any>undefined;
            this.textHtmlColor = data["textHtmlColor"];
        }
    }

    static fromJS(data: any): FlatFeatureSelectDto {
        data = typeof data === 'object' ? data : {};
        let result = new FlatFeatureSelectDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["parentName"] = this.parentName;
        data["name"] = this.name;
        data["displayName"] = this.displayName;
        data["description"] = this.description;
        data["defaultValue"] = this.defaultValue;
        data["inputType"] = this.inputType ? this.inputType.toJSON() : <any>undefined;
        data["textHtmlColor"] = this.textHtmlColor;
        return data; 
    }
}

export interface IFlatFeatureSelectDto {
    parentName: string | undefined;
    name: string | undefined;
    displayName: string | undefined;
    description: string | undefined;
    defaultValue: string | undefined;
    inputType: IInputType | undefined;
    textHtmlColor: string | undefined;
}

export class EditionWithFeaturesDto implements IEditionWithFeaturesDto {
    edition: EditionSelectDto | undefined;
    featureValues: NameValueDto[] | undefined;

    constructor(data?: IEditionWithFeaturesDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.edition = data["edition"] ? EditionSelectDto.fromJS(data["edition"]) : <any>undefined;
            if (data["featureValues"] && data["featureValues"].constructor === Array) {
                this.featureValues = [];
                for (let item of data["featureValues"])
                    this.featureValues.push(NameValueDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): EditionWithFeaturesDto {
        data = typeof data === 'object' ? data : {};
        let result = new EditionWithFeaturesDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["edition"] = this.edition ? this.edition.toJSON() : <any>undefined;
        if (this.featureValues && this.featureValues.constructor === Array) {
            data["featureValues"] = [];
            for (let item of this.featureValues)
                data["featureValues"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IEditionWithFeaturesDto {
    edition: EditionSelectDto | undefined;
    featureValues: NameValueDto[] | undefined;
}

export class IInputType implements IIInputType {
    readonly name: string | undefined;
    readonly attributes: { [key: string] : any; } | undefined;
    validator: IValueValidator | undefined;

    constructor(data?: IIInputType) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            (<any>this).name = data["name"];
            if (data["attributes"]) {
                (<any>this).attributes = {};
                for (let key in data["attributes"]) {
                    if (data["attributes"].hasOwnProperty(key))
                        (<any>this).attributes[key] = data["attributes"][key];
                }
            }
            this.validator = data["validator"] ? IValueValidator.fromJS(data["validator"]) : <any>undefined;
        }
    }

    static fromJS(data: any): IInputType {
        data = typeof data === 'object' ? data : {};
        let result = new IInputType();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (this.attributes) {
            data["attributes"] = {};
            for (let key in this.attributes) {
                if (this.attributes.hasOwnProperty(key))
                    data["attributes"][key] = this.attributes[key];
            }
        }
        data["validator"] = this.validator ? this.validator.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IIInputType {
    name: string | undefined;
    attributes: { [key: string] : any; } | undefined;
    validator: IValueValidator | undefined;
}

export class TenantSettingsEditDto implements ITenantSettingsEditDto {
    general: GeneralSettingsEditDto | undefined;
    userManagement: TenantUserManagementSettingsEditDto;
    email: EmailSettingsEditDto | undefined;
    ldap: LdapSettingsEditDto | undefined;
    security: SecuritySettingsEditDto;
    billing: TenantBillingSettingsEditDto | undefined;

    constructor(data?: ITenantSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.userManagement = new TenantUserManagementSettingsEditDto();
            this.security = new SecuritySettingsEditDto();
        }
    }

    init(data?: any) {
        if (data) {
            this.general = data["general"] ? GeneralSettingsEditDto.fromJS(data["general"]) : <any>undefined;
            this.userManagement = data["userManagement"] ? TenantUserManagementSettingsEditDto.fromJS(data["userManagement"]) : new TenantUserManagementSettingsEditDto();
            this.email = data["email"] ? EmailSettingsEditDto.fromJS(data["email"]) : <any>undefined;
            this.ldap = data["ldap"] ? LdapSettingsEditDto.fromJS(data["ldap"]) : <any>undefined;
            this.security = data["security"] ? SecuritySettingsEditDto.fromJS(data["security"]) : new SecuritySettingsEditDto();
            this.billing = data["billing"] ? TenantBillingSettingsEditDto.fromJS(data["billing"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TenantSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["general"] = this.general ? this.general.toJSON() : <any>undefined;
        data["userManagement"] = this.userManagement ? this.userManagement.toJSON() : <any>undefined;
        data["email"] = this.email ? this.email.toJSON() : <any>undefined;
        data["ldap"] = this.ldap ? this.ldap.toJSON() : <any>undefined;
        data["security"] = this.security ? this.security.toJSON() : <any>undefined;
        data["billing"] = this.billing ? this.billing.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ITenantSettingsEditDto {
    general: GeneralSettingsEditDto | undefined;
    userManagement: TenantUserManagementSettingsEditDto;
    email: EmailSettingsEditDto | undefined;
    ldap: LdapSettingsEditDto | undefined;
    security: SecuritySettingsEditDto;
    billing: TenantBillingSettingsEditDto | undefined;
}

export class TenantUserManagementSettingsEditDto implements ITenantUserManagementSettingsEditDto {
    allowSelfRegistration: boolean | undefined;
    isNewRegisteredUserActiveByDefault: boolean | undefined;
    isEmailConfirmationRequiredForLogin: boolean | undefined;
    useCaptchaOnRegistration: boolean | undefined;

    constructor(data?: ITenantUserManagementSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.allowSelfRegistration = data["allowSelfRegistration"];
            this.isNewRegisteredUserActiveByDefault = data["isNewRegisteredUserActiveByDefault"];
            this.isEmailConfirmationRequiredForLogin = data["isEmailConfirmationRequiredForLogin"];
            this.useCaptchaOnRegistration = data["useCaptchaOnRegistration"];
        }
    }

    static fromJS(data: any): TenantUserManagementSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantUserManagementSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["allowSelfRegistration"] = this.allowSelfRegistration;
        data["isNewRegisteredUserActiveByDefault"] = this.isNewRegisteredUserActiveByDefault;
        data["isEmailConfirmationRequiredForLogin"] = this.isEmailConfirmationRequiredForLogin;
        data["useCaptchaOnRegistration"] = this.useCaptchaOnRegistration;
        return data; 
    }
}

export interface ITenantUserManagementSettingsEditDto {
    allowSelfRegistration: boolean | undefined;
    isNewRegisteredUserActiveByDefault: boolean | undefined;
    isEmailConfirmationRequiredForLogin: boolean | undefined;
    useCaptchaOnRegistration: boolean | undefined;
}

export class LdapSettingsEditDto implements ILdapSettingsEditDto {
    isModuleEnabled: boolean | undefined;
    isEnabled: boolean | undefined;
    domain: string | undefined;
    userName: string | undefined;
    password: string | undefined;

    constructor(data?: ILdapSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isModuleEnabled = data["isModuleEnabled"];
            this.isEnabled = data["isEnabled"];
            this.domain = data["domain"];
            this.userName = data["userName"];
            this.password = data["password"];
        }
    }

    static fromJS(data: any): LdapSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new LdapSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isModuleEnabled"] = this.isModuleEnabled;
        data["isEnabled"] = this.isEnabled;
        data["domain"] = this.domain;
        data["userName"] = this.userName;
        data["password"] = this.password;
        return data; 
    }
}

export interface ILdapSettingsEditDto {
    isModuleEnabled: boolean | undefined;
    isEnabled: boolean | undefined;
    domain: string | undefined;
    userName: string | undefined;
    password: string | undefined;
}

export class TenantBillingSettingsEditDto implements ITenantBillingSettingsEditDto {
    legalName: string | undefined;
    address: string | undefined;
    taxVatNo: string | undefined;

    constructor(data?: ITenantBillingSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.legalName = data["legalName"];
            this.address = data["address"];
            this.taxVatNo = data["taxVatNo"];
        }
    }

    static fromJS(data: any): TenantBillingSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new TenantBillingSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["legalName"] = this.legalName;
        data["address"] = this.address;
        data["taxVatNo"] = this.taxVatNo;
        return data; 
    }
}

export interface ITenantBillingSettingsEditDto {
    legalName: string | undefined;
    address: string | undefined;
    taxVatNo: string | undefined;
}

export class AuthenticateModel implements IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean | undefined;

    constructor(data?: IAuthenticateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.userNameOrEmailAddress = data["userNameOrEmailAddress"];
            this.password = data["password"];
            this.rememberClient = data["rememberClient"];
        }
    }

    static fromJS(data: any): AuthenticateModel {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
        data["password"] = this.password;
        data["rememberClient"] = this.rememberClient;
        return data; 
    }
}

export interface IAuthenticateModel {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean | undefined;
}

export class AuthenticateResultModel implements IAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number | undefined;
    userId: number | undefined;

    constructor(data?: IAuthenticateResultModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.userId = data["userId"];
        }
    }

    static fromJS(data: any): AuthenticateResultModel {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateResultModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["userId"] = this.userId;
        return data; 
    }
}

export interface IAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number | undefined;
    userId: number | undefined;
}

export class ExternalLoginProviderInfoModel implements IExternalLoginProviderInfoModel {
    name: string | undefined;
    clientId: string | undefined;

    constructor(data?: IExternalLoginProviderInfoModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.clientId = data["clientId"];
        }
    }

    static fromJS(data: any): ExternalLoginProviderInfoModel {
        data = typeof data === 'object' ? data : {};
        let result = new ExternalLoginProviderInfoModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["clientId"] = this.clientId;
        return data; 
    }
}

export interface IExternalLoginProviderInfoModel {
    name: string | undefined;
    clientId: string | undefined;
}

export class ExternalAuthenticateModel implements IExternalAuthenticateModel {
    authProvider: string;
    providerKey: string;
    providerAccessCode: string;

    constructor(data?: IExternalAuthenticateModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.authProvider = data["authProvider"];
            this.providerKey = data["providerKey"];
            this.providerAccessCode = data["providerAccessCode"];
        }
    }

    static fromJS(data: any): ExternalAuthenticateModel {
        data = typeof data === 'object' ? data : {};
        let result = new ExternalAuthenticateModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["authProvider"] = this.authProvider;
        data["providerKey"] = this.providerKey;
        data["providerAccessCode"] = this.providerAccessCode;
        return data; 
    }
}

export interface IExternalAuthenticateModel {
    authProvider: string;
    providerKey: string;
    providerAccessCode: string;
}

export class ExternalAuthenticateResultModel implements IExternalAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number | undefined;
    waitingForActivation: boolean | undefined;

    constructor(data?: IExternalAuthenticateResultModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.waitingForActivation = data["waitingForActivation"];
        }
    }

    static fromJS(data: any): ExternalAuthenticateResultModel {
        data = typeof data === 'object' ? data : {};
        let result = new ExternalAuthenticateResultModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["waitingForActivation"] = this.waitingForActivation;
        return data; 
    }
}

export interface IExternalAuthenticateResultModel {
    accessToken: string | undefined;
    encryptedAccessToken: string | undefined;
    expireInSeconds: number | undefined;
    waitingForActivation: boolean | undefined;
}

export class UiCustomizationSettingsEditDto implements IUiCustomizationSettingsEditDto {
    layout: UiCustomizationLayoutSettingsEditDto | undefined;
    header: UiCustomizationHeaderSettingsEditDto | undefined;
    menu: UiCustomizationMenuSettingsEditDto | undefined;
    footer: UiCustomizationFooterSettingsEditDto | undefined;

    constructor(data?: IUiCustomizationSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.layout = data["layout"] ? UiCustomizationLayoutSettingsEditDto.fromJS(data["layout"]) : <any>undefined;
            this.header = data["header"] ? UiCustomizationHeaderSettingsEditDto.fromJS(data["header"]) : <any>undefined;
            this.menu = data["menu"] ? UiCustomizationMenuSettingsEditDto.fromJS(data["menu"]) : <any>undefined;
            this.footer = data["footer"] ? UiCustomizationFooterSettingsEditDto.fromJS(data["footer"]) : <any>undefined;
        }
    }

    static fromJS(data: any): UiCustomizationSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UiCustomizationSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["layout"] = this.layout ? this.layout.toJSON() : <any>undefined;
        data["header"] = this.header ? this.header.toJSON() : <any>undefined;
        data["menu"] = this.menu ? this.menu.toJSON() : <any>undefined;
        data["footer"] = this.footer ? this.footer.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IUiCustomizationSettingsEditDto {
    layout: UiCustomizationLayoutSettingsEditDto | undefined;
    header: UiCustomizationHeaderSettingsEditDto | undefined;
    menu: UiCustomizationMenuSettingsEditDto | undefined;
    footer: UiCustomizationFooterSettingsEditDto | undefined;
}

export class UiCustomizationLayoutSettingsEditDto implements IUiCustomizationLayoutSettingsEditDto {
    layoutType: string | undefined;
    pageLoader: string | undefined;
    contentSkin: string | undefined;

    constructor(data?: IUiCustomizationLayoutSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.layoutType = data["layoutType"];
            this.pageLoader = data["pageLoader"];
            this.contentSkin = data["contentSkin"];
        }
    }

    static fromJS(data: any): UiCustomizationLayoutSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UiCustomizationLayoutSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["layoutType"] = this.layoutType;
        data["pageLoader"] = this.pageLoader;
        data["contentSkin"] = this.contentSkin;
        return data; 
    }
}

export interface IUiCustomizationLayoutSettingsEditDto {
    layoutType: string | undefined;
    pageLoader: string | undefined;
    contentSkin: string | undefined;
}

export class UiCustomizationHeaderSettingsEditDto implements IUiCustomizationHeaderSettingsEditDto {
    desktopFixedHeader: boolean | undefined;
    desktopMinimizeMode: string | undefined;
    mobileFixedHeader: boolean | undefined;
    dropdownSkinDesktop: string | undefined;
    displaySubmenuArrowDesktop: boolean | undefined;
    dropdownSkin: string | undefined;

    constructor(data?: IUiCustomizationHeaderSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.desktopFixedHeader = data["desktopFixedHeader"];
            this.desktopMinimizeMode = data["desktopMinimizeMode"];
            this.mobileFixedHeader = data["mobileFixedHeader"];
            this.dropdownSkinDesktop = data["dropdownSkinDesktop"];
            this.displaySubmenuArrowDesktop = data["displaySubmenuArrowDesktop"];
            this.dropdownSkin = data["dropdownSkin"];
        }
    }

    static fromJS(data: any): UiCustomizationHeaderSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UiCustomizationHeaderSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["desktopFixedHeader"] = this.desktopFixedHeader;
        data["desktopMinimizeMode"] = this.desktopMinimizeMode;
        data["mobileFixedHeader"] = this.mobileFixedHeader;
        data["dropdownSkinDesktop"] = this.dropdownSkinDesktop;
        data["displaySubmenuArrowDesktop"] = this.displaySubmenuArrowDesktop;
        data["dropdownSkin"] = this.dropdownSkin;
        return data; 
    }
}

export interface IUiCustomizationHeaderSettingsEditDto {
    desktopFixedHeader: boolean | undefined;
    desktopMinimizeMode: string | undefined;
    mobileFixedHeader: boolean | undefined;
    dropdownSkinDesktop: string | undefined;
    displaySubmenuArrowDesktop: boolean | undefined;
    dropdownSkin: string | undefined;
}

export class UiCustomizationMenuSettingsEditDto implements IUiCustomizationMenuSettingsEditDto {
    position: string | undefined;
    asideSkin: string | undefined;
    fixedAside: boolean | undefined;
    allowAsideMinimizing: boolean | undefined;
    defaultMinimizedAside: boolean | undefined;
    allowAsideHiding: boolean | undefined;
    defaultHiddenAside: boolean | undefined;
    submenuToggle: string | undefined;
    dropdownSubmenuSkin: string | undefined;
    dropdownSubmenuArrow: boolean | undefined;

    constructor(data?: IUiCustomizationMenuSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.position = data["position"];
            this.asideSkin = data["asideSkin"];
            this.fixedAside = data["fixedAside"];
            this.allowAsideMinimizing = data["allowAsideMinimizing"];
            this.defaultMinimizedAside = data["defaultMinimizedAside"];
            this.allowAsideHiding = data["allowAsideHiding"];
            this.defaultHiddenAside = data["defaultHiddenAside"];
            this.submenuToggle = data["submenuToggle"];
            this.dropdownSubmenuSkin = data["dropdownSubmenuSkin"];
            this.dropdownSubmenuArrow = data["dropdownSubmenuArrow"];
        }
    }

    static fromJS(data: any): UiCustomizationMenuSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UiCustomizationMenuSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["position"] = this.position;
        data["asideSkin"] = this.asideSkin;
        data["fixedAside"] = this.fixedAside;
        data["allowAsideMinimizing"] = this.allowAsideMinimizing;
        data["defaultMinimizedAside"] = this.defaultMinimizedAside;
        data["allowAsideHiding"] = this.allowAsideHiding;
        data["defaultHiddenAside"] = this.defaultHiddenAside;
        data["submenuToggle"] = this.submenuToggle;
        data["dropdownSubmenuSkin"] = this.dropdownSubmenuSkin;
        data["dropdownSubmenuArrow"] = this.dropdownSubmenuArrow;
        return data; 
    }
}

export interface IUiCustomizationMenuSettingsEditDto {
    position: string | undefined;
    asideSkin: string | undefined;
    fixedAside: boolean | undefined;
    allowAsideMinimizing: boolean | undefined;
    defaultMinimizedAside: boolean | undefined;
    allowAsideHiding: boolean | undefined;
    defaultHiddenAside: boolean | undefined;
    submenuToggle: string | undefined;
    dropdownSubmenuSkin: string | undefined;
    dropdownSubmenuArrow: boolean | undefined;
}

export class UiCustomizationFooterSettingsEditDto implements IUiCustomizationFooterSettingsEditDto {
    fixedFooter: boolean | undefined;

    constructor(data?: IUiCustomizationFooterSettingsEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.fixedFooter = data["fixedFooter"];
        }
    }

    static fromJS(data: any): UiCustomizationFooterSettingsEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UiCustomizationFooterSettingsEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["fixedFooter"] = this.fixedFooter;
        return data; 
    }
}

export interface IUiCustomizationFooterSettingsEditDto {
    fixedFooter: boolean | undefined;
}

export class PagedResultDtoOfUserListDto implements IPagedResultDtoOfUserListDto {
    totalCount: number | undefined;
    items: UserListDto[] | undefined;

    constructor(data?: IPagedResultDtoOfUserListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(UserListDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfUserListDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfUserListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfUserListDto {
    totalCount: number | undefined;
    items: UserListDto[] | undefined;
}

export class UserListDto implements IUserListDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    phoneNumber: string | undefined;
    profilePictureId: string | undefined;
    isEmailConfirmed: boolean | undefined;
    roles: UserListRoleDto[] | undefined;
    lastLoginTime: moment.Moment | undefined;
    isActive: boolean | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;

    constructor(data?: IUserListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.phoneNumber = data["phoneNumber"];
            this.profilePictureId = data["profilePictureId"];
            this.isEmailConfirmed = data["isEmailConfirmed"];
            if (data["roles"] && data["roles"].constructor === Array) {
                this.roles = [];
                for (let item of data["roles"])
                    this.roles.push(UserListRoleDto.fromJS(item));
            }
            this.lastLoginTime = data["lastLoginTime"] ? moment(data["lastLoginTime"].toString()) : <any>undefined;
            this.isActive = data["isActive"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): UserListDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["phoneNumber"] = this.phoneNumber;
        data["profilePictureId"] = this.profilePictureId;
        data["isEmailConfirmed"] = this.isEmailConfirmed;
        if (this.roles && this.roles.constructor === Array) {
            data["roles"] = [];
            for (let item of this.roles)
                data["roles"].push(item.toJSON());
        }
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : <any>undefined;
        data["isActive"] = this.isActive;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface IUserListDto {
    name: string | undefined;
    surname: string | undefined;
    userName: string | undefined;
    emailAddress: string | undefined;
    phoneNumber: string | undefined;
    profilePictureId: string | undefined;
    isEmailConfirmed: boolean | undefined;
    roles: UserListRoleDto[] | undefined;
    lastLoginTime: moment.Moment | undefined;
    isActive: boolean | undefined;
    creationTime: moment.Moment | undefined;
    id: number | undefined;
}

export class UserListRoleDto implements IUserListRoleDto {
    roleId: number | undefined;
    roleName: string | undefined;

    constructor(data?: IUserListRoleDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.roleId = data["roleId"];
            this.roleName = data["roleName"];
        }
    }

    static fromJS(data: any): UserListRoleDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserListRoleDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["roleId"] = this.roleId;
        data["roleName"] = this.roleName;
        return data; 
    }
}

export interface IUserListRoleDto {
    roleId: number | undefined;
    roleName: string | undefined;
}

export class GetUserForEditOutput implements IGetUserForEditOutput {
    profilePictureId: string | undefined;
    user: UserEditDto | undefined;
    roles: UserRoleDto[] | undefined;
    allOrganizationUnits: OrganizationUnitDto[] | undefined;
    memberedOrganizationUnits: string[] | undefined;

    constructor(data?: IGetUserForEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.profilePictureId = data["profilePictureId"];
            this.user = data["user"] ? UserEditDto.fromJS(data["user"]) : <any>undefined;
            if (data["roles"] && data["roles"].constructor === Array) {
                this.roles = [];
                for (let item of data["roles"])
                    this.roles.push(UserRoleDto.fromJS(item));
            }
            if (data["allOrganizationUnits"] && data["allOrganizationUnits"].constructor === Array) {
                this.allOrganizationUnits = [];
                for (let item of data["allOrganizationUnits"])
                    this.allOrganizationUnits.push(OrganizationUnitDto.fromJS(item));
            }
            if (data["memberedOrganizationUnits"] && data["memberedOrganizationUnits"].constructor === Array) {
                this.memberedOrganizationUnits = [];
                for (let item of data["memberedOrganizationUnits"])
                    this.memberedOrganizationUnits.push(item);
            }
        }
    }

    static fromJS(data: any): GetUserForEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetUserForEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["profilePictureId"] = this.profilePictureId;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        if (this.roles && this.roles.constructor === Array) {
            data["roles"] = [];
            for (let item of this.roles)
                data["roles"].push(item.toJSON());
        }
        if (this.allOrganizationUnits && this.allOrganizationUnits.constructor === Array) {
            data["allOrganizationUnits"] = [];
            for (let item of this.allOrganizationUnits)
                data["allOrganizationUnits"].push(item.toJSON());
        }
        if (this.memberedOrganizationUnits && this.memberedOrganizationUnits.constructor === Array) {
            data["memberedOrganizationUnits"] = [];
            for (let item of this.memberedOrganizationUnits)
                data["memberedOrganizationUnits"].push(item);
        }
        return data; 
    }
}

export interface IGetUserForEditOutput {
    profilePictureId: string | undefined;
    user: UserEditDto | undefined;
    roles: UserRoleDto[] | undefined;
    allOrganizationUnits: OrganizationUnitDto[] | undefined;
    memberedOrganizationUnits: string[] | undefined;
}

export class UserEditDto implements IUserEditDto {
    id: number | undefined;
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string | undefined;
    password: string | undefined;
    isActive: boolean | undefined;
    shouldChangePasswordOnNextLogin: boolean | undefined;
    isTwoFactorEnabled: boolean | undefined;
    isLockoutEnabled: boolean | undefined;

    constructor(data?: IUserEditDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.surname = data["surname"];
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.phoneNumber = data["phoneNumber"];
            this.password = data["password"];
            this.isActive = data["isActive"];
            this.shouldChangePasswordOnNextLogin = data["shouldChangePasswordOnNextLogin"];
            this.isTwoFactorEnabled = data["isTwoFactorEnabled"];
            this.isLockoutEnabled = data["isLockoutEnabled"];
        }
    }

    static fromJS(data: any): UserEditDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserEditDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["surname"] = this.surname;
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["phoneNumber"] = this.phoneNumber;
        data["password"] = this.password;
        data["isActive"] = this.isActive;
        data["shouldChangePasswordOnNextLogin"] = this.shouldChangePasswordOnNextLogin;
        data["isTwoFactorEnabled"] = this.isTwoFactorEnabled;
        data["isLockoutEnabled"] = this.isLockoutEnabled;
        return data; 
    }
}

export interface IUserEditDto {
    id: number | undefined;
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string | undefined;
    password: string | undefined;
    isActive: boolean | undefined;
    shouldChangePasswordOnNextLogin: boolean | undefined;
    isTwoFactorEnabled: boolean | undefined;
    isLockoutEnabled: boolean | undefined;
}

export class UserRoleDto implements IUserRoleDto {
    roleId: number | undefined;
    roleName: string | undefined;
    roleDisplayName: string | undefined;
    isAssigned: boolean | undefined;

    constructor(data?: IUserRoleDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.roleId = data["roleId"];
            this.roleName = data["roleName"];
            this.roleDisplayName = data["roleDisplayName"];
            this.isAssigned = data["isAssigned"];
        }
    }

    static fromJS(data: any): UserRoleDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserRoleDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["roleId"] = this.roleId;
        data["roleName"] = this.roleName;
        data["roleDisplayName"] = this.roleDisplayName;
        data["isAssigned"] = this.isAssigned;
        return data; 
    }
}

export interface IUserRoleDto {
    roleId: number | undefined;
    roleName: string | undefined;
    roleDisplayName: string | undefined;
    isAssigned: boolean | undefined;
}

export class GetUserPermissionsForEditOutput implements IGetUserPermissionsForEditOutput {
    permissions: FlatPermissionDto[] | undefined;
    grantedPermissionNames: string[] | undefined;

    constructor(data?: IGetUserPermissionsForEditOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["permissions"] && data["permissions"].constructor === Array) {
                this.permissions = [];
                for (let item of data["permissions"])
                    this.permissions.push(FlatPermissionDto.fromJS(item));
            }
            if (data["grantedPermissionNames"] && data["grantedPermissionNames"].constructor === Array) {
                this.grantedPermissionNames = [];
                for (let item of data["grantedPermissionNames"])
                    this.grantedPermissionNames.push(item);
            }
        }
    }

    static fromJS(data: any): GetUserPermissionsForEditOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetUserPermissionsForEditOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.permissions && this.permissions.constructor === Array) {
            data["permissions"] = [];
            for (let item of this.permissions)
                data["permissions"].push(item.toJSON());
        }
        if (this.grantedPermissionNames && this.grantedPermissionNames.constructor === Array) {
            data["grantedPermissionNames"] = [];
            for (let item of this.grantedPermissionNames)
                data["grantedPermissionNames"].push(item);
        }
        return data; 
    }
}

export interface IGetUserPermissionsForEditOutput {
    permissions: FlatPermissionDto[] | undefined;
    grantedPermissionNames: string[] | undefined;
}

export class EntityDtoOfInt64 implements IEntityDtoOfInt64 {
    id: number | undefined;

    constructor(data?: IEntityDtoOfInt64) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
        }
    }

    static fromJS(data: any): EntityDtoOfInt64 {
        data = typeof data === 'object' ? data : {};
        let result = new EntityDtoOfInt64();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data; 
    }
}

export interface IEntityDtoOfInt64 {
    id: number | undefined;
}

export class UpdateUserPermissionsInput implements IUpdateUserPermissionsInput {
    id: number | undefined;
    grantedPermissionNames: string[];

    constructor(data?: IUpdateUserPermissionsInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.grantedPermissionNames = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            if (data["grantedPermissionNames"] && data["grantedPermissionNames"].constructor === Array) {
                this.grantedPermissionNames = [];
                for (let item of data["grantedPermissionNames"])
                    this.grantedPermissionNames.push(item);
            }
        }
    }

    static fromJS(data: any): UpdateUserPermissionsInput {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateUserPermissionsInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        if (this.grantedPermissionNames && this.grantedPermissionNames.constructor === Array) {
            data["grantedPermissionNames"] = [];
            for (let item of this.grantedPermissionNames)
                data["grantedPermissionNames"].push(item);
        }
        return data; 
    }
}

export interface IUpdateUserPermissionsInput {
    id: number | undefined;
    grantedPermissionNames: string[];
}

export class CreateOrUpdateUserInput implements ICreateOrUpdateUserInput {
    user: UserEditDto;
    assignedRoleNames: string[];
    sendActivationEmail: boolean | undefined;
    setRandomPassword: boolean | undefined;
    organizationUnits: number[] | undefined;

    constructor(data?: ICreateOrUpdateUserInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.user = new UserEditDto();
            this.assignedRoleNames = [];
        }
    }

    init(data?: any) {
        if (data) {
            this.user = data["user"] ? UserEditDto.fromJS(data["user"]) : new UserEditDto();
            if (data["assignedRoleNames"] && data["assignedRoleNames"].constructor === Array) {
                this.assignedRoleNames = [];
                for (let item of data["assignedRoleNames"])
                    this.assignedRoleNames.push(item);
            }
            this.sendActivationEmail = data["sendActivationEmail"];
            this.setRandomPassword = data["setRandomPassword"];
            if (data["organizationUnits"] && data["organizationUnits"].constructor === Array) {
                this.organizationUnits = [];
                for (let item of data["organizationUnits"])
                    this.organizationUnits.push(item);
            }
        }
    }

    static fromJS(data: any): CreateOrUpdateUserInput {
        data = typeof data === 'object' ? data : {};
        let result = new CreateOrUpdateUserInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        if (this.assignedRoleNames && this.assignedRoleNames.constructor === Array) {
            data["assignedRoleNames"] = [];
            for (let item of this.assignedRoleNames)
                data["assignedRoleNames"].push(item);
        }
        data["sendActivationEmail"] = this.sendActivationEmail;
        data["setRandomPassword"] = this.setRandomPassword;
        if (this.organizationUnits && this.organizationUnits.constructor === Array) {
            data["organizationUnits"] = [];
            for (let item of this.organizationUnits)
                data["organizationUnits"].push(item);
        }
        return data; 
    }
}

export interface ICreateOrUpdateUserInput {
    user: UserEditDto;
    assignedRoleNames: string[];
    sendActivationEmail: boolean | undefined;
    setRandomPassword: boolean | undefined;
    organizationUnits: number[] | undefined;
}

export class LinkToUserInput implements ILinkToUserInput {
    tenancyName: string | undefined;
    usernameOrEmailAddress: string;
    password: string;

    constructor(data?: ILinkToUserInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.usernameOrEmailAddress = data["usernameOrEmailAddress"];
            this.password = data["password"];
        }
    }

    static fromJS(data: any): LinkToUserInput {
        data = typeof data === 'object' ? data : {};
        let result = new LinkToUserInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["usernameOrEmailAddress"] = this.usernameOrEmailAddress;
        data["password"] = this.password;
        return data; 
    }
}

export interface ILinkToUserInput {
    tenancyName: string | undefined;
    usernameOrEmailAddress: string;
    password: string;
}

export class PagedResultDtoOfLinkedUserDto implements IPagedResultDtoOfLinkedUserDto {
    totalCount: number | undefined;
    items: LinkedUserDto[] | undefined;

    constructor(data?: IPagedResultDtoOfLinkedUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(LinkedUserDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfLinkedUserDto {
        data = typeof data === 'object' ? data : {};
        let result = new PagedResultDtoOfLinkedUserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IPagedResultDtoOfLinkedUserDto {
    totalCount: number | undefined;
    items: LinkedUserDto[] | undefined;
}

export class LinkedUserDto implements ILinkedUserDto {
    tenantId: number | undefined;
    tenancyName: string | undefined;
    username: string | undefined;
    lastLoginTime: moment.Moment | undefined;
    id: number | undefined;

    constructor(data?: ILinkedUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.tenancyName = data["tenancyName"];
            this.username = data["username"];
            this.lastLoginTime = data["lastLoginTime"] ? moment(data["lastLoginTime"].toString()) : <any>undefined;
            this.id = data["id"];
        }
    }

    static fromJS(data: any): LinkedUserDto {
        data = typeof data === 'object' ? data : {};
        let result = new LinkedUserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["tenancyName"] = this.tenancyName;
        data["username"] = this.username;
        data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : <any>undefined;
        data["id"] = this.id;
        return data; 
    }
}

export interface ILinkedUserDto {
    tenantId: number | undefined;
    tenancyName: string | undefined;
    username: string | undefined;
    lastLoginTime: moment.Moment | undefined;
    id: number | undefined;
}

export class ListResultDtoOfLinkedUserDto implements IListResultDtoOfLinkedUserDto {
    items: LinkedUserDto[] | undefined;

    constructor(data?: IListResultDtoOfLinkedUserDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(LinkedUserDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfLinkedUserDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfLinkedUserDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfLinkedUserDto {
    items: LinkedUserDto[] | undefined;
}

export class UnlinkUserInput implements IUnlinkUserInput {
    tenantId: number | undefined;
    userId: number | undefined;

    constructor(data?: IUnlinkUserInput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenantId = data["tenantId"];
            this.userId = data["userId"];
        }
    }

    static fromJS(data: any): UnlinkUserInput {
        data = typeof data === 'object' ? data : {};
        let result = new UnlinkUserInput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenantId"] = this.tenantId;
        data["userId"] = this.userId;
        return data; 
    }
}

export interface IUnlinkUserInput {
    tenantId: number | undefined;
    userId: number | undefined;
}

export class ListResultDtoOfUserLoginAttemptDto implements IListResultDtoOfUserLoginAttemptDto {
    items: UserLoginAttemptDto[] | undefined;

    constructor(data?: IListResultDtoOfUserLoginAttemptDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(UserLoginAttemptDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfUserLoginAttemptDto {
        data = typeof data === 'object' ? data : {};
        let result = new ListResultDtoOfUserLoginAttemptDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IListResultDtoOfUserLoginAttemptDto {
    items: UserLoginAttemptDto[] | undefined;
}

export class UserLoginAttemptDto implements IUserLoginAttemptDto {
    tenancyName: string | undefined;
    userNameOrEmail: string | undefined;
    clientIpAddress: string | undefined;
    clientName: string | undefined;
    browserInfo: string | undefined;
    result: string | undefined;
    creationTime: moment.Moment | undefined;

    constructor(data?: IUserLoginAttemptDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.tenancyName = data["tenancyName"];
            this.userNameOrEmail = data["userNameOrEmail"];
            this.clientIpAddress = data["clientIpAddress"];
            this.clientName = data["clientName"];
            this.browserInfo = data["browserInfo"];
            this.result = data["result"];
            this.creationTime = data["creationTime"] ? moment(data["creationTime"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): UserLoginAttemptDto {
        data = typeof data === 'object' ? data : {};
        let result = new UserLoginAttemptDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["tenancyName"] = this.tenancyName;
        data["userNameOrEmail"] = this.userNameOrEmail;
        data["clientIpAddress"] = this.clientIpAddress;
        data["clientName"] = this.clientName;
        data["browserInfo"] = this.browserInfo;
        data["result"] = this.result;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IUserLoginAttemptDto {
    tenancyName: string | undefined;
    userNameOrEmail: string | undefined;
    clientIpAddress: string | undefined;
    clientName: string | undefined;
    browserInfo: string | undefined;
    result: string | undefined;
    creationTime: moment.Moment | undefined;
}

export class GetLatestWebLogsOutput implements IGetLatestWebLogsOutput {
    latestWebLogLines: string[] | undefined;

    constructor(data?: IGetLatestWebLogsOutput) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["latestWebLogLines"] && data["latestWebLogLines"].constructor === Array) {
                this.latestWebLogLines = [];
                for (let item of data["latestWebLogLines"])
                    this.latestWebLogLines.push(item);
            }
        }
    }

    static fromJS(data: any): GetLatestWebLogsOutput {
        data = typeof data === 'object' ? data : {};
        let result = new GetLatestWebLogsOutput();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.latestWebLogLines && this.latestWebLogLines.constructor === Array) {
            data["latestWebLogLines"] = [];
            for (let item of this.latestWebLogLines)
                data["latestWebLogLines"].push(item);
        }
        return data; 
    }
}

export interface IGetLatestWebLogsOutput {
    latestWebLogLines: string[] | undefined;
}

export enum IncomeStatisticsDateInterval {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum IncomeStatisticsDateInterval2 {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum State {
    _0 = 0, 
    _1 = 1, 
}

export enum SalesSummaryDatePeriod {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum SalesSummaryDatePeriod2 {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum IsTenantAvailableOutputState {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum FriendDtoState {
    _1 = 1, 
    _2 = 2, 
}

export enum ChatMessageDtoSide {
    _1 = 1, 
    _2 = 2, 
}

export enum ChatMessageDtoReadState {
    _1 = 1, 
    _2 = 2, 
}

export enum ChatMessageDtoReceiverReadState {
    _1 = 1, 
    _2 = 2, 
}

export enum UserNotificationState {
    _0 = 0, 
    _1 = 1, 
}

export enum TenantNotificationSeverity {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
    _4 = 4, 
}

export class AdditionalData implements IAdditionalData {
    paypal: { [key: string] : string; } | undefined;

    constructor(data?: IAdditionalData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["Paypal"]) {
                this.paypal = {};
                for (let key in data["Paypal"]) {
                    if (data["Paypal"].hasOwnProperty(key))
                        this.paypal[key] = data["Paypal"][key];
                }
            }
        }
    }

    static fromJS(data: any): AdditionalData {
        data = typeof data === 'object' ? data : {};
        let result = new AdditionalData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.paypal) {
            data["Paypal"] = {};
            for (let key in this.paypal) {
                if (this.paypal.hasOwnProperty(key))
                    data["Paypal"][key] = this.paypal[key];
            }
        }
        return data; 
    }
}

export interface IAdditionalData {
    paypal: { [key: string] : string; } | undefined;
}

export enum CreatePaymentDtoEditionPaymentType {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum CreatePaymentDtoPaymentPeriodType {
    _30 = 30, 
    _365 = 365, 
}

export enum CreatePaymentDtoSubscriptionPaymentGatewayType {
    _1 = 1, 
}

export enum ExecutePaymentDtoGateway {
    _1 = 1, 
}

export enum ExecutePaymentDtoEditionPaymentType {
    _0 = 0, 
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum ExecutePaymentDtoPaymentPeriodType {
    _30 = 30, 
    _365 = 365, 
}

export enum TenantLoginInfoDtoPaymentPeriodType {
    _30 = 30, 
    _365 = 365, 
}

export enum RegisterTenantInputSubscriptionStartType {
    _1 = 1, 
    _2 = 2, 
    _3 = 3, 
}

export enum RegisterTenantInputGateway {
    _1 = 1, 
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}
