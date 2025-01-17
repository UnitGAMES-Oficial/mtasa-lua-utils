import {
    createExportsIdentifier,
    OneToManyVisitorResult,
} from 'typescript-to-lua/dist/transformation/utils/lua-ast';
import { Node, TransformationContext } from 'typescript-to-lua';
import { MTASAMeta, Script } from '../compiler/meta/types';
import { CompilerOptions } from '../compiler/cli';
import path from 'path';
import * as ts from 'typescript';

export function prepareOneToManyVisitorResult<P extends Node>(
    rawResult: OneToManyVisitorResult<P>,
): P[] {
    if (rawResult === undefined) {
        return [];
    }

    if (Array.isArray(rawResult)) {
        return rawResult;
    }

    return [rawResult];
}

export function getExportsTableName(): string {
    return createExportsIdentifier().text;
}

export function getGlobalsTableName(): string {
    return '_G';
}

export function isRelativeImport(moduleName: string): boolean {
    return moduleName.startsWith('../') || moduleName.startsWith('./');
}

export function getFileSide(
    filepath: string,
    context: TransformationContext,
): Script['type'] | undefined {
    const options = context.options as CompilerOptions;
    const rootDir = options.originalRootDir ?? '.';

    const scripts = options.resourceSpecific?.scripts?.filter(
        script =>
            path.join(
                rootDir,
                options.resourceSpecific?.compilerConfig.srcDir ?? '',
                script.src,
            ) === path.join(filepath),
    );

    if (scripts === undefined || scripts.length === 0) {
        return undefined;
    }

    return scripts[0].type;
}

export function getResourceDirectoryName(
    resourceMeta: Readonly<MTASAMeta>,
): string {
    return path.basename(resourceMeta.compilerConfig.srcDir);
}

export function getImportNodeModuleFile(
    importNode: Readonly<ts.ImportDeclaration>,
    context: TransformationContext,
): ts.SourceFile {
    return (<any>context.resolver).getExternalModuleFileFromDeclaration(
        importNode,
    );
}

export function isLocalImport(
    importNode: Readonly<ts.ImportDeclaration>,
    context: TransformationContext,
): boolean {
    const rootPath = path.resolve(context.options.rootDir ?? '.');

    const fileName = getImportNodeModuleFile(importNode, context)?.fileName;
    if (!fileName) {
        return false;
    }

    const modulePath = path.resolve(fileName);

    return modulePath.startsWith(rootPath);
}
