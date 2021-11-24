declare const linsenDivResize: () => {
    _handleResize: (e: any) => void;
    _removeHandler: (ele: any, handler: any, context: any) => void;
    _createResizeTrigger: (ele: any) => HTMLObjectElement;
    _handleObjectLoad: (evt: any) => void;
};
export { linsenDivResize };
