window.tailwind = window.tailwind || {};

const withOpacity = (variableName) => {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `color-mix(in srgb, var(${variableName}) calc(${opacityValue} * 100%), transparent)`;
        }
        return `var(${variableName})`;
    };
};

window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-container-lowest": withOpacity("--surface-container-lowest"),
                "outline-variant": withOpacity("--outline-variant"),
                "inverse-on-surface": withOpacity("--inverse-on-surface"),
                "tertiary": withOpacity("--tertiary"),
                "outline": withOpacity("--outline"),
                "on-tertiary": withOpacity("--on-tertiary"),
                "on-tertiary-fixed": withOpacity("--on-tertiary-fixed"),
                "primary-container": withOpacity("--primary-container"),
                "inverse-primary": withOpacity("--inverse-primary"),
                "background": withOpacity("--background"),
                "on-primary-fixed-variant": withOpacity("--on-primary-fixed-variant"),
                "tertiary-fixed": withOpacity("--tertiary-fixed"),
                "on-error-container": withOpacity("--on-error-container"),
                "on-surface": withOpacity("--on-surface"),
                "on-secondary": withOpacity("--on-secondary"),
                "surface-variant": withOpacity("--surface-variant"),
                "error": withOpacity("--error"),
                "surface-container": withOpacity("--surface-container"),
                "on-tertiary-fixed-variant": withOpacity("--on-tertiary-fixed-variant"),
                "secondary-fixed": withOpacity("--secondary-fixed"),
                "on-primary-container": withOpacity("--on-primary-container"),
                "secondary-container": withOpacity("--secondary-container"),
                "secondary": withOpacity("--secondary"),
                "surface-container-highest": withOpacity("--surface-container-highest"),
                "surface-tint": withOpacity("--surface-tint"),
                "on-primary-fixed": withOpacity("--on-primary-fixed"),
                "primary-fixed": withOpacity("--primary-fixed"),
                "inverse-surface": withOpacity("--inverse-surface"),
                "on-secondary-fixed-variant": withOpacity("--on-secondary-fixed-variant"),
                "primary": withOpacity("--primary"),
                "on-tertiary-container": withOpacity("--on-tertiary-container"),
                "on-error": withOpacity("--on-error"),
                "error-container": withOpacity("--error-container"),
                "surface": withOpacity("--surface"),
                "on-surface-variant": withOpacity("--on-surface-variant"),
                "primary-fixed-dim": withOpacity("--primary-fixed-dim"),
                "tertiary-container": withOpacity("--tertiary-container"),
                "secondary-fixed-dim": withOpacity("--secondary-fixed-dim"),
                "on-secondary-fixed": withOpacity("--on-secondary-fixed"),
                "on-primary": withOpacity("--on-primary"),
                "tertiary-fixed-dim": withOpacity("--tertiary-fixed-dim"),
                "surface-dim": withOpacity("--surface-dim"),
                "on-background": withOpacity("--on-background"),
                "surface-container-low": withOpacity("--surface-container-low"),
                "surface-container-high": withOpacity("--surface-container-high"),
                "on-secondary-container": withOpacity("--on-secondary-container"),
                "surface-bright": withOpacity("--surface-bright")
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "xl": "32px",
                "xs": "4px",
                "md": "16px",
                "margin-mobile": "16px",
                "margin-desktop": "32px",
                "2xl": "48px",
                "gutter": "24px",
                "lg": "24px",
                "base": "4px",
                "sm": "8px"
            },
            "fontFamily": {
                "display-lg-mobile": ["Inter", "sans-serif"],
                "headline-md": ["Inter", "sans-serif"],
                "label-sm": ["Inter", "sans-serif"],
                "body-sm": ["Inter", "sans-serif"],
                "label-md": ["Inter", "sans-serif"],
                "body-base": ["Inter", "sans-serif"],
                "display-lg": ["Inter", "sans-serif"],
                "sans": ["Inter", "sans-serif"]
            },
            "fontSize": {
                "display-lg-mobile": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                "headline-md": ["18px", { "lineHeight": "24px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                "body-sm": ["13px", { "lineHeight": "18px", "letterSpacing": "0em", "fontWeight": "400" }],
                "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.01em", "fontWeight": "500" }],
                "body-base": ["14px", { "lineHeight": "20px", "letterSpacing": "0em", "fontWeight": "400" }],
                "display-lg": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.02em", "fontWeight": "600" }]
            }
        }
    }
};
