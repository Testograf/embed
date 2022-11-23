type AnyObject = Record<string, any>;

interface Window {
  testograf: {
    params: AnyObject;
  };
  ttgrafSetWidgetParams: (params: AnyObject) => void;
  ttgrafSetPopupParams: (params: AnyObject) => void;
  ttgrafSetEmbedParams: (params: AnyObject) => void;
}
