import { CSSProperties } from "react";
export interface EditorProps {
    content?: string,
    onChange: (value?: string) => void,
    editorStyle?: CSSProperties,
}
declare const EditorComponent: React.ComponentType<EditorProps>;
export default EditorComponent;
