import React from 'react';
import { Sandpack, SandpackProps } from '@codesandbox/sandpack-react';
import { freeCodeCampDark } from "@codesandbox/sandpack-themes";

export interface SandpackPlaygroundProps extends Omit<SandpackProps, 'template'> {
  template?: SandpackProps['template'];
  editorHeight?: number;
  showTabs?: boolean;
}

const defaultFiles: Record<string, string> = {
  '/index.html': `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, Sandpack!</h1>
  </body>
</html>`,
};

const SandpackPlayground: React.FC<SandpackPlaygroundProps> = ({
  template = 'static',
  files = defaultFiles,
  theme = freeCodeCampDark,
  editorHeight = 300,
  showTabs = true,
  options,
  customSetup,
  ...rest
}) => (
  <Sandpack
    template={template}
    files={files}
    theme={theme}
    options={{
      showLineNumbers: true,
      showTabs,
      editorHeight,
      ...options,
    }}
    customSetup={customSetup}
    {...rest}
  />
);

export default SandpackPlayground;
