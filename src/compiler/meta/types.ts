/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * MTASA Meta file. Extended for mtasa-lua-compiler
 */
export interface MTASAMeta {
    /**
     * General resource information
     */
    info: {
        /**
         * The author of this resource
         */
        author?: string;
        /**
         * The version of this resource
         */
        version?: string;
        /**
         * The name of this resource
         */
        name?: string;
        /**
         * A brief description of this resource
         */
        description?: string;
        /**
         * The type of this resource
         */
        type: 'gamemode' | 'script' | 'map' | 'misc';
        /**
         * The gamemodes to be compatible with the resource
         */
        gamemodes?: string[];
    };
    /**
     * Internal configuration for compiler
     */
    compilerConfig: {
        /**
         * Directory with resource source files
         */
        srcDir: string;
        /**
         * Output directory name
         */
        resourceDirectoryName?: string;
    };
    /**
     * List of scripts
     */
    scripts?: Script[];
    /**
     * List of bundled scripts
     */
    bundledScripts?: {
        /**
         * TypeScript script file
         */
        src: string;
        /**
         * The type of source code
         */
        type: 'server' | 'client' | 'shared';
        /**
         * When the script file type is "client", this setting controls whether the file is saved on the clients' hard drive
         */
        cache?: boolean;
        /**
         * If set to "false", compatibility checks are skipped
         */
        validate?: boolean;
    }[];
    /**
     * Map definitions
     */
    maps?: {
        /**
         * Must be in the resource source directory
         */
        src: string;
        /**
         * Dimension in which the map will be loaded
         */
        dimension?: number;
    }[];
    /**
     * File definitions
     */
    files?: {
        /**
         * Client-side file name (can be path too eg. "images/image.png")
         *
         */
        src: string;
        /**
         * Whether or not to be sent to the client automatically
         */
        download?: boolean;
    }[];
    /**
     * Include definitions
     */
    includes?: {
        /**
         * Resource name that you want to start with this resource
         */
        resource: string;
        /**
         * Minimum version that resource needs to be
         */
        minVersion?: string;
        /**
         * Maximum version that resource needs to be
         */
        maxVersion?: string;
    }[];
    /**
     * Config definitions
     */
    configs?: {
        /**
         * The file name of the config file
         */
        src: string;
        /**
         * The type of the config file
         */
        type: 'client' | 'server';
    }[];
    /**
     * Export definitions
     */
    exports?: {
        /**
         * The function name
         */
        function: string;
        /**
         * Whether function is exported server-side or client-side
         */
        type: 'client' | 'server' | 'shared';
        /**
         * Can the function be called via HTTP
         */
        http?: boolean;
    }[];
    /**
     * HTML definitions
     */
    htmls?: {
        /**
         * The filename for the HTTP file
         */
        src: string;
        /**
         * The html file is one that is shown by default when visiting /resourceName/ on the server. Only one html can be default, the rest are ignored
         */
        default: boolean;
        /**
         * The html file is not parsed by the Lua interpreter and is treated as binary data. Must be used for binary files
         */
        raw: boolean;
    }[];
    /**
     * Most gamemodes use settings system to let server admins to configure it how they like. For instance you could set round time and then use get and set to get the value or change it, respectively.
     */
    settings?: {
        /**
         * The setting name used by the scripts to get or set the setting value
         */
        name: string;
        /**
         * The setting default value used by the scripts
         */
        value: string;
        /**
         * A friendly name to the setting
         */
        friendlyName?: string;
        /**
         * The values the setting could accept
         */
        accept?: string;
        /**
         * An Example of a value
         */
        examples?: string;
        /**
         * A description of the setting
         */
        desc?: string;
    }[];
    /**
     * Minimum version requirements for this resource to run correctly. When authoring resources, the minimum version should usually be set to the current released version of MTA:SA
     */
    minMtaVersion?: {
        /**
         * The minimum client version
         */
        client: string;
        /**
         * The minimum server version
         */
        server: string;
    };
    /**
     * A list of ACL rights this resource will need. Any user with admin permission can accept or reject a resource ACL request by using the command: /aclrequest [list/allow/deny] <resourceName>
     */
    aclRequests?: {
        /**
         * The right name
         */
        name: string;
        /**
         * Set to true to allow the resource to access this right. Set to false to deny the access to this right
         */
        access: boolean;
    }[];
    /**
     * Controls whether map element data such as "PosX" and "DoubleSided" are transferred to the client. This data is usually not required by most gamemodes or resources. (Map Editor and Interiors require this to be not set to false to work). When set in a gamemode meta.xml, the setting will apply to all maps loaded by that resource.
     */
    syncMapElementData?: boolean;
    /**
     * If not set, the download priority group for a resource defaults to 0. If this is set higher than 0, then the resource will be downloaded and started on the client earlier than other resources. This option is useful for resources with critical client functionality that other things in your gamemode (or fair play) rely on. If set to less than 0 (a negative number, like -1), the resource will be downloaded and started on the client later than other resources.
     */
    downloadPriorityGroup?: number;
    /**
     * Put additional XML tags in this list
     */
    additionalTags?: XMLTagData[];
}
/**
 * Source code for this resource
 */
export interface Script {
    /**
     * TypeScript script file
     */
    src: string;
    /**
     * The type of source code
     */
    type: 'server' | 'client' | 'shared';
    /**
     * When the script file type is "client", this setting controls whether the file is saved on the clients' hard drive
     */
    cache?: boolean;
    /**
     * If set to "false", compatibility checks are skipped
     */
    validate?: boolean;
}
/**
 * XML Tag
 */
export interface XMLTagData {
    /**
     * Tag name
     */
    name: string;
    /**
     * XML Tag value
     */
    value?: string | XMLTagData;
    /**
     * XML Tag properties
     */
    properties?: {
        /**
         * XML Tag Property key
         */
        key?: string;
        /**
         * XML Tag Property value
         */
        value?: string;
    }[];
}
