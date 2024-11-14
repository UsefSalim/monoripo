import "./configcomponent.scss";
import { ReactNode } from "react";
import data from "./data";
export interface ConfigComponentsProps {
    children?: ReactNode;
    solution?: "med" | "pharma" | "ecopara" | "labs" | "sns" | "workspace";
    fonts?: {
        fontFamily: string;
    };
}

export const ConfigComponent = ({
    children,
    solution = "pharma",
    fonts = {
        fontFamily: "Poppins, sans-serif",
    },
}: ConfigComponentsProps) => {
    return (
        <>
            <>{children}</>
            <style>
                {`
                    :root {
                        --sob-primary-50: ${data[solution]?.[50]};
                        --sob-primary-100: ${data[solution]?.[100]};
                        --sob-primary-200: ${data[solution]?.[200]};
                        --sob-primary-300: ${data[solution]?.[300]};
                        --sob-primary-400: ${data[solution]?.[400]};
                        --sob-primary-500: ${data[solution]?.[500]};
                        --sob-primary-600: ${data[solution]?.[600]};
                        --sob-primary-700: ${data[solution]?.[700]};
                        --sob-primary-800: ${data[solution]?.[800]};
                        --sob-primary-900: ${data[solution]?.[900]};
                        --sob-primary-950: ${data[solution]?.[950]};

                        --sob-font-color-default: ${data[solution]?.["text-default"]};

                        --sob-color-background-default: ${data[solution]?.['background-default']};
                        --sob-color-background-hover :${data[solution]?.['background-hover']};
                        --sob-color-background-active : ${data[solution]?.['background-active']};
                        --sob-color-background-inverse : ${data[solution]?.['background-inverse']};

                        --sob-color-border-default : ${data[solution]?.['border-default']};
                        --sob-color-border-active : ${data[solution]?.['border-active']};

                        --sob-color-icon-default: ${data[solution]?.['icon-default']};
                        --sob-color-surface-hover: ${data[solution]?.['surface-hover']};

                      

                        --sob-font-family: ${fonts?.fontFamily};
                    }
                `}
            </style>
        </>
    );
};
