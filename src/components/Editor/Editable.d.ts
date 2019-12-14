import { CSSProperties } from "react";
export interface EditableProps {
    content?: string,
    onChange: (value?: string) => void,
    editorStyle?: CSSProperties,
}
declare const EditableComponent: React.ComponentType<EditableProps>;
export default EditableComponent;
