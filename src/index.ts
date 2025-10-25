// Entry point of editor

import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

function loadEditor() {
    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    const themePref = getCookie("theme");

    const isDarkTheme = themePref === "d" || (!themePref && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const parentElement = document.querySelector(".addons-editor-container");
    const textareaElement = document.getElementById("textareacontent") as HTMLInputElement;

    if (!parentElement) {
        console.warn("Could not find a parent element for CodeMirror");
        return;
    }

    if (!textareaElement) {
        console.warn("Could not find a text-area element for CodeMirror");
        return;
    }

    const editor = new EditorView({
        doc: textareaElement.value || "",
        extensions: [
            basicSetup,
            javascript(),
            EditorView.updateListener.of((v) => {
                if (v.docChanged) {
                    // Document changed
                    textareaElement.value = v.state.doc.toString();
                }
            }),
            isDarkTheme ? oneDark : null,
        ].filter(ext => ext !== null),
        parent: parentElement,
    });

    textareaElement.parentElement.style.display = "none";

    (window as any).AddonsCodeMirrorEditor = editor;
}

loadEditor();
