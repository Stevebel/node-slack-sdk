import EventEmitter = require('eventemitter3');
import { AgentOption, TLSOptions } from './util';
import { CodedError, ErrorCode } from './errors';
import { LogLevel, LoggingFunc } from './logger';
import { RetryOptions } from './retry-policies';
import Method, * as methods from './methods';
/**
 * A client for Slack's Web API
 *
 * This client provides an alias for each {@link https://api.slack.com/methods|Web API method}. Each method is
 * a convenience wrapper for calling the {@link WebClient#apiCall} method using the method name as the first parameter.
 */
export declare class WebClient extends EventEmitter {
    /**
     * Authentication and authorization token for accessing Slack Web API (usually begins with `xoxp`, `xoxb`, or `xoxa`)
     */
    readonly token: string;
    /**
     * The base URL for reaching Slack's Web API. Consider changing this value for testing purposes.
     */
    readonly slackApiUrl: string;
    /**
     * Configuration for retry operations. See {@link https://github.com/tim-kos/node-retry|node-retry} for more details.
     */
    private retryConfig;
    /**
     * Queue of requests in which a maximum of {@link WebClientOptions.maxRequestConcurrency} can concurrently be
     * in-flight.
     */
    private requestQueue;
    /**
     * An agent used to manage TCP connections for requests. Most commonly used to implement proxy support. See
     * npm packages `tunnel` and `https-proxy-agent` for information on how to construct a proxy agent.
     */
    private agentConfig?;
    /**
     * Configuration for custom TLS handling
     */
    private tlsConfig;
    /**
     * The name used to prefix all logging generated from this object
     */
    private static loggerName;
    /**
     * This object's logger instance
     */
    private logger;
    /**
     * The value for the User-Agent HTTP header (used for instrumentation).
     */
    private userAgent;
    /**
     * @param token - An API token to authenticate/authorize with Slack (usually start with `xoxp`, `xoxb`, or `xoxa`)
     */
    constructor(token: string, {slackApiUrl, logger, logLevel, maxRequestConcurrency, retryConfig, agent, tls}?: WebClientOptions);
    /**
     * Generic method for calling a Web API method
     *
     * @param method the Web API method to call {@see https://api.slack.com/methods}
     * @param options options
     * @param callback callback if you don't want a promise returned
     */
    apiCall(method: string, options?: WebAPICallOptions): Promise<WebAPICallResult>;
    apiCall(method: string, options: WebAPICallOptions, callback: WebAPIResultCallback): void;
    /**
     * api method family
     */
    readonly api: {
        test: Method<methods.APITestArguments>;
    };
    /**
     * apps method family
     */
    readonly apps: {
        permissions: {
            info: Method<methods.TokenOverridable>;
            request: Method<methods.AppsPermissionsRequestArguments>;
        };
    };
    /**
     * auth method family
     */
    readonly auth: {
        revoke: Method<methods.AuthRevokeArguments>;
        test: Method<methods.TokenOverridable>;
    };
    /**
     * bots method family
     */
    readonly bots: {
        info: Method<methods.BotsInfoArguments>;
    };
    /**
     * channels method family
     */
    readonly channels: {
        archive: Method<methods.ChannelsArchiveArguments>;
        create: Method<methods.ChannelsCreateArguments>;
        history: Method<methods.ChannelsHistoryArguments>;
        info: Method<methods.ChannelsInfoArguments>;
        invite: Method<methods.ChannelsInviteArguments>;
        join: Method<methods.ChannelsJoinArguments>;
        kick: Method<methods.ChannelsKickArguments>;
        leave: Method<methods.ChannelsLeaveArguments>;
        list: Method<methods.ChannelsListArguments>;
        mark: Method<methods.ChannelsMarkArguments>;
        rename: Method<methods.ChannelsRenameArguments>;
        replies: Method<methods.ChannelsRepliesArguments>;
        setPurpose: Method<methods.ChannelsSetPurposeArguments>;
        setTopic: Method<methods.ChannelsSetTopicArguments>;
        unarchive: Method<methods.ChannelsUnarchiveArguments>;
    };
    /**
     * chat method family
     */
    readonly chat: {
        delete: Method<methods.ChatDeleteArguments>;
        getPermalink: Method<methods.ChatGetPermalinkArguments>;
        meMessage: Method<methods.ChatMeMessageArguments>;
        postEphemeral: Method<methods.ChatPostEphemeralArguments>;
        postMessage: Method<methods.ChatPostMessageArguments>;
        unfurl: Method<methods.ChatUnfurlArguments>;
        update: Method<methods.ChatUpdateArguments>;
    };
    /**
     * conversations method family
     */
    readonly conversations: {
        archive: Method<methods.TokenOverridable>;
        close: Method<methods.TokenOverridable>;
        create: Method<methods.TokenOverridable>;
        history: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        invite: Method<methods.TokenOverridable>;
        join: Method<methods.TokenOverridable>;
        kick: Method<methods.TokenOverridable>;
        leave: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        members: Method<methods.TokenOverridable>;
        open: Method<methods.TokenOverridable>;
        rename: Method<methods.TokenOverridable>;
        replies: Method<methods.TokenOverridable>;
        setPurpose: Method<methods.TokenOverridable>;
        setTopic: Method<methods.TokenOverridable>;
        unarchive: Method<methods.TokenOverridable>;
    };
    /**
     * dialog method family
     */
    readonly dialog: {
        open: Method<methods.TokenOverridable>;
    };
    /**
     * dnd method family
     */
    readonly dnd: {
        endDnd: Method<methods.TokenOverridable>;
        endSnooze: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        setSnooze: Method<methods.TokenOverridable>;
        teamInfo: Method<methods.TokenOverridable>;
    };
    /**
     * emoji method family
     */
    readonly emoji: {
        list: Method<methods.TokenOverridable>;
    };
    /**
     * files method family
     */
    readonly files: {
        delete: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        revokePublicURL: Method<methods.TokenOverridable>;
        sharedPublicURL: Method<methods.TokenOverridable>;
        upload: Method<methods.TokenOverridable>;
        comments: {
            add: Method<methods.TokenOverridable>;
            delete: Method<methods.TokenOverridable>;
            edit: Method<methods.TokenOverridable>;
        };
    };
    /**
     * groups method family
     */
    readonly groups: {
        archive: Method<methods.TokenOverridable>;
        create: Method<methods.TokenOverridable>;
        createChild: Method<methods.TokenOverridable>;
        history: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        invite: Method<methods.TokenOverridable>;
        kick: Method<methods.TokenOverridable>;
        leave: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        mark: Method<methods.TokenOverridable>;
        open: Method<methods.TokenOverridable>;
        rename: Method<methods.TokenOverridable>;
        replies: Method<methods.TokenOverridable>;
        setPurpose: Method<methods.TokenOverridable>;
        setTopic: Method<methods.TokenOverridable>;
        unarchive: Method<methods.TokenOverridable>;
    };
    /**
     * im method family
     */
    readonly im: {
        close: Method<methods.TokenOverridable>;
        history: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        mark: Method<methods.TokenOverridable>;
        open: Method<methods.TokenOverridable>;
        replies: Method<methods.TokenOverridable>;
    };
    /**
     * migration method family
     */
    readonly migration: {
        exchange: Method<methods.TokenOverridable>;
    };
    /**
     * mpim method family
     */
    readonly mpim: {
        close: Method<methods.TokenOverridable>;
        history: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        mark: Method<methods.TokenOverridable>;
        open: Method<methods.TokenOverridable>;
        replies: Method<methods.TokenOverridable>;
    };
    /**
     * oauth method family
     */
    readonly oauth: {
        access: Method<methods.TokenOverridable>;
        token: Method<methods.TokenOverridable>;
    };
    /**
     * pins method family
     */
    readonly pins: {
        add: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        remove: Method<methods.TokenOverridable>;
    };
    /**
     * reactions method family
     */
    readonly reactions: {
        add: Method<methods.TokenOverridable>;
        get: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        remove: Method<methods.TokenOverridable>;
    };
    /**
     * reminders method family
     */
    readonly reminders: {
        add: Method<methods.TokenOverridable>;
        complete: Method<methods.TokenOverridable>;
        delete: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
    };
    /**
     * rtm method family
     */
    readonly rtm: {
        connect: Method<methods.TokenOverridable>;
        start: Method<methods.TokenOverridable>;
    };
    /**
     * search method family
     */
    readonly search: {
        all: Method<methods.TokenOverridable>;
        files: Method<methods.TokenOverridable>;
        messages: Method<methods.TokenOverridable>;
    };
    /**
     * stars method family
     */
    readonly stars: {
        add: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        remove: Method<methods.TokenOverridable>;
    };
    /**
     * team method family
     */
    readonly team: {
        accessLogs: Method<methods.TokenOverridable>;
        billableInfo: Method<methods.TokenOverridable>;
        info: Method<methods.TokenOverridable>;
        integrationLogs: Method<methods.TokenOverridable>;
        profile: {
            get: Method<methods.TokenOverridable>;
        };
    };
    /**
     * usergroups method family
     */
    readonly usergroups: {
        create: Method<methods.TokenOverridable>;
        disable: Method<methods.TokenOverridable>;
        enable: Method<methods.TokenOverridable>;
        list: Method<methods.TokenOverridable>;
        update: Method<methods.TokenOverridable>;
        users: {
            list: Method<methods.TokenOverridable>;
            update: Method<methods.TokenOverridable>;
        };
    };
    /**
     * users method family
     */
    readonly users: {
        deletePhoto: Method<methods.TokenOverridable>;
        getPresence: Method<methods.UsersGetPresenceArguments>;
        identity: Method<methods.TokenOverridable>;
        info: Method<methods.UsersInfoArguments>;
        list: Method<methods.UsersListArguments>;
        lookupByEmail: Method<methods.UsersLookupByEmailArguments>;
        setActive: Method<methods.TokenOverridable>;
        setPhoto: Method<methods.UsersSetPhotoArguments>;
        setPresence: Method<methods.UsersSetPresenceArguments>;
        profile: {
            get: Method<methods.TokenOverridable>;
            set: Method<methods.TokenOverridable>;
        };
    };
    /**
     * Transforms options into an object suitable for got to use as a body. This can be one of two things:
     * -  A FormCanBeURLEncoded object, which is just a key-value object where the values have been flattened and
     *    got can serialize it into application/x-www-form-urlencoded content type.
     * -  A BodyCanBeFormMultipart: when the options includes a file, and got must use multipart/form-data content type.
     *
     * @param options arguments for the Web API method
     */
    private serializeApiCallOptions(options);
    /**
     * Processes an HTTP response into a WebAPICallResult by performing JSON parsing on the body and merging relevent
     * HTTP headers into the object.
     * @param response
     */
    private buildResult(response);
}
export default WebClient;
export interface WebClientOptions {
    slackApiUrl?: string;
    logger?: LoggingFunc;
    logLevel?: LogLevel;
    maxRequestConcurrency?: number;
    retryConfig?: RetryOptions;
    agent?: AgentOption;
    tls?: TLSOptions;
}
export interface WebAPICallOptions {
}
export interface WebAPICallResult {
    ok: boolean;
    error?: string;
    scopes?: string[];
    acceptedScopes?: string[];
    retryAfter?: number;
    response_metadata?: {
        warnings?: string[];
    };
    [additional: string]: any;
}
export interface WebAPIResultCallback {
    (error: WebAPICallError, result: WebAPICallResult): void;
}
export declare type WebAPICallError = WebAPIPlatformError | WebAPIRequestError | WebAPIReadError | WebAPIHTTPError;
export interface WebAPIPlatformError extends CodedError {
    code: ErrorCode.PlatformError;
    data: WebAPICallResult & {
        error: string;
    };
}
export interface WebAPIRequestError extends CodedError {
    code: ErrorCode.RequestError;
    original: Error;
}
export interface WebAPIReadError extends CodedError {
    code: ErrorCode.ReadError;
    original: Error;
}
export interface WebAPIHTTPError extends CodedError {
    code: ErrorCode.HTTPError;
    original: Error;
}
