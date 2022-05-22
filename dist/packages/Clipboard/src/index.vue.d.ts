declare const _sfc_main: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        text: string;
    }>;
    toClipboard: (text: string, container?: HTMLElement | undefined) => Promise<unknown>;
    handleCopy: (msg: string) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
} & {
    text: string;
} & {}>, {
    text: string;
}>;
export default _sfc_main;
