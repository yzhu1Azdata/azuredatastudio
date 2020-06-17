/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class V1KeyToPath {
    'key'?: string;
    'mode'?: number | null;
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1KeyToPath.attributeTypeMap;
    }
}

